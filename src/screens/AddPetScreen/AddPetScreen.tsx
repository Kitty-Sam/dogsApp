import React, { FC, useEffect, useState } from 'react';
import { Image, SafeAreaView, TextInput, TouchableOpacity, View } from 'react-native';
import { AppButton } from '../../components/Button/AppButton';
import { COLORS } from '../../colors/colors';
import { buttonsName } from '../../enum/buttonsName';
import { inputsPlaceholdersName } from '../../enum/inputPlaceholdersName';
import { AddPetScreenProps } from './type';
import { styles } from './style';
import { TextItemThin } from '../../components/Text/TextItemThin/TextItemThin';
import { useInput } from '../../hooks/useInput';
import { addNewPetAction } from '../../store/sagas/sagaActions/addNewPet';
import { animalsName } from '../../enum/animalsName';
import { useDispatch, useSelector } from 'react-redux';
import { maleName } from '../../enum/maleName';
import { LoadImagePickerButton } from '../../components/LoadImagePickerButton/LoadImagePickerButton';
import { getCurrentUserId } from '../../store/selectors/loginSelector';
import { toast } from '../../utils/toast';
import { ScrollView } from 'native-base';

const animals = [animalsName.DOG, animalsName.CAT];
const males = [maleName.GIRL, maleName.BOY, maleName.UNKNOWN];

export const AddPetScreen: FC<AddPetScreenProps> = props => {
  const { navigation } = props;

  const id = Date.now();

  const description = useInput('');
  const age = useInput('');
  const nickName = useInput('');
  const ownerInfo = useInput('');

  const currentUserId = useSelector(getCurrentUserId);

  const [animal, setAnimal] = useState<animalsName | string>('');
  const [male, setMale] = useState<maleName | string>('');
  const dispatch = useDispatch();

  const addPet = async () => {
    dispatch(
      addNewPetAction({
        age,
        animal,
        male,
        setMale,
        setAnimal,
        description,
        nickName,
        navigation,
        id,
        ownerInfo,
        photo: storeImages[0],
      }),
    );
    clearPet();
  };

  const clearPet = () => {
    setMale('');
    setAnimal('');
    description.resetValue();
    age.resetValue();
    nickName.resetValue();
    ownerInfo.resetValue();
  };

  const [isDone, setIsDone] = useState<string>('idle');
  const [storeImages, setStoreImages] = useState<string[]>([]);

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
      <View style={styles.filterContainer}>
        {animals.map(animal_item => (
          <TouchableOpacity
            key={animal_item}
            onPress={() => {
              setAnimal(animal_item);
            }}
            style={[
              styles.filterItemContainer,
              { borderColor: animal === animal_item ? COLORS.buttons.brown : COLORS.text.dark_blue },
            ]}
          >
            <TextItemThin style={styles.textLocation}>{animal_item}</TextItemThin>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.filterContainer}>
        {males.map(male_item => (
          <TouchableOpacity
            key={male_item}
            onPress={() => {
              setMale(male_item);
            }}
            style={[
              styles.filterItemContainer,
              { borderColor: [male].includes(male_item) ? COLORS.buttons.brown : COLORS.text.dark_blue },
            ]}
          >
            <TextItemThin style={styles.textLocation}>{male_item}</TextItemThin>
          </TouchableOpacity>
        ))}
      </View>
      <TextInput
        {...nickName}
        placeholder={inputsPlaceholdersName.PET_NICK_NAME}
        placeholderTextColor={COLORS.text.grey}
        style={styles.input}
      />
      <TextInput
        {...age}
        placeholder={inputsPlaceholdersName.PET_AGE}
        placeholderTextColor={COLORS.text.grey}
        style={styles.input}
      />
      <TextInput
        {...description}
        placeholder={inputsPlaceholdersName.PET_DESCRIPTION}
        placeholderTextColor={COLORS.text.grey}
        style={styles.input}
        multiline={true}
        maxLength={700}
        editable
      />
      <TextInput
        {...ownerInfo}
        placeholder={inputsPlaceholdersName.PET_OWNER_INFO}
        placeholderTextColor={COLORS.text.grey}
        style={[
          styles.input,
          {
            borderBottomColor: ownerInfo.value.length === 13 ? COLORS.text.grey : COLORS.buttons.brown,
          },
        ]}
        editable
        keyboardType={'phone-pad'}
        // onFocus={() => ownerInfo.onChangeText('+375')}
        // onBlur={() => ownerInfo.onChangeText('')}
      />
      <View>
        {storeImages.length === 0 ? (
          <TextItemThin>Gallery is empty</TextItemThin>
        ) : (
          <ScrollView horizontal={true}>
            {storeImages.map(el => (
              <Image source={{ uri: el }} style={{ width: 50, height: 50, margin: 16 }} key={el + Date.now()} />
            ))}
          </ScrollView>
        )}
      </View>
      <LoadImagePickerButton
        currentUserId={currentUserId}
        screen={'Animals'}
        nickName={nickName.value}
        isDone={isDone}
        setIsDone={setIsDone}
        setStoreImages={setStoreImages}
      />
      <View style={styles.buttonsContainer}>
        <AppButton
          disabled={animal === '' || male === '' || ownerInfo.value === '+375' || isDone === 'idle'}
          onPress={addPet}
          title={buttonsName.ADD_PET}
          backgroundColor={COLORS.buttons.peach}
        />
        <AppButton onPress={clearPet} title={buttonsName.CLEAR} backgroundColor={COLORS.buttons.brown} />
      </View>
    </SafeAreaView>
  );
};
