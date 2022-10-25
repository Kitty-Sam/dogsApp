import React, { FC, useState } from 'react';
import { PetsNavigationName } from '../../enum/navigation';
import { ActivityIndicator, ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { PetItemType } from './type';
import { Gap } from '../Gap/Gap';
import { getData } from '../../utils/getData';
import { styles } from './style';
export const PetItem: FC<PetItemType> = props => {
  const { navigation, pet } = props;

  const [loading, setLoading] = useState<boolean>(false);

  const onLoading = (value: boolean) => {
    setLoading(value);
  };

  const dateNow = getData(new Date());

  const a = dateNow.split('.');
  const b = pet.age.split('.');

  const c = a.map((el, index) => +el - +b[index]);
  return (
    <View key={pet.chip_id} style={styles.itemPetContainer}>
      <TouchableOpacity
        style={styles.insideItemContainer}
        onPress={() =>
          navigation.navigate(PetsNavigationName.PET_UNITE, {
            nickName: pet.nickName,
            breed: pet.breed,
            age: pet.age,
            description: pet.description,
            chip_id: pet.chip_id,
            photo: pet.photo,
            about: pet.about,
          })
        }
      >
        {loading && <ActivityIndicator />}
        {
          <ImageBackground
            source={{ uri: pet.photo }}
            resizeMode="cover"
            style={styles.imageBackGround}
            imageStyle={styles.imageBackGroundImage}
            onLoadStart={() => onLoading(true)}
            onLoad={() => onLoading(false)}
          >
            <Text style={styles.text}>{pet.nickName}</Text>
            <Gap size={2} />
            <Text style={styles.text}>{`${c[1]} month ${c[2]} years`}</Text>
          </ImageBackground>
        }
      </TouchableOpacity>
    </View>
  );
};
