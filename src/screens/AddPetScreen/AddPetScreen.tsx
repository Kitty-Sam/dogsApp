import React, { FC, useState } from 'react';
import { SafeAreaView, TextInput, TouchableOpacity, View } from 'react-native';
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
import { useDispatch } from 'react-redux';
import { maleName } from '../../enum/maleName';

const animals = [animalsName.DOG, animalsName.CAT];
const males = [maleName.GIRL, maleName.BOY, maleName.UNKNOWN];

export const AddPetScreen: FC<AddPetScreenProps> = props => {
  const { navigation } = props;

  const id = Date.now();

  const description = useInput('');
  const age = useInput('');
  const nickName = useInput('');

  const [animal, setAnimal] = useState<animalsName | string>('');
  const [male, setMale] = useState<maleName | string>('');
  const dispatch = useDispatch();

  const addPet = () => {
    dispatch(addNewPetAction({ age, animal, male, setMale, setAnimal, description, nickName, navigation, id }));
  };

  const clearPet = () => {
    setMale('');
    setAnimal('');
    description.resetValue();
    age.resetValue();
    nickName.resetValue();
  };

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
        maxLength={800}
        editable
      />

      <View style={styles.buttonsContainer}>
        <AppButton
          disabled={animal === '' || male === ''}
          onPress={addPet}
          title={buttonsName.ADD_PET}
          backgroundColor={COLORS.buttons.peach}
        />
        <AppButton onPress={clearPet} title={buttonsName.CLEAR} backgroundColor={COLORS.buttons.brown} />
      </View>
    </SafeAreaView>
  );
};
