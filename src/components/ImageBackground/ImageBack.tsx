import React, { FC } from 'react';
import { ImageBackground, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthNavigationName } from '../../enum/navigation';
import { AppButton } from '../Button/AppButton';
import { COLORS } from '../../colors/colors';
import { styles } from './style';
import { buttonsName } from '../../enum/buttonsName';
import { ImageBackType } from './type';
import { dataForWelcomeScreen } from '../../consts/consts';
import { WelcomeScreenProps } from '../../screens/WelcomeScreen/type';
import { TextItemBold } from '../Text/TextItemBold/TextItemBold';
import { HeaderTextItem } from '../Text/HeaderTextItem/HeaderTextItem';

export const ImageBack: FC<ImageBackType> = ({ text, button, header }) => {
  const navigation = useNavigation<WelcomeScreenProps>();

  const openLoginScreen = () => {
    navigation.navigate(AuthNavigationName.LOGIN);
  };

  return (
    <ImageBackground source={dataForWelcomeScreen.img} style={styles.imageBackground}>
      <View style={styles.headerTextContainer}>
        <HeaderTextItem>{header}</HeaderTextItem>
      </View>
      <View style={styles.textContainer}>
        <TextItemBold>{text}</TextItemBold>
      </View>
      {button && (
        <View style={styles.buttonContainer}>
          <AppButton title={buttonsName.GO_AHEAD} onPress={openLoginScreen} backgroundColor={COLORS.buttons.peach} />
        </View>
      )}
    </ImageBackground>
  );
};
