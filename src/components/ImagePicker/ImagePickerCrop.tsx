import React, { useState } from 'react';
import { openCamera, openPicker } from 'react-native-image-crop-picker';
import { Image, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from './style';

export type ImagePickerType = {
  photoString: string;
};

// const img = 'https://cdn-icons-png.flaticon.com/512/194/194938.png';

export const ImagePickerCrop = ({ photoString }: ImagePickerType) => {
  const [image, setImage] = useState(photoString);

  const takePhoto = () => {
    try {
      openCamera({
        compressImageMaxWidth: 200,
        compressImageMaxHeight: 200,
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
        compressImageMaxWidth: 200,
        compressImageMaxHeight: 200,
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
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      <View style={styles.uploadBtnContainer}>
        <TouchableOpacity onPress={downLoadFromLibrary} style={styles.uploadBtn}>
          <Icon name="pencil" size={20} color="black" style={{ marginHorizontal: 4 }} />
        </TouchableOpacity>
        <TouchableOpacity onPress={takePhoto} style={styles.uploadBtn}>
          <Icon name="camera" size={20} color="black" style={{ marginHorizontal: 4 }} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
