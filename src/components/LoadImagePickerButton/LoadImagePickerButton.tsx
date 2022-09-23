import React, { FC } from 'react';
import { Actionsheet, useDisclose } from 'native-base';
import { openCamera, openPicker } from 'react-native-image-crop-picker';
import { getUniqueFileName } from '../../utils/getUniqName';
import storage from '@react-native-firebase/storage';
import { getImages } from '../../utils/getImagesFromStore';
import Icon from 'react-native-vector-icons/Ionicons';
import { iconsName } from '../../enum/iconsName';
import { COLORS } from '../../colors/colors';

const metadata = {
  contentType: 'image/jpeg',
};

export type LoadImagePickerButtonType = {
  setImage: (image: string) => void;
  setStoreImages: (images: string[]) => void;
  currentUserId: string;
  screen: string;
};

export const LoadImagePickerButton: FC<LoadImagePickerButtonType> = ({
  setImage,
  setStoreImages,
  currentUserId,
  screen,
}) => {
  const { isOpen, onOpen, onClose, onToggle } = useDisclose();

  console.log('isOpen', isOpen);

  const makeImage = async () => {
    try {
      const image = await openCamera({
        saveToPhotos: true,
        includeBase64: true,
        mediaType: 'photo',
      });
      setImage(image.path);
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
          const task = referenceAll.putFile(image.path, metadata);
          // task.on('state_changed', taskSnapshot => {
          //   console.log(`${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`);
          // });
          task.then(async () => {
            try {
              const images = await getImages('/avatars', currentUserId);
              setStoreImages(images);
            } catch (error) {
              console.log(error);
            }
          });
        } catch (error) {
          console.log(error);
        }
      }
      if (screen === 'Animals') {
        const reference = storage()
          .ref()
          .child(`${currentUserId}`)
          .child('/animals')
          // .child('animalName')
          .child(`${imageFileName}`);
        try {
          const task = reference.putFile(image.path, metadata);
          task.then(async () => {
            try {
              const images = await getImages('/animals', currentUserId);
              setStoreImages(images);
            } catch (error) {
              console.log(error);
            }
          });
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
      <Icon name={iconsName.CAMERA} size={24} onPress={onOpen} color={COLORS.text.dark_blue} />
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <Actionsheet.Item onPress={makeImage}>Take photo</Actionsheet.Item>
          <Actionsheet.Item onPress={uploadImage}>Upload photo from gallery</Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </>
  );
};
