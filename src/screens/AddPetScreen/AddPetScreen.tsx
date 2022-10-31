import React, { FC, useState } from 'react';
import { Image, SafeAreaView, TouchableOpacity, View } from 'react-native';
import { AppButton } from '../../components/Button/AppButton';
import { COLORS } from '../../colors/colors';
import { inputsPlaceholdersName } from '../../enum/inputPlaceholdersName';
import { styles } from './style';
import { TextItemThin } from '../../components/Text/TextItemThin/TextItemThin';
import { useInput } from '../../hooks/useInput';
import { useDispatch, useSelector } from 'react-redux';
import { TextInput } from 'react-native-paper';
import { Gap } from '../../components/Gap/Gap';
import DatePicker from 'react-native-date-picker';
import { getData } from '../../utils/getData';
import { StackNavigationProp } from '@react-navigation/stack';
import { PetsStackParamList } from '../../navigation/PetsStack/type';
import { LoadImagePickerButton } from '../../components/LoadImagePickerButton/LoadImagePickerButton';
import { images } from '../../consts/consts';
import { getCurrentUserId } from '../../store/selectors/loginSelector';
import { requestStatus } from '../../store/reducers/appReducer';
import { Loader } from '../../components/Loader/Loader';
import { getAppStatus } from '../../store/selectors/appSelector';
import { addPersonalPetWithPhotoAction } from '../../store/sagas/sagaActions/addPersonalPetWithPhotoInStorage';

export type AddPetPropsType = {
  navigation: StackNavigationProp<PetsStackParamList>;
  route: any;
};

export const AddPetScreen: FC<AddPetPropsType> = props => {
  const nickName = useInput('');
  const breed = useInput('');
  const description = useInput('');
  const chip_id = useInput('');

  const currentUserId = useSelector(getCurrentUserId);

  const { navigation, route } = props;
  const { stack } = route.params;

  const [date, setDate] = useState<Date>(new Date());
  const [open, setOpen] = useState<boolean>(false);

  const dispatch = useDispatch();

  const addPet = async () => {
    dispatch(
      addPersonalPetWithPhotoAction({
        navigation,
        nickName: nickName.value,
        date,
        description: description.value,
        breed: breed.value,
        chip_id: chip_id.value,
        currentUserId,
        stack,
      }),
    );
    // dispatch(toggleAppStatus(requestStatus.LOADING));
    // console.log('add pet');
    // const photoUrls = await getGalleryImages('animals', nickName.value, currentUserId);
    // const selectedPhotoUrl = photoUrls?.[0];
    //
    // if (selectedPhotoUrl) {
    //   dispatch(
    //     addPersonalPetAction({
    //       nickName: nickName.value,
    //       description: description.value,
    //       breed: breed.value,
    //       age: getData(date),
    //       chip_id: chip_id.value,
    //       photo: selectedPhotoUrl,
    //     }),
    //   );
    //   dispatch(toggleAppStatus(requestStatus.SUCCEEDED));
    // }
    //
    // if (stack === 'Profile') {
    //   navigation.navigate(PetsNavigationName.PROFILE);
    // } else {
    //   dispatch(fetchPersonalPetsAction());
    //   dispatch(toggleAppStatus(requestStatus.SUCCEEDED));
    //   dispatch(toggleIsLoggedAC({ isLogged: true }));
    //   dispatch(toggleIsAddedPetsAC({ isAddedAll: true }));
    // }
  };

  const clearPet = () => {
    nickName.resetValue();
    breed.resetValue();
    setDate(new Date());
    description.resetValue();
    chip_id.resetValue();
  };

  const [image, setImage] = useState<string>(images.no_photo);
  const statusApp = useSelector(getAppStatus);

  return (
    <SafeAreaView style={styles.rootContainer}>
      {statusApp === requestStatus.LOADING ? (
        <Loader text={'Waiting for a few minutes...'} />
      ) : (
        <>
          <View style={styles.mainContainer}>
            <TouchableOpacity style={{ zIndex: 100 }}>
              <LoadImagePickerButton
                screen={'Animals'}
                setImage={setImage}
                currentUserId={currentUserId}
                id={nickName.value}
              />
            </TouchableOpacity>

            <Image source={{ uri: image }} style={styles.imageContainer} />

            <View style={styles.shortInputContainer}>
              <TextInput
                {...nickName}
                mode="outlined"
                label={inputsPlaceholdersName.PET_NICK_NAME}
                placeholderTextColor={COLORS.text.grey}
                activeOutlineColor={COLORS.text.grey}
                outlineColor={COLORS.text.grey}
              />
              <Gap size={0.5} />
              <TextInput
                {...breed}
                mode="outlined"
                label={inputsPlaceholdersName.PET_BREED}
                placeholderTextColor={COLORS.text.grey}
                activeOutlineColor={COLORS.text.grey}
                outlineColor={COLORS.text.grey}
              />
              <Gap size={0.5} />
            </View>
          </View>
          <TextInput
            mode="outlined"
            value={getData(date)}
            label={inputsPlaceholdersName.PET_AGE}
            placeholderTextColor={COLORS.text.grey}
            onFocus={() => setOpen(true)}
            activeOutlineColor={COLORS.text.grey}
            outlineColor={COLORS.text.grey}
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

          <Gap size={0.5} />
          <TextInput
            {...description}
            mode="outlined"
            label={inputsPlaceholdersName.PET_DESCRIPTION}
            placeholderTextColor={COLORS.text.grey}
            activeOutlineColor={COLORS.text.grey}
            outlineColor={COLORS.text.grey}
          />
          <Gap size={0.5} />
          <TextInput
            {...chip_id}
            mode="outlined"
            label={inputsPlaceholdersName.PET_CHIP_ID}
            placeholderTextColor={COLORS.text.grey}
            activeOutlineColor={COLORS.text.grey}
            outlineColor={COLORS.text.grey}
          />
          <Gap size={3} />
          <TouchableOpacity onPress={clearPet}>
            <TextItemThin>Clear form</TextItemThin>
          </TouchableOpacity>

          <View style={styles.buttonsContainer}>
            <AppButton
              disabled={nickName.value === '' || breed.value === '' || description.value === ''}
              onPress={addPet}
              title={stack === 'Profile' ? 'add' : 'next'}
              backgroundColor={COLORS.buttons.violet}
            />
          </View>
        </>
      )}
    </SafeAreaView>
  );
};
