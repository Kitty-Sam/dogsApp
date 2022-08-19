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
        <TouchableOpacity
          onPress={() => {
            setAnimal(animalsName.DOG);
          }}
          style={[
            styles.filterItemContainer,
            { borderColor: animal === animalsName.DOG ? COLORS.buttons.brown : COLORS.text.dark_blue },
          ]}
        >
          <TextItemThin style={styles.textLocation}>{animalsName.DOG}</TextItemThin>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setAnimal(animalsName.CAT);
          }}
          style={[
            styles.filterItemContainer,
            { borderColor: animal === animalsName.CAT ? COLORS.buttons.brown : COLORS.text.dark_blue },
          ]}
        >
          <TextItemThin style={styles.textLocation}>{animalsName.CAT}</TextItemThin>
        </TouchableOpacity>
      </View>

      <View style={styles.filterContainer}>
        <TouchableOpacity
          onPress={() => {
            setMale(maleName.UNKNOWN);
          }}
          style={[
            styles.filterItemContainer,
            { borderColor: [male].includes(maleName.UNKNOWN) ? COLORS.buttons.brown : COLORS.text.dark_blue },
          ]}
        >
          <TextItemThin style={styles.textLocation}>{maleName.UNKNOWN}</TextItemThin>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setMale(maleName.GIRL);
          }}
          style={[
            styles.filterItemContainer,
            { borderColor: [male].includes(maleName.GIRL) ? COLORS.buttons.brown : COLORS.text.dark_blue },
          ]}
        >
          <TextItemThin style={styles.textLocation}>{maleName.GIRL}</TextItemThin>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setMale(maleName.BOY);
          }}
          style={[
            styles.filterItemContainer,
            { borderColor: [male].includes(maleName.BOY) ? COLORS.buttons.brown : COLORS.text.dark_blue },
          ]}
        >
          <TextItemThin style={styles.textLocation}>{maleName.BOY}</TextItemThin>
        </TouchableOpacity>
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
