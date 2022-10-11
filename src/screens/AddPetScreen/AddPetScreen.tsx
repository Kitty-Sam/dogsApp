import React, { FC, useEffect, useState } from 'react';
import { SafeAreaView, TouchableOpacity, View } from 'react-native';
import { AppButton } from '../../components/Button/AppButton';
import { COLORS } from '../../colors/colors';
import { inputsPlaceholdersName } from '../../enum/inputPlaceholdersName';
import { AddPetScreenProps } from './type';
import { styles } from './style';
import { TextItemThin } from '../../components/Text/TextItemThin/TextItemThin';
import { useInput } from '../../hooks/useInput';
import { useDispatch } from 'react-redux';
import { toast } from '../../utils/toast';
import { toggleIsLoggedAC } from '../../store/actions/loginAC';
import { TextInput } from 'react-native-paper';
import { Gap } from '../../components/Gap/Gap';
import { HeaderTextItem } from '../../components/Text/HeaderTextItem/HeaderTextItem';
import { addPersonalPetAction } from '../../store/sagas/sagaActions/addPersonalPet';
import { AuthNavigationName } from '../../enum/navigation';
import { Actionsheet, useDisclose } from 'native-base';
import { toggleIsAddedPetsAC } from '../../store/actions/userAC';

export const AddPetScreen: FC<AddPetScreenProps> = props => {
  const { navigation } = props;

  const { isOpen, onOpen, onClose } = useDisclose();

  const nickName = useInput('');
  const breed = useInput('');
  const age = useInput('');
  const description = useInput('');
  const chip_id = useInput('');

  const dispatch = useDispatch();

  const addPet = () => {
    dispatch(
      addPersonalPetAction({
        nickName: nickName.value,
        description: description.value,
        breed: breed.value,
        age: age.value,
        chip_id: chip_id.value,
      }),
    );
    dispatch(toggleIsLoggedAC({ isLogged: true }));
    dispatch(toggleIsAddedPetsAC({ isAddedAll: true }));
  };
  const addOneMorePet = () => {
    dispatch(
      addPersonalPetAction({
        nickName: nickName.value,
        description: description.value,
        breed: breed.value,
        age: age.value,
        chip_id: chip_id.value,
      }),
    );
    navigation.navigate(AuthNavigationName.ADD_PET);
  };

  const clearPet = () => {
    nickName.resetValue();
    breed.resetValue();
    age.resetValue();
    description.resetValue();
    chip_id.resetValue();
  };

  const skipAddPet = () => {
    dispatch(toggleIsLoggedAC({ isLogged: true }));
  };

  const [isDone, setIsDone] = useState<string>('idle');
  const [storeImages, setStoreImages] = useState<string[]>([]);
  const [phone, setPhone] = useState<string>('');

  useEffect(() => {
    if (isDone === 'isLoading') {
      toast.info({ message: 'wait a few minutes' });
    }
    if (isDone === 'succeed') {
      toast.success({ message: 'photo is uploaded' });
    }
  }, [isDone]);

  return (
    <SafeAreaView style={styles.rootContainer}>
      <HeaderTextItem style={{ textAlign: 'center' }}>Add your pet</HeaderTextItem>
      <Gap size={3} />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            borderColor: COLORS.text.grey,
            borderWidth: 1,
            marginTop: 20,
          }}
        >
          {/*<LoadImagePickerButton*/}
          {/*  currentUserId={currentUserId}*/}
          {/*  screen={'Animals'}*/}
          {/*  isDone={isDone}*/}
          {/*  id={id}*/}
          {/*  setIsDone={setIsDone}*/}
          {/*  setStoreImages={setStoreImages}*/}
          {/*/>*/}
        </View>
        <View style={{ width: '65%' }}>
          <TextInput
            {...nickName}
            mode="outlined"
            label={inputsPlaceholdersName.PET_NICK_NAME}
            placeholderTextColor={COLORS.text.grey}
          />
          <Gap size={0.5} />
          <TextInput
            {...breed}
            mode="outlined"
            label={inputsPlaceholdersName.PET_BREED}
            placeholderTextColor={COLORS.text.grey}
          />
          <Gap size={0.5} />
        </View>
      </View>
      <TextInput
        {...age}
        mode="outlined"
        label={inputsPlaceholdersName.PET_AGE}
        placeholderTextColor={COLORS.text.grey}
      />

      <Gap size={0.5} />
      <TextInput
        {...description}
        mode="outlined"
        label={inputsPlaceholdersName.PET_DESCRIPTION}
        placeholderTextColor={COLORS.text.grey}
      />
      <Gap size={0.5} />
      <TextInput
        {...chip_id}
        mode="outlined"
        label={inputsPlaceholdersName.PET_CHIP_ID}
        placeholderTextColor={COLORS.text.grey}
      />
      <Gap size={3} />
      <TouchableOpacity onPress={clearPet}>
        <TextItemThin>Clear form</TextItemThin>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate(AuthNavigationName.ADD_PET);
        }}
      >
        <TextItemThin>Add another pet?</TextItemThin>
      </TouchableOpacity>

      <View style={styles.buttonsContainer}>
        <AppButton
          disabled={nickName.value === '' || breed.value === '' || age.value === '' || description.value === ''}
          onPress={onOpen}
          title={'next'}
          backgroundColor={COLORS.buttons.violet}
        />
      </View>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content style={{ height: 200 }}>
          <Actionsheet.Item onPress={addOneMorePet}>save and add another one</Actionsheet.Item>
          <Actionsheet.Item onPress={addPet}>next</Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </SafeAreaView>
  );
};
