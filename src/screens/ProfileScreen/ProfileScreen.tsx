import React from 'react';
import { Text, View } from 'react-native';
import { ImagePickerCrop } from '../../components/ImagePicker/ImagePickerCrop';
import { styles } from './style';
import { useSelector } from 'react-redux';
import { getCurrentUserName, getCurrentUserPhoto } from '../../store/selectors/loginSelector';

export const ProfileScreen = () => {
  const photo = useSelector(getCurrentUserPhoto);
  const currentUserName = useSelector(getCurrentUserName);
  const photoString = String(photo);

  return (
    <View style={styles.container}>
      <ImagePickerCrop photoString={photoString} />
      {currentUserName && <Text style={{ marginVertical: 20, fontSize: 16 }}> Welcome, {currentUserName}</Text>}
    </View>
  );
};
