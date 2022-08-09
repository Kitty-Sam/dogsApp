import React, { useLayoutEffect, useState } from 'react';
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { database } from '../../utils/getDataBaseURL';
import { FirebaseDatabaseTypes } from '@react-native-firebase/database';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPetsAC } from '../../store/actions/userAC';
import { getPets } from '../../store/selectors/userSelector';
import { PetType } from '../../store/reducers/userReducer';
import { COLORS } from '../../colors/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { AdoptionScreenProps } from './type';
import { styles } from './style';
import { iconsName } from '../../enum/iconsName';
import { PetItem } from '../../components/PetItem/PetItem';

export const AdoptionScreen = (props: AdoptionScreenProps) => {
  const { navigation } = props;
  const [filter, setFilter] = useState('');

  const dispatch = useDispatch();
  const pets = useSelector(getPets);

  const fetchPets = async () => {
    const reference: FirebaseDatabaseTypes.Reference = await database.ref(`/pets/`);
    const snapshot: FirebaseDatabaseTypes.DataSnapshot = await reference.once('value');

    if (snapshot.val()) {
      const petsFB: PetType[] = Object.values(snapshot.val());
      dispatch(fetchPetsAC(petsFB));
    }
  };

  useLayoutEffect(() => {
    fetchPets();
  }, []);

  return (
    <SafeAreaView>
      <Text style={[styles.itemPetText, { marginHorizontal: 8, marginTop: 8, fontSize: 24, fontWeight: 'bold' }]}>
        Adopt a
      </Text>
      <Text style={[styles.itemPetText, { marginHorizontal: 8, textTransform: 'capitalize' }]}>friend</Text>
      <View style={styles.filterContainer}>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => {
              setFilter('Dog');
            }}
          >
            <Icon
              name={iconsName.DOG}
              size={36}
              color={filter === 'Dog' ? COLORS.buttons.brown : COLORS.text.dark_blue}
            />
          </TouchableOpacity>
          <Text style={styles.itemPetText}>Dog</Text>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => {
              setFilter('Cat');
            }}
          >
            <Icon
              name={iconsName.CAT}
              size={36}
              color={filter === 'Cat' ? COLORS.buttons.brown : COLORS.text.dark_blue}
            />
          </TouchableOpacity>
          <Text style={styles.itemPetText}>Cat</Text>
        </View>

        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => {
              setFilter('');
            }}
          >
            <Icon name={iconsName.DOG} size={16} color={filter === '' ? COLORS.buttons.brown : COLORS.text.dark_blue} />
            <Icon name={iconsName.CAT} size={16} color={filter === '' ? COLORS.buttons.brown : COLORS.text.dark_blue} />
          </TouchableOpacity>
          <Text style={styles.itemPetText}>All together</Text>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.listContainer}>
        {filter
          ? pets
              .filter((pet: PetType) => pet.animal === filter)
              .map((pet: PetType) => <PetItem pet={pet} navigation={navigation} key={pet.id} />)
          : pets.map((pet: PetType) => <PetItem pet={pet} navigation={navigation} key={pet.id} />)}
      </ScrollView>
    </SafeAreaView>
  );
};
