import React, { FC, useLayoutEffect, useState } from 'react';
import { RefreshControl, SafeAreaView, ScrollView, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
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
import { animalsName } from '../../enum/animalsName';
import { fetchPetsAction } from '../../store/sagas/sagaActions/fetchPets';
import { HeaderTextItem } from '../../components/Text/HeaderTextItem/HeaderTextItem';
import { useRefreshControl } from '../../hooks/useRefreshControl';

export const AdoptionScreen: FC<AdoptionScreenProps> = props => {
  const { navigation } = props;
  const [filter, setFilter] = useState('');

  const dispatch = useDispatch();
  const pets = useSelector(getPets);

  useLayoutEffect(() => {
    dispatch(fetchPetsAction());
  }, []);

  const { value, resetRefresh, onRefresh } = useRefreshControl(false);

  const onRefreshPress = () => {
    onRefresh(true);
    resetRefresh();
  };

  return (
    <SafeAreaView>
      <TextItemBold style={styles.headerText}>Adopt a</TextItemBold>
      <TextItemBold style={styles.headerTextBold}>friend</TextItemBold>

      <View style={styles.filterContainer}>
        <View style={styles.iconWithLabelContainer}>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => {
              setFilter(animalsName.DOG);
            }}
          >
            <Icon
              name={iconsName.DOG}
              size={36}
              color={filter === animalsName.DOG ? COLORS.buttons.brown : COLORS.text.dark_blue}
            />
          </TouchableOpacity>
          <TextItemThin>{animalsName.DOG}</TextItemThin>
        </View>
        <View style={styles.iconWithLabelContainer}>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => {
              setFilter(animalsName.CAT);
            }}
          >
            <Icon
              name={iconsName.CAT}
              size={36}
              color={filter === animalsName.CAT ? COLORS.buttons.brown : COLORS.text.dark_blue}
            />
          </TouchableOpacity>
          <TextItemThin>{animalsName.CAT}</TextItemThin>
        </View>

        <View style={styles.iconWithLabelContainer}>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => {
              setFilter(animalsName.All);
            }}
          >
            <Icon
              name={iconsName.DOG}
              size={16}
              color={filter === animalsName.All ? COLORS.buttons.brown : COLORS.text.dark_blue}
            />
            <Icon
              name={iconsName.CAT}
              size={16}
              color={filter === animalsName.All ? COLORS.buttons.brown : COLORS.text.dark_blue}
            />
          </TouchableOpacity>
          <TextItemThin>All together</TextItemThin>
        </View>
      </View>

      {!pets ? (
        <HeaderTextItem style={styles.headerTextView}>All animals are adopted</HeaderTextItem>
      ) : (
        <ScrollView
          contentContainerStyle={styles.listContainer}
          showsVerticalScrollIndicator={false}
          refreshControl={<RefreshControl refreshing={value} onRefresh={onRefreshPress} />}
        >
          {filter
            ? pets
                .filter((pet: PetType) => pet.animal === filter)
                .map((pet: PetType) => <PetItem pet={pet} navigation={navigation} key={pet.id} />)
            : pets.map((pet: PetType) => <PetItem pet={pet} navigation={navigation} key={pet.id} />)}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};
