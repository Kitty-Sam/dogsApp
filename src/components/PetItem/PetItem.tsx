import React from 'react';
import { AdoptionNavigationName } from '../../enum/navigation';
import { Image, TouchableOpacity, View } from 'react-native';
import { PetType } from '../../store/reducers/userReducer';
import { StackNavigationProp } from '@react-navigation/stack';
import { AdoptionStackParamList } from '../../screens/AdoptionScreen/type';
import { styles } from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../../colors/colors';
import { iconsName } from '../../enum/iconsName';
import { TextItemBold } from '../Text/TextItemBold/TextItemBold';
import { TextItemThin } from '../Text/TextItemThin/TextItemThin';

export type PetItemType = {
  pet: PetType;
  navigation: StackNavigationProp<AdoptionStackParamList>;
};

export const PetItem = ({ pet, navigation }: PetItemType) => {
  const petUnitNavigate = () => {
    navigation.navigate(AdoptionNavigationName.PET_UNITE, {
      nickName: pet.nickName,
      description: pet.description,
      photo: pet.photo,
      age: pet.age,
      male: pet.male,
    });
  };
  return (
    <TouchableOpacity style={styles.itemPetContainer} onPress={petUnitNavigate}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: pet.photo }} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <TextItemBold>{pet.nickName}</TextItemBold>
        <TextItemThin>{pet.age}</TextItemThin>
      </View>
      <Icon
        name={
          [pet.male].includes('Unknown')
            ? iconsName.UNKNOWN
            : [pet.male].includes('Boy')
            ? iconsName.BOY
            : iconsName.GIRL
        }
        size={26}
        color={COLORS.text.dark_blue}
        style={styles.icon}
      />
    </TouchableOpacity>
  );
};
