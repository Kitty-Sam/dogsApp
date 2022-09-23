import React from 'react';
import { ImageBack } from '../../components/ImageBackground/ImageBack';
import { dataForWelcomeScreen } from '../../consts/consts';

export const WelcomeScreen = () => {
  return (
    <ImageBack
      header={dataForWelcomeScreen.header}
      text={dataForWelcomeScreen.text}
      button={dataForWelcomeScreen.button}
    />
  );
};
