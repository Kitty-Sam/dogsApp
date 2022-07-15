import React from 'react';
import { Text, View } from 'react-native';
import { ImagePickerCrop } from '../../components/ImagePicker/ImagePickerCrop';
import { styles } from './style';
import { AppButton } from '../../components/Button/CustomSquareButton';
import { database } from '../../utils/getDataBaseURL';

export const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <ImagePickerCrop />
      <Text style={{ marginVertical: 20, fontSize: 16 }}>Welcome, Katerina Samuta</Text>
      {/* <AppButton
        onPress={async () => {
          console.log('WORK');
          await database.ref('/users/').child('string').set({ title: 'login' });
        }}
        title={'work with firebase'}
      />*/}
    </View>
  );
};
