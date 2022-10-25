import React, { FC, useEffect } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { ProfileScreenProps } from './type';
import { useDispatch, useSelector } from 'react-redux';
import { getPersonalPets } from '../../store/selectors/userSelector';
import { PetType } from '../../store/reducers/userReducer';
import { PetsNavigationName } from '../../enum/navigation';
import { fetchPersonalPetsAction } from '../../store/sagas/sagaActions/fetchPersonalPets';
import { FAB } from 'react-native-paper';
import { styles } from './style';
import { PetItem } from '../../components/PetItem/PetItem';

export const ProfileScreen: FC<ProfileScreenProps> = props => {
  const { navigation } = props;
  const personalPets = useSelector(getPersonalPets);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPersonalPetsAction());
  }, []);

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView contentContainerStyle={styles.listItemsContainer}>
        {personalPets.map((pet: PetType) => {
          return <PetItem pet={pet} key={pet.chip_id} navigation={navigation} />;
        })}
      </ScrollView>
      <FAB
        icon="plus"
        style={styles.fab}
        onPress={() => navigation.navigate(PetsNavigationName.ADD_PET, { stack: 'Profile' })}
      />
    </SafeAreaView>
  );
};
