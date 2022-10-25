import React, { FC } from 'react';
import { Actionsheet, useDisclose } from 'native-base';
import { openCamera, openPicker } from 'react-native-image-crop-picker';
import { getUniqueFileName } from '../../utils/getUniqName';
import storage from '@react-native-firebase/storage';
import { Alert, Image, TouchableOpacity } from 'react-native';

const metadata = {
  contentType: 'image/jpeg',
};
const addPhoto = require('../../assets/icons_add_a_photo.png');

export type LoadImagePickerButtonType = {
  setImage: (image: string) => void;
  setStoreImages?: (images: string[]) => void;
  currentUserId: string;
  screen: string;
  isDone?: string;
  setIsDone?: (isDone: string) => void;
  id: string;
};

export const LoadImagePickerButton: FC<LoadImagePickerButtonType> = ({
  setImage,
  currentUserId,
  screen,
  setIsDone,
  id,
}) => {
  const { isOpen, onOpen, onClose, onToggle } = useDisclose();

  const makeImage = async () => {
    try {
      const image = await openCamera({
        saveToPhotos: true,
        includeBase64: true,
        mediaType: 'photo',
      });
      setImage(image.path);

      const imageFileName = getUniqueFileName(image.path);

      if (screen === 'Profile') {
        const referenceAll = storage().ref().child(`${currentUserId}`).child('/avatars').child(`${imageFileName}`);
        try {
          await referenceAll.putFile(image.path, metadata);
        } catch (e) {
          console.log(e);
        }
      }

      if (screen === 'Animals') {
        const reference = storage()
          .ref()
          .child(`${currentUserId}`)
          .child('/animals')
          .child(`${id}`)
          .child(`${imageFileName}`);
        try {
          await reference.putFile(image.path, metadata);
        } catch (error) {
          console.log(error);
        }
      }
    } catch (error) {
      console.warn(error);
    }
  };

  const uploadImage = async () => {
    onToggle();
    try {
      const image = await openPicker({
        saveToPhotos: true,
        includeBase64: true,
        mediaType: 'photo',
      });
      setImage(image.path);

      const imageFileName = getUniqueFileName(image.path);

      if (screen === 'Profile') {
        const referenceAll = storage().ref().child(`${currentUserId}`).child('/avatars').child(`${imageFileName}`);
        try {
          await referenceAll.putFile(image.path, metadata);
        } catch (e) {
          console.log(e);
        }
      }

      if (screen === 'Animals') {
        const reference = storage()
          .ref()
          .child(`${currentUserId}`)
          .child('/animals')
          .child(`${id}`)
          .child(`${imageFileName}`);
        try {
          await reference.putFile(image.path, metadata);
        } catch (error) {
          console.log(error);
        }
      }
    } catch (error) {
      console.warn(error);
    }
  };
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          if (!id) {
            Alert.alert('Enter name at first');
            return;
          }
          onOpen();
        }}
      >
        <Image source={addPhoto} style={{ width: 30, height: 30, position: 'absolute', left: 70, top: 10 }} />
      </TouchableOpacity>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <Actionsheet.Item onPress={makeImage}>Take photo</Actionsheet.Item>
          <Actionsheet.Item onPress={uploadImage}>Upload photo from gallery</Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </>
  );
};
