import React, { FC, useState } from 'react';
import { SafeAreaView, TouchableOpacity, View } from 'react-native';
import { AppButton } from '../../components/Button/AppButton';
import { COLORS } from '../../colors/colors';
import { inputsPlaceholdersName } from '../../enum/inputPlaceholdersName';
import { AddPetScreenProps } from './type';
import { styles } from './style';
import { TextItemThin } from '../../components/Text/TextItemThin/TextItemThin';
import { useInput } from '../../hooks/useInput';
import { useDispatch } from 'react-redux';
import { toggleIsLoggedAC } from '../../store/actions/loginAC';
import { TextInput } from 'react-native-paper';
import { Gap } from '../../components/Gap/Gap';
import { HeaderTextItem } from '../../components/Text/HeaderTextItem/HeaderTextItem';
import { addPersonalPetAction } from '../../store/sagas/sagaActions/addPersonalPet';
import { toggleIsAddedPetsAC } from '../../store/actions/userAC';
import DatePicker from 'react-native-date-picker';
import { getData } from '../../utils/getData';

export const AddPetScreen: FC<AddPetScreenProps> = props => {
  const nickName = useInput('');
  const breed = useInput('');
  const description = useInput('');
  const chip_id = useInput('');

  const [date, setDate] = useState<Date>(new Date());
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const addPet = () => {
    dispatch(
      addPersonalPetAction({
        nickName: nickName.value,
        description: description.value,
        breed: breed.value,
        age: getData(date),
        chip_id: chip_id.value,
      }),
    );
    dispatch(toggleIsLoggedAC({ isLogged: true }));
    dispatch(toggleIsAddedPetsAC({ isAddedAll: true }));
  };
  const clearPet = () => {
    nickName.resetValue();
    breed.resetValue();
    setDate(new Date());
    description.resetValue();
    chip_id.resetValue();
  };

  // const [isDone, setIsDone] = useState<string>('idle');

  // useEffect(() => {
  //   if (isDone === 'isLoading') {
  //     toast.info({ message: 'wait a few minutes' });
  //   }
  //   if (isDone === 'succeed') {
  //     toast.success({ message: 'photo is uploaded' });
  //   }
  // }, [isDone]);

  return (
    <SafeAreaView style={styles.rootContainer}>
      <HeaderTextItem style={styles.headerText}>Add your pet</HeaderTextItem>
      <Gap size={3} />
      <View style={styles.mainContainer}>
        <View style={styles.imageContainer}>
          {/*<LoadImagePickerButton*/}
          {/*  currentUserId={currentUserId}*/}
          {/*  screen={'Animals'}*/}
          {/*  isDone={isDone}*/}
          {/*  id={id}*/}
          {/*  setIsDone={setIsDone}*/}
          {/*  setStoreImages={setStoreImages}*/}
          {/*/>*/}
        </View>
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
        modal
        mode="date"
        androidVariant="iosClone"
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
          title={'next'}
          backgroundColor={COLORS.buttons.violet}
        />
      </View>
    </SafeAreaView>
  );
};
