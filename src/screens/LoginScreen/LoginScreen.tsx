import React, { useState } from 'react';
import { ActivityIndicator, Alert, SafeAreaView, TextInput, View } from 'react-native';
import { saveCurrentUserAC, toggleIsLoggedAC } from '../../store/actions/loginAC';
import { useDispatch, useSelector } from 'react-redux';
import { database } from '../../utils/getDataBaseURL';
import { FirebaseDatabaseTypes } from '@react-native-firebase/database';
import { signInWithEmailAndPassword } from '@firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { AuthNavigationName } from '../../enum/navigation';
import { auth } from '../../../firebase';
import { AppButton } from '../../components/Button/CustomSquareButton';
import { styles } from './style';
import { buttonsName } from '../../enum/buttonsName';
import { inputsPlaceholdersName } from '../../enum/inputPlaceholdersName';
import { toggleAppStatus } from '../../store/actions/appAC';
import { requestStatus } from '../../store/reducers/appReducer';
import { getAppStatus } from '../../store/selectors/appSelector';

const imgForRedux = 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000';

export const LoginScreen = (props: any) => {
  const { route } = props;

  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
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
        const users: any[] = Object.values(values);
        const currentUserInFb = users.find(el => el.userId === uid);

        if (currentUserInFb) {
          dispatch(
            saveCurrentUserAC({
              user: {
                currentUserId: uid,
                currentUserName: currentUserInFb.userName,
                currentUserPhoto: imgForRedux,
                currentUserEmail: email!,
              },
            }),
          );
        }

        if (!currentUserInFb) {
          await database
            .ref('/users/')
            .child(`${uid}`)
            .set({ userName: route.params.name, userEmail: email, userId: uid, photo: imgForRedux });

          dispatch(
            saveCurrentUserAC({
              user: {
                currentUserId: uid,
                currentUserName: route.params.name,
                currentUserPhoto: imgForRedux,
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
    <SafeAreaView style={styles.rootContainer}>
      {statusApp === requestStatus.LOADING ? (
        <ActivityIndicator />
      ) : (
        <View>
          <TextInput
            style={styles.input}
            placeholder={inputsPlaceholdersName.EMAIL}
            value={userEmail}
            onChangeText={text => setUserEmail(text)}
          />
          <TextInput
            style={styles.input}
            placeholder={inputsPlaceholdersName.PASSWORD}
            value={password}
            onChangeText={text => setPassword(text)}
            // secureTextEntry
          />
          <View style={styles.buttonsContainer}>
            <AppButton onPress={signIn} title={buttonsName.SIGN_IN} backgroundColor={'yellow'} />
            <AppButton onPress={openRegisterScreen} title={buttonsName.REGISTER} />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};
