import React from 'react';
import { Text, View } from 'react-native';
import { ImagePickerCrop } from '../../components/ImagePicker/ImagePickerCrop';
import { styles } from './style';
import { useSelector } from 'react-redux';
import { getCurrentUserName } from '../../store/selectors/loginSelector';

export const ProfileScreen = () => {
  const currentUserName = useSelector(getCurrentUserName);
  return (
    <View style={styles.container}>
      <ImagePickerCrop />
      <Text style={{ marginVertical: 20, fontSize: 16 }}> Welcome, {currentUserName}</Text>
    </View>
  );
};
