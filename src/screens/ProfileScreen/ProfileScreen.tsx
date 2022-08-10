import React, { useLayoutEffect, useState } from 'react';
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
import { getPersonalInfo } from '../../store/selectors/userSelector';
import { fetchPersonalInfoAC } from '../../store/actions/userAC';
import { COLORS } from '../../colors/colors';
import { AppButton } from '../../components/Button/AppButton';
import { buttonsName } from '../../enum/buttonsName';
import { HeaderTextItem } from '../../components/Text/HeaderTextItem/HeaderTextItem';
import { TextItemThin } from '../../components/Text/TextItemThin/TextItemThin';
import { TextItemBold } from '../../components/Text/TextItemBold/TextItemBold';

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

export const ProfileScreen = (props: ProfileScreenProps) => {
  const currentUserId = useSelector(getCurrentUserId);
  const personalInfoRedux = useSelector(getPersonalInfo);
  console.log('personalInfoRedux', personalInfoRedux);

  const dispatch = useDispatch();

  const fetchPersonalInfo = async () => {
    const reference: FirebaseDatabaseTypes.Reference = await database
      .ref(`/users/${currentUserId}`)
      .child('personalInfo');
    const snapshot: FirebaseDatabaseTypes.DataSnapshot = await reference.once('value');

    if (snapshot.val()) {
      const personalInfoFB = snapshot.val();
      dispatch(fetchPersonalInfoAC(personalInfoFB));
    }

    if (!snapshot.val()) {
      await database.ref(`/users/${currentUserId}`).child('personalInfo').set(initialPersonalInfo);
      dispatch(fetchPersonalInfoAC(initialPersonalInfo));
    }
  };

  useLayoutEffect(() => {
    fetchPersonalInfo();
  }, []);

  // const { petName, petAge, petHobbies } = personalInfoRedux;

  const NAME: string = personalInfoRedux.petName;
  const AGE = personalInfoRedux.petAge;
  const HOBBY = personalInfoRedux.petHobbies;

  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [petName, setPetName] = useState<string>(NAME);
  const [petAge, setPetAge] = useState<string>(AGE);
  const [petHobbies, setPetHobbies] = useState<string>(HOBBY);

  const photo = useSelector(getCurrentUserPhoto);
  const currentUserName = useSelector(getCurrentUserName);

  const photoString = String(photo);

  const onSaveChangedNamePress = async () => {
    await database.ref(`/users/${currentUserId}/personalInfo`).update({
      petName,
      petAge,
      petHobbies,
    });
    fetchPersonalInfo();
    setIsEdit(false);
  };

  return (
    <ImageBackground style={styles.mainContainer} source={img}>
      <SafeAreaView style={styles.rootContainer}>
        <View style={styles.avatarContainer}>
          <ImagePickerCrop photoString={photoString} sizeH={150} sizeW={150} />
          {currentUserName && <TextItemThin style={{ marginTop: 50 }}>{currentUserName}</TextItemThin>}
          <Icon
            name={iconsName.CREATE_OUTLINE}
            size={24}
            onPress={() => {
              setIsEdit(true);
            }}
          />
        </View>
        <View>
          <HeaderTextItem>Home pet</HeaderTextItem>
          <View style={styles.textBlock}>
            <TextItemBold>pet name:</TextItemBold>
            {isEdit ? (
              <TextInput
                value={petName}
                onChangeText={text => setPetName(text)}
                autoFocus={true}
                maxLength={19}
                onSubmitEditing={onSaveChangedNamePress}
                style={styles.text}
              />
            ) : (
              <TextItemThin>{petName}</TextItemThin>
            )}
          </View>
          <View style={styles.textBlock}>
            <TextItemBold>age:</TextItemBold>
            {isEdit ? (
              <TextInput
                value={petAge}
                onChangeText={text => setPetAge(text)}
                autoFocus={true}
                maxLength={19}
                onSubmitEditing={onSaveChangedNamePress}
                style={styles.text}
              />
            ) : (
              <TextItemThin>{petAge}</TextItemThin>
            )}
          </View>
          <View style={styles.textBlock}>
            <TextItemBold>hobbies: </TextItemBold>
            {isEdit ? (
              <TextInput
                value={petHobbies}
                onChangeText={text => setPetHobbies(text)}
                autoFocus={true}
                onSubmitEditing={onSaveChangedNamePress}
                style={styles.text}
              />
            ) : (
              <TextItemThin>{petHobbies}</TextItemThin>
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
