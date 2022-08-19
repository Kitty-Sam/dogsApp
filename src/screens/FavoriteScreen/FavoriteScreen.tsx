import React, { FC, useLayoutEffect } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { styles } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { getFavoritesIds, getPets } from '../../store/selectors/userSelector';
import { PetItem } from '../../components/PetItem/PetItem';
import { FavoriteScreenProps } from './type';
import { PetType } from '../../store/reducers/userReducer';
import { FavoriteSaveIdType } from '../../store/actions/userAC';
import { fetchPetsAction } from '../../store/sagas/sagaActions/fetchPets';
import { fetchFavoritePetsIdsAction } from '../../store/sagas/sagaActions/fetchFavoritePetsIds';

export const FavoriteScreen: FC<FavoriteScreenProps> = ({ navigation }) => {
  const favoritesIds = useSelector(getFavoritesIds);
  const favoritesIdsResult = favoritesIds.map((el: FavoriteSaveIdType) => Object.values(el)).flat();
  const pets = useSelector(getPets);
  const favorites = pets.filter((pet: PetType) => favoritesIdsResult.includes(pet.id));

  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(fetchPetsAction());
    dispatch(fetchFavoritePetsIdsAction());
  }, []);

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView contentContainerStyle={styles.listContainer}>
        {favorites.map((el: PetType) => (
          <PetItem pet={el} key={el.id} navigation={navigation} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
