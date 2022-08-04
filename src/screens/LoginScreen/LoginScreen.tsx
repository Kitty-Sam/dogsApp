import React, { useState } from 'react';
import { ActivityIndicator, Alert, ImageBackground, TextInput, View } from 'react-native';
import { saveCurrentUserAC, toggleIsLoggedAC } from '../../store/actions/loginAC';
import { useDispatch, useSelector } from 'react-redux';
import { database } from '../../utils/getDataBaseURL';
import { FirebaseDatabaseTypes } from '@react-native-firebase/database';
import { signInWithEmailAndPassword } from '@firebase/auth';
import { AuthNavigationName } from '../../enum/navigation';
import { auth } from '../../../firebase';
import { AppButton } from '../../components/Button/CustomSquareButton';
import { styles } from './style';
import { buttonsName } from '../../enum/buttonsName';
import { inputsPlaceholdersName } from '../../enum/inputPlaceholdersName';
import { toggleAppStatus } from '../../store/actions/appAC';
import { requestStatus } from '../../store/reducers/appReducer';
import { getAppStatus } from '../../store/selectors/appSelector';
import { COLORS } from '../../colors/colors';
import { LoginScreenProps, User } from './type';
import { images } from '../../consts/consts';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const img = require('../../assets/white_dog_fat.jpeg');

export const LoginScreen = (props: LoginScreenProps) => {
  const { route, navigation } = props;

  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const statusApp = useSelector(getAppStatus);

  const signIn = async () => {
    dispatch(toggleAppStatus(requestStatus.LOADING));
    try {
      const userCredential = await signInWithEmailAndPassword(auth, userEmail, password);
      const { uid, email } = userCredential.user;

      const reference: FirebaseDatabaseTypes.Reference = await database.ref(`/users/`);
      const snapshot: FirebaseDatabaseTypes.DataSnapshot = await reference.once('value');

      if (snapshot.val()) {
        const values = snapshot.val();
        const users: User[] = Object.values(values);
        const currentUserInFb = users.find(el => el.userId === uid);

        if (currentUserInFb) {
          dispatch(
            saveCurrentUserAC({
              user: {
                currentUserId: uid,
                currentUserName: currentUserInFb.userName,
                currentUserPhoto: images.avatar,
                currentUserEmail: email!,
              },
            }),
          );
        }

        if (!currentUserInFb) {
          await database
            .ref('/users/')
            .child(`${uid}`)
            .set({ userName: route.params!.name, userEmail: email, userId: uid, photo: images.avatar });

          dispatch(
            saveCurrentUserAC({
              user: {
                currentUserId: uid,
                currentUserName: route.params!.name!,
                currentUserPhoto: images.avatar,
                currentUserEmail: email!,
              },
            }),
          );
        }
      }
      setUserEmail('');
      setPassword('');
      dispatch(toggleAppStatus(requestStatus.SUCCEEDED));
      dispatch(toggleIsLoggedAC({ isLogged: true }));
    } catch (error: any) {
      const errorMessage = error.message;
      Alert.alert('register at first', errorMessage);
      dispatch(toggleAppStatus(requestStatus.FAILED));
      navigation.navigate(AuthNavigationName.REGISTER);
    }
  };

  const openRegisterScreen = () => {
    navigation.navigate(AuthNavigationName.REGISTER);
  };

  return (
    <ImageBackground source={img} style={styles.rootContainer}>
      {statusApp === requestStatus.LOADING ? (
        <ActivityIndicator style={{ zIndex: 10 }} />
      ) : (
        <View style={styles.inputsContainer}>
          <TextInput
            style={styles.input}
            placeholderTextColor={COLORS.text.grey}
            placeholder={inputsPlaceholdersName.EMAIL}
            value={userEmail}
            onChangeText={text => setUserEmail(text)}
          />
          <TextInput
            style={styles.input}
            placeholderTextColor={COLORS.text.grey}
            placeholder={inputsPlaceholdersName.PASSWORD}
            value={password}
            onChangeText={text => setPassword(text)}
            // secureTextEntry
          />
          <View style={styles.buttonsContainer}>
            <AppButton onPress={signIn} title={buttonsName.SIGN_IN} backgroundColor={COLORS.buttons.peach} />
            <AppButton
              onPress={openRegisterScreen}
              title={buttonsName.REGISTER}
              backgroundColor={COLORS.buttons.brown}
            />
          </View>
        </View>
      )}
    </ImageBackground>
  );
};
