import React from 'react';
import { AdoptionNavigationName } from '../../enum/navigation';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { PetType } from '../../store/reducers/userReducer';
import { StackNavigationProp } from '@react-navigation/stack';
import { AdoptionStackParamList } from '../../screens/AdoptionScreen/type';
import { styles } from './style';
import { screenWidth } from '../../consts/consts';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../../colors/colors';
import { iconsName } from '../../enum/iconsName';

export type PetItemType = {
  pet: PetType;
  navigation: StackNavigationProp<AdoptionStackParamList>;
};

export const PetItem = ({ pet, navigation }: PetItemType) => {
  return (
    <TouchableOpacity
      style={styles.itemPetContainer}
      onPress={() =>
        navigation.navigate(AdoptionNavigationName.PET_UNITE, {
          nickName: pet.nickName,
          description: pet.description,
          photo: pet.photo,
          age: pet.age,
          male: pet.male,
        })
      }
    >
      <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 10 }}>
        <Image
          source={{ uri: pet.photo }}
          style={{ width: screenWidth * 0.4, height: screenWidth * 0.35, borderRadius: 30 }}
        />
      </View>
      <View style={{ justifyContent: 'flex-start', marginHorizontal: 24 }}>
        <Text style={[styles.itemPetText, { fontSize: 18, fontWeight: 'bold' }]}>{pet.nickName}</Text>
        <Text style={styles.itemPetText}>{pet.age}</Text>
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
        style={{ position: 'absolute', right: 18, bottom: 40 }}
      />
    </TouchableOpacity>
  );
};
