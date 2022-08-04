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
  avatar: 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000',
};
