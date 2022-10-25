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
  pet: 'https://www.petplace.com/static/1360b375896a9c15c09966715710f03d/98569/AdobeStock_199007925.jpg',
  img: 'https://images.ctfassets.net/4f3rgqwzdznj/7lbiSXmU2JKKbdeYaxava7/2a59e164b1367e79e3ad32c5bfc72144/GettyImages-1286481312.jpg',
  no_photo:
    'https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg',
};

export const shelters = ['Rechitsa', 'Small dogs'];
