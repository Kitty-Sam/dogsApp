import React, { useState } from 'react';
import { openCamera, openPicker } from 'react-native-image-crop-picker';
import { Image, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from './style';
import { iconsName } from '../../enum/iconsName';

export type ImagePickerType = {
  photoString: string | null;
  sizeH: number;
  sizeW: number;
};

export const ImagePickerCrop = ({ photoString, sizeH, sizeW }: ImagePickerType) => {
  const [image, setImage] = useState<string | null>(photoString);

  const takePhoto = () => {
    try {
      openCamera({
        compressImageMaxWidth: sizeW,
        compressImageMaxHeight: sizeH,
        // compressImageQuality: 0.7,
        // cropping: true,
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
        compressImageMaxWidth: sizeW,
        compressImageMaxHeight: sizeH,
        // compressImageQuality: 0.8,
        // cropping: true,
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
    <View style={[styles.container, { height: sizeH, width: sizeW }]}>
      {image && <Image source={{ uri: image }} style={{ width: sizeW, height: sizeH }} />}
      <View style={styles.uploadBtnContainer}>
        <TouchableOpacity onPress={downLoadFromLibrary} style={styles.uploadBtn}>
          <Icon name={iconsName.PENCIL} size={20} color="black" style={{ marginHorizontal: 4 }} />
        </TouchableOpacity>
        <TouchableOpacity onPress={takePhoto} style={styles.uploadBtn}>
          <Icon name={iconsName.CAMERA} size={20} color="black" style={{ marginHorizontal: 4 }} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
