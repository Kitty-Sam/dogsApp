import React, { FC, useState } from 'react';
import { openCamera, openPicker } from 'react-native-image-crop-picker';
import { Image, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from './style';
import { iconsName } from '../../enum/iconsName';
import { COLORS } from '../../colors/colors';
import { ImagePickerType } from './type';
import { database } from '../../utils/getDataBaseURL';
import { useSelector } from 'react-redux';
import { getCurrentUserId } from '../../store/selectors/loginSelector';

export const ImagePickerCrop: FC<ImagePickerType> = ({ photoString, sizeH, sizeW }) => {
  const currentUserId = useSelector(getCurrentUserId);
  const [image, setImage] = useState<null | string>(photoString);

  console.log('image from set', image);
  console.log('photoString', photoString);

  const takePhoto = () => {
    try {
      openCamera({
        compressImageMaxWidth: sizeW,
        compressImageMaxHeight: sizeH,
        saveToPhotos: true,
        includeBase64: true,
        mediaType: 'photo',
      })
        .then(async image => {
          setImage(() => image.path);
          await database.ref(`/users/${currentUserId}/`).update({
            photo: image.path,
          });
          console.log('image', image.path);
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
        saveToPhotos: true,
        includeBase64: true,
        mediaType: 'photo',
      })
        .then(async image => {
          setImage(image.path);
          await database.ref(`/users/${currentUserId}/`).update({
            photo: image.path,
          });
          console.log('image', image.path);
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
      {/*{avatar && <Image source={{ uri: avatar }} style={{ width: sizeW, height: sizeH }} />}*/}
      <View style={styles.uploadBtnContainer}>
        <TouchableOpacity onPress={downLoadFromLibrary} style={styles.uploadBtn}>
          <Icon name={iconsName.PENCIL} size={20} color={COLORS.text.black} style={styles.iconPosition} />
        </TouchableOpacity>
        <TouchableOpacity onPress={takePhoto} style={styles.uploadBtn}>
          <Icon name={iconsName.CAMERA} size={20} color={COLORS.text.black} style={styles.iconPosition} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
