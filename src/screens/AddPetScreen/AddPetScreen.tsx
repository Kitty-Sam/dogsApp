import React, { useState } from 'react';
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

export const AddPetScreen = (props: AddPetScreenProps) => {
  const { navigation } = props;

  const id = Date.now();

  const description = useInput('');
  const age = useInput('');
  const nickName = useInput('');

  const [animal, setAnimal] = useState('');
  const [male, setMale] = useState('');
  const dispatch = useDispatch();

  const addPet = () => {
    dispatch(addNewPetAction({ age, animal, male, setMale, setAnimal, description, nickName, navigation, id }));
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
          <TextItemThin style={{ textAlign: 'center', paddingVertical: 8 }}>{animalsName.DOG}</TextItemThin>
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
          <TextItemThin style={{ textAlign: 'center', paddingVertical: 8 }}>{animalsName.CAT}</TextItemThin>
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
          <TextItemThin style={{ textAlign: 'center', paddingVertical: 8 }}>{maleName.UNKNOWN}</TextItemThin>
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
          <TextItemThin style={{ textAlign: 'center', paddingVertical: 8 }}>{maleName.GIRL}</TextItemThin>
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
          <TextItemThin style={{ textAlign: 'center', paddingVertical: 8 }}>{maleName.BOY}</TextItemThin>
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
      />

      <View style={styles.buttonsContainer}>
        <AppButton
          disabled={animal === '' || male === ''}
          onPress={addPet}
          title={buttonsName.ADD_PET}
          backgroundColor={COLORS.buttons.peach}
        />
        <AppButton
          onPress={() => {
            setMale('');
            setAnimal('');
            description.resetValue();
            age.resetValue();
            nickName.resetValue();
          }}
          title={buttonsName.CLEAR}
          backgroundColor={COLORS.buttons.brown}
        />
      </View>
    </SafeAreaView>
  );
};
