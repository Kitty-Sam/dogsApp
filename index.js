import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { AppRegistry } from 'react-native';
import { App } from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './src/store/configureStore';

import { GoogleSignin } from 'react-native-google-signin';

const ReduxProvider = () => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '231327631432-jbab5cet5cn5b1c4v2v7650cf1a9ojp3.apps.googleusercontent.com',
    });
  });
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => ReduxProvider);
