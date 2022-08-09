import React, { useLayoutEffect, useState } from 'react';
import { ImageBackground, Text, TextInput, TouchableOpacity, View } from 'react-native';
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
import { AppButton } from '../../components/Button/CustomSquareButton';
import { buttonsName } from '../../enum/buttonsName';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const img = require('../../assets/white_buldog.jpeg');

export type PersonalInfoType = {
  petName: string;
  petAge: string;
  petHobbies: string;
};

export const ProfileScreen = (props: ProfileScreenProps) => {
  const currentUserId = useSelector(getCurrentUserId);
  const personalInfoRedux = useSelector(getPersonalInfo);

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
      await database.ref(`/users/${currentUserId}`).child('personalInfo').set({
        petName: 'pet name',
        petAge: 'pet age',
        petHobbies: 'pet hobbies',
      });
      dispatch(
        fetchPersonalInfoAC({
          petName: 'pet name',
          petAge: 'pet age',
          petHobbies: 'pet hobbies',
        }),
      );
    }
  };

  useLayoutEffect(() => {
    fetchPersonalInfo();
  }, []);

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
    <ImageBackground style={styles.container} source={img}>
      <View style={{ margin: 24 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <ImagePickerCrop photoString={photoString} sizeH={170} sizeW={170} />
          {currentUserName && <Text style={styles.userNameText}>{currentUserName}</Text>}
          <Icon
            name={iconsName.CREATE_OUTLINE}
            size={24}
            onPress={() => {
              setIsEdit(true);
            }}
          />
        </View>
        <View>
          <Text style={styles.mainHeaderText}>Home pet</Text>
          <TouchableOpacity style={styles.textBlock}>
            <Text style={styles.headerText}>pet name:</Text>
            {isEdit ? (
              <TextInput
                value={petName}
                onChangeText={text => setPetName(text)}
                autoFocus={true}
                maxLength={19}
                onSubmitEditing={onSaveChangedNamePress}
                style={[styles.text, { borderBottomColor: COLORS.text.grey, borderBottomWidth: 1 }]}
              />
            ) : (
              <Text style={styles.text}>{petName}</Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity style={styles.textBlock}>
            <Text style={styles.headerText}>age </Text>
            {isEdit ? (
              <TextInput
                value={petAge}
                onChangeText={text => setPetAge(text)}
                autoFocus={true}
                maxLength={19}
                onSubmitEditing={onSaveChangedNamePress}
                style={[styles.text, { borderBottomColor: COLORS.text.grey, borderBottomWidth: 1 }]}
              />
            ) : (
              <Text style={styles.text}>{petAge}</Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity style={styles.textBlock}>
            <Text style={styles.headerText}>hobbies: </Text>
            {isEdit ? (
              <TextInput
                value={petHobbies}
                onChangeText={text => setPetHobbies(text)}
                autoFocus={true}
                numberOfLines={2}
                onSubmitEditing={onSaveChangedNamePress}
                style={[styles.text, { borderBottomColor: COLORS.text.grey, borderBottomWidth: 1, width: 100 }]}
              />
            ) : (
              <Text style={styles.text}>{petHobbies}</Text>
            )}
          </TouchableOpacity>
        </View>
        {isEdit ? (
          <View style={{ width: '40%' }}>
            <AppButton
              onPress={() => {
                onSaveChangedNamePress();
              }}
              title={buttonsName.SAVE}
              backgroundColor={COLORS.buttons.peach}
            />
          </View>
        ) : null}
      </View>
    </ImageBackground>
  );
};
