import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { styles } from './style';
import { useSelector } from 'react-redux';
import { getFavorites } from '../../store/selectors/userSelector';
import { PetItem } from '../../components/PetItem/PetItem';
import { FavoriteScreenProps } from './type';
import { getCurrentUserId } from '../../store/selectors/loginSelector';

export const FavoriteScreen = (props: FavoriteScreenProps) => {
  const favorites = useSelector(getFavorites);
  const currentUserId = useSelector(getCurrentUserId);

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView>
        {favorites.map(el => (
          <PetItem pet={el} key={el.id} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
