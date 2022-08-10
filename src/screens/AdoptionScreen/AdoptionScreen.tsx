import React, { useLayoutEffect, useState } from 'react';
import { SafeAreaView, ScrollView, TouchableOpacity, View } from 'react-native';
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
import { TextItemThin } from '../../components/Text/TextItemThin/TextItemThin';
import { TextItemBold } from '../../components/Text/TextItemBold/TextItemBold';

export enum filterName {
  DOG = 'Dog',
  CAT = 'Cat',
  UNKNOWN = '',
}

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
      <TextItemBold style={{ marginHorizontal: 8, marginTop: 8, fontSize: 24 }}>Adopt a</TextItemBold>
      <TextItemBold style={{ marginHorizontal: 8, textTransform: 'capitalize' }}>friend</TextItemBold>

      <View style={styles.filterContainer}>
        <View style={styles.iconWithLabelContainer}>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => {
              setFilter(filterName.DOG);
            }}
          >
            <Icon
              name={iconsName.DOG}
              size={36}
              color={filter === filterName.DOG ? COLORS.buttons.brown : COLORS.text.dark_blue}
            />
          </TouchableOpacity>
          <TextItemThin>Dog</TextItemThin>
        </View>
        <View style={styles.iconWithLabelContainer}>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => {
              setFilter(filterName.CAT);
            }}
          >
            <Icon
              name={iconsName.CAT}
              size={36}
              color={filter === filterName.CAT ? COLORS.buttons.brown : COLORS.text.dark_blue}
            />
          </TouchableOpacity>
          <TextItemThin>Cat</TextItemThin>
        </View>

        <View style={styles.iconWithLabelContainer}>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => {
              setFilter(filterName.UNKNOWN);
            }}
          >
            <Icon
              name={iconsName.DOG}
              size={16}
              color={filter === filterName.UNKNOWN ? COLORS.buttons.brown : COLORS.text.dark_blue}
            />
            <Icon
              name={iconsName.CAT}
              size={16}
              color={filter === filterName.UNKNOWN ? COLORS.buttons.brown : COLORS.text.dark_blue}
            />
          </TouchableOpacity>
          <TextItemThin>All together</TextItemThin>
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
