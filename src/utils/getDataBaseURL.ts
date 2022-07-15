import { firebase } from '@react-native-firebase/database';

export const database = firebase.app().database('https://dogs-8cdd1-default-rtdb.firebaseio.com/');
