import React, { FC, useState } from 'react';
import { Image, View } from 'react-native';
import { UploadImageType } from './type';
import { images } from '../../consts/consts';
import { getCurrentUserId } from '../../store/selectors/loginSelector';
import { useSelector } from 'react-redux';
import { LoadImagePickerButton } from '../LoadImagePickerButton/LoadImagePickerButton';

export const UploadImage: FC<UploadImageType> = ({ avatar, sizeH, sizeW }) => {
  const [image, setImage] = useState<null | string>(images.avatar);
  const [storeImages, setStoreImages] = useState<string[]>([]);
  const currentUserId = useSelector(getCurrentUserId);

  return (
    <View style={{ flexDirection: 'row' }}>
      {image && <Image source={{ uri: image }} style={{ width: sizeW, height: sizeH }} />}
      <View style={{ margin: 16 }}>
        <LoadImagePickerButton
          setImage={setImage}
          setStoreImages={setStoreImages}
          currentUserId={currentUserId}
          screen={'Profile'}
        />
      </View>
    </View>
  );
};
