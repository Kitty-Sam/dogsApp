import React, { useState } from 'react';
import { Image, SafeAreaView, View } from 'react-native';
import { StackScreenNavigationProps } from '../../navigation/navPropsType';
import { AdoptionNavigationName } from '../../enum/navigation';
import { AdoptionStackParamList } from '../AdoptionScreen/type';
import { AppButton } from '../../components/Button/AppButton';
import { COLORS } from '../../colors/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { buttonsName } from '../../enum/buttonsName';
import { iconsName } from '../../enum/iconsName';
import { styles } from './style';
import { TextItemThin } from '../../components/Text/TextItemThin/TextItemThin';
import { HeaderTextItem } from '../../components/Text/HeaderTextItem/HeaderTextItem';

export const PetUniteScreen = (
  props: StackScreenNavigationProps<AdoptionNavigationName.PET_UNITE, AdoptionStackParamList>,
) => {
  const { nickName, description, photo, age, male } = props.route.params;
  const [isFavorite, setFavorite] = useState(false);

  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: photo }} style={styles.image} />
      </View>

      <View style={styles.informativeBlock}>
        <View style={styles.textContainer}>
          <HeaderTextItem>{nickName}</HeaderTextItem>
          <TextItemThin>{description}</TextItemThin>
        </View>
        <View>
          <TextItemThin>{age}</TextItemThin>
          <Icon
            name={
              [male].includes('Unknown') ? iconsName.UNKNOWN : [male].includes('Boy') ? iconsName.BOY : iconsName.GIRL
            }
            size={26}
            color={COLORS.text.dark_blue}
          />
        </View>
      </View>

      <View style={styles.buttonWithIconContainer}>
        <View style={styles.buttonContainer}>
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
    </SafeAreaView>
  );
};
