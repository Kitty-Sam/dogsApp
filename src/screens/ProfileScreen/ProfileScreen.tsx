import React, { FC, useEffect, useLayoutEffect, useState } from 'react';
import { ImageBackground, SafeAreaView, TextInput, View } from 'react-native';
import { styles } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUserId, getCurrentUserName } from '../../store/selectors/loginSelector';
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
import { getPersonalInfo } from '../../store/selectors/userSelector';
import { UploadImage } from '../../components/UploadImage/UploadImage';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const img = require('../../assets/white_buldog.jpeg');

export type PersonalInfoType = {
  petName: string;
  petAge: string;
  petBreed: string;
};

export const ProfileScreen: FC<ProfileScreenProps> = props => {
  const currentUserId = useSelector(getCurrentUserId);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const currentUserInfo = useSelector(getPersonalInfo);

  const petName = useInput(!Object.keys(currentUserInfo).length ? 'edit' : currentUserInfo.petName);
  const petAge = useInput(!Object.keys(currentUserInfo).length ? 'edit' : currentUserInfo.petAge);
  const petBreed = useInput(!Object.keys(currentUserInfo).length ? 'edit' : currentUserInfo.petBreed);

  const [photo, setPhoto] = useState();

  useEffect(() => {
    const photoStable = async () => {
      const reference: FirebaseDatabaseTypes.Reference = await database.ref(`/users/${currentUserId}/photo`);
      const snapshot: FirebaseDatabaseTypes.DataSnapshot = await reference.once('value');
      if (snapshot.val()) {
        const photoSnap: any = snapshot.val();
        console.log('photoSnap', photoSnap);
        setPhoto(photoSnap);
      }
    };
    photoStable();
  });

  // const photo = useSelector(getCurrentUserPhoto);

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
    }
  };

  useLayoutEffect(() => {
    fetchPersonalInfo();
  }, []);

  const onSaveChangedNamePress = async () => {
    await database.ref(`/users/${currentUserId}/personalInfo`).update({
      petName: petName.value,
      petAge: petAge.value,
      petBreed: petBreed.value,
    });
    fetchPersonalInfo();
    setIsEdit(false);
  };

  return (
    <ImageBackground style={styles.mainContainer} source={img}>
      <SafeAreaView style={styles.rootContainer}>
        <View style={styles.avatarContainer}>
          <UploadImage avatar={photoString} sizeH={70} sizeW={70} />
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
          <HeaderTextItem>Pet</HeaderTextItem>
          <View style={styles.textBlock}>
            <TextItemBold>pet name: </TextItemBold>
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
            <TextItemBold>age: </TextItemBold>
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
            <TextItemBold>bread: </TextItemBold>
            {isEdit ? (
              <TextInput {...petBreed} autoFocus={true} onSubmitEditing={onSaveChangedNamePress} style={styles.text} />
            ) : (
              <TextItemThin>{petBreed.value}</TextItemThin>
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
