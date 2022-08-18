import React, { FC, useLayoutEffect, useState } from 'react';
import { ImageBackground, SafeAreaView, TextInput, View } from 'react-native';
import { ImagePickerCrop } from '../../components/ImagePicker/ImagePickerCrop';
import { styles } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUserId, getCurrentUserName, getCurrentUserPhoto } from '../../store/selectors/loginSelector';
import Icon from 'react-native-vector-icons/Ionicons';
import { iconsName } from '../../enum/iconsName';
import { ProfileScreenProps } from './type';
import { database } from '../../utils/getDataBaseURL';
import { FirebaseDatabaseTypes } from '@react-native-firebase/database';
import { fetchPersonalInfoAC } from '../../store/actions/userAC';
import { COLORS } from '../../colors/colors';
import { AppButton } from '../../components/Button/AppButton';
import { buttonsName } from '../../enum/buttonsName';
import { HeaderTextItem } from '../../components/Text/HeaderTextItem/HeaderTextItem';
import { TextItemThin } from '../../components/Text/TextItemThin/TextItemThin';
import { TextItemBold } from '../../components/Text/TextItemBold/TextItemBold';
import { useInput } from '../../hooks/useInput';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const img = require('../../assets/white_buldog.jpeg');

export type PersonalInfoType = {
  petName: string;
  petAge: string;
  petHobbies: string;
};

const initialPersonalInfo: PersonalInfoType = {
  petName: 'pet name',
  petAge: 'pet age',
  petHobbies: 'pet hobbies',
};

export const ProfileScreen: FC<ProfileScreenProps> = props => {
  const currentUserId = useSelector(getCurrentUserId);
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const petName = useInput('');
  const petAge = useInput('');
  const petHobbies = useInput('');

  const photo = useSelector(getCurrentUserPhoto);
  const currentUserName = useSelector(getCurrentUserName);

  const photoString = String(photo);

  const dispatch = useDispatch();

  const fetchPersonalInfo = async () => {
    const reference: FirebaseDatabaseTypes.Reference = await database
      .ref(`/users/${currentUserId}`)
      .child('personalInfo');
    const snapshot: FirebaseDatabaseTypes.DataSnapshot = await reference.once('value');

    if (snapshot.val()) {
      const personalInfoFB: PersonalInfoType = snapshot.val();
      dispatch(fetchPersonalInfoAC(personalInfoFB));
      petName.onChangeText(personalInfoFB.petName);
      petAge.onChangeText(personalInfoFB.petAge);
      petHobbies.onChangeText(personalInfoFB.petHobbies);
    }

    if (!snapshot.val()) {
      await database.ref(`/users/${currentUserId}`).child('personalInfo').set(initialPersonalInfo);
      dispatch(fetchPersonalInfoAC(initialPersonalInfo));
    }
  };

  useLayoutEffect(() => {
    fetchPersonalInfo();
  }, []);

  const onSaveChangedNamePress = async () => {
    await database.ref(`/users/${currentUserId}/personalInfo`).update({
      petName: petName.value,
      petAge: petAge.value,
      petHobbies: petHobbies.value,
    });
    fetchPersonalInfo();
    setIsEdit(false);
  };

  return (
    <ImageBackground style={styles.mainContainer} source={img}>
      <SafeAreaView style={styles.rootContainer}>
        <View style={styles.avatarContainer}>
          <ImagePickerCrop photoString={photoString} sizeH={100} sizeW={100} />
          {currentUserName && <TextItemThin style={styles.currentNameText}>{currentUserName}</TextItemThin>}
          <Icon
            name={iconsName.CREATE_OUTLINE}
            size={24}
            onPress={() => {
              setIsEdit(true);
            }}
            color={COLORS.text.dark_blue}
          />
        </View>
        <View>
          <HeaderTextItem>Home pet</HeaderTextItem>
          <View style={styles.textBlock}>
            <TextItemBold>pet name:</TextItemBold>
            {isEdit ? (
              <TextInput
                {...petName}
                autoFocus={true}
                maxLength={19}
                onSubmitEditing={onSaveChangedNamePress}
                style={styles.text}
              />
            ) : (
              <TextItemThin>{petName.value}</TextItemThin>
            )}
          </View>
          <View style={styles.textBlock}>
            <TextItemBold>age:</TextItemBold>
            {isEdit ? (
              <TextInput
                {...petAge}
                autoFocus={true}
                maxLength={19}
                onSubmitEditing={onSaveChangedNamePress}
                style={styles.text}
              />
            ) : (
              <TextItemThin>{petAge.value}</TextItemThin>
            )}
          </View>
          <View style={styles.textBlock}>
            <TextItemBold>hobbies: </TextItemBold>
            {isEdit ? (
              <TextInput
                {...petHobbies}
                autoFocus={true}
                onSubmitEditing={onSaveChangedNamePress}
                style={styles.text}
              />
            ) : (
              <TextItemThin>{petHobbies.value}</TextItemThin>
            )}
          </View>
        </View>
        {isEdit ? (
          <View style={styles.buttonContainer}>
            <AppButton
              onPress={() => {
                onSaveChangedNamePress();
              }}
              title={buttonsName.SAVE}
              backgroundColor={COLORS.buttons.peach}
            />
          </View>
        ) : null}
      </SafeAreaView>
    </ImageBackground>
  );
};
