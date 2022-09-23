import 'react-native-gesture-handler';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { AppRegistry, DevSettings, Platform, SafeAreaView } from 'react-native';
import { App } from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './src/store/configureStore';
import NetInfo from '@react-native-community/netinfo';
import { GoogleSignin } from 'react-native-google-signin';
import { AppButton } from './src/components/Button/AppButton';
import { HeaderTextItem } from './src/components/Text/HeaderTextItem/HeaderTextItem';
import { buttonsName } from './src/enum/buttonsName';
import { styles } from './src/screens/AddPetScreen/style';

const ReduxProvider = () => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '231327631432-jbab5cet5cn5b1c4v2v7650cf1a9ojp3.apps.googleusercontent.com',
    });
  });

  const [connection, setConnection] = useState(null);

  // const pingAndroid = () => {
  //   setTimeout(() => {
  //     pingAndroid();
  //     return fetch('https://www.google.com')
  //       .then(() => {
  //         setConnection(true);
  //       })
  //       .catch(() => {
  //         setConnection(false);
  //       });
  //   }, 5000);
  // };

  useLayoutEffect(() => {
    if (Platform.OS === 'ios') {
      const unsubscribe = NetInfo.addEventListener(state => {
        setConnection(() => state.isConnected);
      });

      return () => {
        unsubscribe();
      };
    }
  });

  if (!connection && connection !== null) {
    return (
      <SafeAreaView style={styles.rootContainer}>
        <HeaderTextItem>Bad connection</HeaderTextItem>
        <AppButton
          onPress={() => {
            DevSettings.reload();
            // RNRestart.Restart();
          }}
          title={buttonsName.RELOAD}
        />
      </SafeAreaView>
    );
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => ReduxProvider);
