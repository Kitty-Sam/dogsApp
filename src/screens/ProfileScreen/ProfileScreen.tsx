import React from 'react';
import { Text, View } from 'react-native';
import { ImagePickerCrop } from '../../components/ImagePicker/ImagePickerCrop';
import { styles } from './style';

export const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <ImagePickerCrop />
      <Text style={{ marginVertical: 20, fontSize: 16 }}>Welcome, Katerina Samuta</Text>
    </View>
  );
};
