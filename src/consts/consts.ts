import { Dimensions, Platform } from 'react-native';

export const screenWidth = Dimensions.get('window').width;
export const platform = Platform.OS;

export const dataForWelcomeScreen = {
  header: 'Your New Best Friend',
  text: 'We will help you to choose your lovely pets. Save a life. Adopt a pet.',
  img: require('../assets/white_old_dog.jpeg'),
  button: true,
  number: 1,
};

export const images = {
  avatar: 'https://www.un.org/sites/un2.un.org/files/user.png',
  img: 'https://images.ctfassets.net/4f3rgqwzdznj/7lbiSXmU2JKKbdeYaxava7/2a59e164b1367e79e3ad32c5bfc72144/GettyImages-1286481312.jpg',
};
