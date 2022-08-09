import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';
import { StackScreenNavigationProps } from '../../navigation/navPropsType';
import { AdoptionNavigationName } from '../../enum/navigation';
import { AdoptionStackParamList } from '../AdoptionScreen/type';
import { AppButton } from '../../components/Button/CustomSquareButton';
import { COLORS } from '../../colors/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { buttonsName } from '../../enum/buttonsName';
import { screenWidth } from '../../consts/consts';
import { iconsName } from '../../enum/iconsName';

export const PetUniteScreen = (
  props: StackScreenNavigationProps<AdoptionNavigationName.PET_UNITE, AdoptionStackParamList>,
) => {
  const { nickName, description, photo, age, male } = props.route.params;
  const [isFavorite, setFavorite] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ alignItems: 'center' }}>
        <Image
          source={{ uri: photo }}
          style={{ width: screenWidth * 0.8, height: screenWidth * 0.9, marginTop: 10, borderRadius: 20 }}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: screenWidth,
          margin: 18,
          height: screenWidth * 0.5,
        }}
      >
        <View style={{ width: screenWidth * 0.5 }}>
          <Text style={{ fontWeight: 'bold', color: COLORS.text.dark_blue, fontSize: 24 }}>{nickName}</Text>
          <Text style={{ color: COLORS.text.grey }}>{description}</Text>
        </View>
        <View>
          <Text style={{ color: COLORS.text.grey }}>{age}</Text>
          <Icon
            name={
              [male].includes('Unknown') ? iconsName.UNKNOWN : [male].includes('Boy') ? iconsName.BOY : iconsName.GIRL
            }
            size={26}
            color={COLORS.text.dark_blue}
          />
        </View>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <View style={{ width: '80%' }}>
          <AppButton
            onPress={() => {
              console.log('Adopt');
            }}
            title={buttonsName.ADOPT}
            backgroundColor={COLORS.buttons.peach}
          />
        </View>
        <Icon
          name={isFavorite ? iconsName.HEART : iconsName.HEART_OUTLINE}
          size={26}
          onPress={() => {
            setFavorite(!isFavorite);
          }}
          style={{ margin: 10 }}
          color={COLORS.text.dark_blue}
        />
      </View>
    </View>
  );
};
