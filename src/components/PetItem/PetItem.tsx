import React, { FC } from 'react';
import { AdoptionNavigationName } from '../../enum/navigation';
import { Image, TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../../colors/colors';
import { iconsName } from '../../enum/iconsName';
import { TextItemBold } from '../Text/TextItemBold/TextItemBold';
import { TextItemThin } from '../Text/TextItemThin/TextItemThin';
import { maleName } from '../../enum/maleName';
import { PetItemType } from './type';

export const PetItem: FC<PetItemType> = ({ pet, navigation }) => {
  const petUnitNavigate = () => {
    navigation!.navigate(AdoptionNavigationName.PET_UNITE, {
      nickName: pet.nickName,
      description: pet.description,
      photo: pet.photo,
      age: pet.age,
      male: pet.male,
      animal: pet.animal,
      id: pet.id,
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
          [pet.male].includes(maleName.UNKNOWN)
            ? iconsName.UNKNOWN
            : [pet.male].includes(maleName.BOY)
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
