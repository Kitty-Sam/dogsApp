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
import { addPersonalPetAction } from '../../store/sagas/sagaActions/addPersonalPet';
import DatePicker from 'react-native-date-picker';
import { getData } from '../../utils/getData';
import { PetsNavigationName } from '../../enum/navigation';
import { toggleIsLoggedAC } from '../../store/actions/loginAC';
import { toggleIsAddedPetsAC } from '../../store/actions/userAC';
import { StackNavigationProp } from '@react-navigation/stack';
import { PetsStackParamList } from '../../navigation/PetsStack/type';
import { LoadImagePickerButton } from '../../components/LoadImagePickerButton/LoadImagePickerButton';
import { images } from '../../consts/consts';
import { getCurrentUserId } from '../../store/selectors/loginSelector';
import { getGalleryImages } from '../../utils/getImagesFromStore';

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
    const photoUrls = await getGalleryImages('animals', nickName.value, currentUserId);
    const selectedPhotoUrl = photoUrls?.[0];

    if (selectedPhotoUrl) {
      dispatch(
        addPersonalPetAction({
          nickName: nickName.value,
          description: description.value,
          breed: breed.value,
          age: getData(date),
          chip_id: chip_id.value,
          photo: selectedPhotoUrl,
        }),
      );
    }

    if (stack === 'Profile') {
      navigation.navigate(PetsNavigationName.PROFILE);
    } else {
      dispatch(toggleIsLoggedAC({ isLogged: true }));
      dispatch(toggleIsAddedPetsAC({ isAddedAll: true }));
    }
  };

  const clearPet = () => {
    nickName.resetValue();
    breed.resetValue();
    setDate(new Date());
    description.resetValue();
    chip_id.resetValue();
  };

  const [image, setImage] = useState<string>(images.no_photo);

  return (
    <SafeAreaView style={styles.rootContainer}>
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
    </SafeAreaView>
  );
};
