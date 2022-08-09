import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { AppButton } from '../../components/Button/CustomSquareButton';
import { COLORS } from '../../colors/colors';
import { buttonsName } from '../../enum/buttonsName';
import { database } from '../../utils/getDataBaseURL';
import { DrawerNavigationName } from '../../enum/navigation';
import { useDispatch } from 'react-redux';
import { addPetAC } from '../../store/actions/userAC';
import { inputsPlaceholdersName } from '../../enum/inputPlaceholdersName';
import { AddPetScreenProps } from './type';
import { styles } from './style';

export const AddPetScreen = (props: AddPetScreenProps) => {
  const { navigation } = props;

  const id = Date.now();
  const [animal, setAnimal] = useState('');
  const [male, setMale] = useState('');
  const [description, setDescription] = useState('');
  const [age, setAge] = useState('');
  const [nickName, setNickName] = useState('');

  const dispatch = useDispatch();

  const catDefaultImg =
    'https://images.unsplash.com/photo-1611915387288-fd8d2f5f928b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80';
  const dogDefaultImg =
    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=0.672xw:1.00xh;0.166xw,0&resize=640:*';

  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.filterContainer}>
        <TouchableOpacity
          onPress={() => {
            setAnimal('Dog');
          }}
          style={[
            styles.filterItemContainer,
            { borderColor: animal === 'Dog' ? COLORS.buttons.brown : COLORS.text.dark_blue },
          ]}
        >
          <Text style={styles.filterText}>Dog</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setAnimal('Cat');
          }}
          style={[
            styles.filterItemContainer,
            { borderColor: animal === 'Cat' ? COLORS.buttons.brown : COLORS.text.dark_blue },
          ]}
        >
          <Text style={styles.filterText}>Cat</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.filterContainer}>
        <TouchableOpacity
          onPress={() => {
            setMale('Unknown');
          }}
          style={[
            styles.filterItemContainer,
            { borderColor: [male].includes('Unknown') ? COLORS.buttons.brown : COLORS.text.dark_blue },
          ]}
        >
          <Text style={styles.filterText}>Unknown</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setMale('Girl');
          }}
          style={[
            styles.filterItemContainer,
            { borderColor: [male].includes('Girl') ? COLORS.buttons.brown : COLORS.text.dark_blue },
          ]}
        >
          <Text style={styles.filterText}>Girl</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setMale('Boy');
          }}
          style={[
            styles.filterItemContainer,
            { borderColor: [male].includes('Boy') ? COLORS.buttons.brown : COLORS.text.dark_blue },
          ]}
        >
          <Text style={styles.filterText}>Boy</Text>
        </TouchableOpacity>
      </View>
      <TextInput
        value={nickName}
        onChangeText={text => setNickName(text)}
        placeholder={inputsPlaceholdersName.PET_NICK_NAME}
        placeholderTextColor={COLORS.text.grey}
        style={styles.input}
      />

      <TextInput
        value={age}
        onChangeText={text => setAge(text)}
        placeholder={inputsPlaceholdersName.PET_AGE}
        placeholderTextColor={COLORS.text.grey}
        style={styles.input}
      />

      <TextInput
        value={description}
        onChangeText={text => setDescription(text)}
        placeholder={inputsPlaceholdersName.PET_DESCRIPTION}
        placeholderTextColor={COLORS.text.grey}
        style={styles.input}
      />

      <View style={styles.buttonsContainer}>
        <AppButton
          disabled={animal === '' || male === ''}
          onPress={async () => {
            await database
              .ref(`/pets/`)
              .child(`${id}`)
              .set({
                male: male,
                animal: animal,
                age: age,
                description: description,
                nickName: nickName,
                id: id,
                photo: animal === 'Cat' ? catDefaultImg : dogDefaultImg,
              });
            dispatch(
              addPetAC({
                male,
                animal,
                nickName,
                age,
                description,
                id,
                photo: animal === 'Cat' ? catDefaultImg : dogDefaultImg,
              }),
            );
            navigation.navigate(DrawerNavigationName.ADOPTION_STACK);
            setMale('');
            setAnimal('');
            setDescription('');
            setAge('');
            setNickName('');
          }}
          title={buttonsName.ADD_PET}
          backgroundColor={COLORS.buttons.peach}
        />
        <AppButton
          onPress={() => {
            setMale('');
            setAnimal('');
            setDescription('');
            setAge('');
            setNickName('');
          }}
          title={buttonsName.CANCEL}
          backgroundColor={COLORS.buttons.brown}
        />
      </View>
    </SafeAreaView>
  );
};
