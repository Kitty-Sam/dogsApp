import React, { FC, useState } from 'react';
import { ActivityIndicator, Image, ScrollView, View } from 'react-native';
import { styles } from '../PetUniteScreen/style';
import { EditProfileScreenProps } from './type';
import { LoadImagePickerButton } from '../../components/LoadImagePickerButton/LoadImagePickerButton';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUserId } from '../../store/selectors/loginSelector';
import { inputsPlaceholdersName } from '../../enum/inputPlaceholdersName';
import { TextInput } from 'react-native-paper';
import { useInput } from '../../hooks/useInput';
import { Gap } from '../../components/Gap/Gap';
import DatePicker from 'react-native-date-picker';
import { getData } from '../../utils/getData';
import { COLORS } from '../../colors/colors';
import { AppButton } from '../../components/Button/AppButton';
import { buttonsName } from '../../enum/buttonsName';
import { put } from '@redux-saga/core/effects';
import { database } from '../../utils/getDataBaseURL';
import { addPersonalPetAC } from '../../store/actions/userAC';
import { getGalleryImages } from '../../utils/getImagesFromStore';
import { PetsNavigationName } from '../../enum/navigation';
import { fetchPersonalPetsAction } from '../../store/sagas/sagaActions/fetchPersonalPets';
import { toggleAppStatus } from '../../store/actions/appAC';
import { requestStatus } from '../../store/reducers/appReducer';
import { Loader } from '../../components/Loader/Loader';
import { getAppStatus } from '../../store/selectors/appSelector';

export const EditPetProfileScreen: FC<EditProfileScreenProps> = props => {
  const { navigation, route } = props;
  const { nickName, description, breed, photo, chip_id, about } = route.params;

  const statusApp = useSelector(getAppStatus);

  const petName = useInput(nickName);
  const petColor = useInput(description);
  const petBreed = useInput(breed);
  const petChipId = useInput(chip_id);
  const petAbout = useInput(about ? about : '');

  const [image, setImage] = useState<string>(photo);
  const [loading, setLoading] = useState<boolean>(false);

  const [date, setDate] = useState<Date>(new Date());
  const [open, setOpen] = useState<boolean>(false);

  const onLoading = (value: boolean) => {
    setLoading(value);
  };

  const dispatch = useDispatch();

  const currentUserId = useSelector(getCurrentUserId);

  const savePress = async () => {
    dispatch(toggleAppStatus(requestStatus.LOADING));
    const photoUrls = await getGalleryImages('animals', nickName, currentUserId);
    const selectedPhotoUrl = photoUrls?.[0];
    if (selectedPhotoUrl) {
      try {
        await database.ref(`/users/${currentUserId}/personalInfo/${petName.value}`).update({
          nickName: petName.value,
          age: getData(date),
          description: petColor.value,
          breed: petBreed.value,
          chip_id: petChipId.value,
          photo: image,
          about: petAbout.value,
        });
        await put(
          addPersonalPetAC({
            nickName: petName.value,
            age: getData(date),
            description: petColor.value,
            breed: petBreed.value,
            chip_id: petChipId.value,
            photo: image,
            about: petAbout.value,
          }),
        );
        navigation.navigate(PetsNavigationName.PET_UNITE, {
          nickName: petName.value,
          age: getData(date),
          description: petColor.value,
          breed: petBreed.value,
          chip_id: petChipId.value,
          photo: image,
          about: petAbout.value,
        });
        dispatch(fetchPersonalPetsAction());
        dispatch(toggleAppStatus(requestStatus.SUCCEEDED));
      } catch (error: any) {
        console.warn(error);
      }
    }
  };

  return (
    <ScrollView style={styles.root} showsVerticalScrollIndicator={false}>
      {statusApp === requestStatus.LOADING ? (
        <Loader text={'Waiting for a few minutes...'} />
      ) : (
        <>
          <View style={styles.mainBlock}>
            {loading && <ActivityIndicator />}
            {
              <Image
                source={{ uri: image }}
                style={styles.image}
                onLoadStart={() => onLoading(true)}
                onLoadEnd={() => onLoading(false)}
              />
            }
            <View style={{ position: 'absolute', left: 0, bottom: 30 }}>
              <LoadImagePickerButton
                setImage={setImage}
                currentUserId={currentUserId}
                screen={'Profile'}
                id={nickName}
              />
            </View>
          </View>
          <Gap size={4} />
          <View>
            <TextInput
              label={inputsPlaceholdersName.PET_NICK_NAME}
              mode="outlined"
              activeOutlineColor={COLORS.text.grey}
              outlineColor={COLORS.text.grey}
              contextMenuHidden={true}
              {...petName}
              theme={{ roundness: 10 }}
            />
            <Gap size={2} />
            <TextInput
              label={inputsPlaceholdersName.PET_BREED}
              mode="outlined"
              activeOutlineColor={COLORS.text.grey}
              outlineColor={COLORS.text.grey}
              contextMenuHidden={true}
              {...petBreed}
              theme={{ roundness: 10 }}
            />
            <Gap size={2} />
            <TextInput
              mode="outlined"
              value={getData(date)}
              label={inputsPlaceholdersName.PET_AGE}
              onFocus={() => setOpen(true)}
              activeOutlineColor={COLORS.text.grey}
              outlineColor={COLORS.text.grey}
              theme={{ roundness: 10 }}
            />
            <DatePicker
              textColor="#000000"
              modal
              mode="date"
              open={open}
              date={date}
              onConfirm={date => {
                setOpen(false);
                setDate(date);
              }}
              onCancel={() => {
                setOpen(false);
              }}
            />
            <Gap size={2} />
            <TextInput
              label={inputsPlaceholdersName.PET_DESCRIPTION}
              mode="outlined"
              activeOutlineColor={COLORS.text.grey}
              outlineColor={COLORS.text.grey}
              contextMenuHidden={true}
              {...petColor}
              theme={{ roundness: 10 }}
            />
            <Gap size={2} />
            <TextInput
              label={inputsPlaceholdersName.PET_CHIP_ID}
              mode="outlined"
              activeOutlineColor={COLORS.text.grey}
              outlineColor={COLORS.text.grey}
              contextMenuHidden={true}
              {...petChipId}
              theme={{ roundness: 10 }}
            />
            <Gap size={2} />
            <TextInput
              label={inputsPlaceholdersName.PET_ABOUT}
              mode="outlined"
              style={{ minHeight: 300 }}
              multiline={true}
              activeOutlineColor={COLORS.text.grey}
              outlineColor={COLORS.text.grey}
              contextMenuHidden={true}
              {...petAbout}
              theme={{ roundness: 10 }}
            />
          </View>
          <Gap size={2} />
          <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
            <AppButton onPress={savePress} title={buttonsName.SAVE} backgroundColor={COLORS.buttons.violet} />
          </View>
        </>
      )}
    </ScrollView>
  );
};
