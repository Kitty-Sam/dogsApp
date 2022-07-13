import React, { useState } from 'react';
import { openCamera, openPicker } from 'react-native-image-crop-picker';
import { Image, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from './style';

export const ImagePickerCrop = () => {
  const [image, setImage] = useState('');

  const takePhoto = () => {
    try {
      openCamera({
        compressImageMaxWidth: 300,
        compressImageMaxHeight: 300,
        compressImageQuality: 0.7,
        cropping: true,
      })
        .then(image => {
          setImage(image.path);
        })
        .catch(err => {
          console.warn(err);
        });
    } catch (error) {
      console.warn(error);
    }
  };
  const downLoadFromLibrary = () => {
    try {
      openPicker({
        compressImageMaxWidth: 300,
        compressImageMaxHeight: 300,
        compressImageQuality: 0.7,
        cropping: true,
      })
        .then(image => {
          setImage(image.path);
        })
        .catch(err => {
          console.warn(err);
        });
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <View style={styles.container}>
      {image && <Image source={{ uri: image }} style={{ width: 300, height: 300 }} />}
      <View style={styles.uploadBtnContainer}>
        <TouchableOpacity onPress={downLoadFromLibrary} style={styles.uploadBtn}>
          {/*<Text>{image ? 'Edit' : 'Upload'} Image</Text>*/}
          <Icon name="pencil" size={20} color="black" style={{ marginHorizontal: 4 }} />
        </TouchableOpacity>
        <TouchableOpacity onPress={takePhoto} style={styles.uploadBtn}>
          {/*<Text>{image ? 'Edit' : 'Take'} Image</Text>*/}
          <Icon name="camera" size={20} color="black" style={{ marginHorizontal: 4 }} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
