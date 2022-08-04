import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthNavigationName } from '../../enum/navigation';
import { AppButton } from '../Button/CustomSquareButton';
import { COLORS } from '../../colors/colors';
import { imageBackgroundStyles } from './style';
import { buttonsName } from '../../enum/buttonsName';
import { ImageBackType } from './type';
import { dataForWelcomeScreen } from '../../consts/consts';
import { WelcomeScreenProps } from '../../screens/WelcomeScreen/type';

export const ImageBack = ({ text, button, header }: ImageBackType) => {
  const navigation = useNavigation<WelcomeScreenProps>();

  const openLoginScreen = () => {
    navigation.navigate(AuthNavigationName.LOGIN);
  };

  const styles = imageBackgroundStyles();

  return (
    <ImageBackground source={dataForWelcomeScreen.img} style={styles.imageBackground}>
      <Text style={styles.headerText}>{header}</Text>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{text}</Text>
      </View>
      {button && (
        <View style={styles.buttonContainer}>
          <AppButton title={buttonsName.START} onPress={openLoginScreen} backgroundColor={COLORS.buttons.peach} />
        </View>
      )}
    </ImageBackground>
  );
};
