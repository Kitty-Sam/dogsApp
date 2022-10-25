import React, { FC, useState } from 'react';
import { ActivityIndicator, Image, View } from 'react-native';
import { images, screenWidth } from '../../consts/consts';
import { Gap } from '../Gap/Gap';

export type LibraryImagesBlockPropsType = {
  photo: string;
};

export const LibraryImagesBlock: FC<LibraryImagesBlockPropsType> = props => {
  const { photo } = props;

  const [loading, setLoading] = useState<boolean>(false);

  const onLoading = (value: boolean) => {
    setLoading(value);
  };
  return (
    <>
      {loading && <ActivityIndicator />}
      {
        <Image
          source={{ uri: photo }}
          style={{
            width: 300,
            height: 300,
            borderRadius: 50,
          }}
          onLoadEnd={() => onLoading(false)}
          onLoadStart={() => onLoading(true)}
        />
      }
      <Gap size={3} />
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly', width: screenWidth }}>
        <Image
          source={{ uri: images.pet }}
          style={{
            width: 60,
            height: 60,
            borderRadius: 10,
          }}
        />
        <Image
          source={{ uri: images.pet }}
          style={{
            width: 60,
            height: 60,
            borderRadius: 10,
          }}
        />
        <Image
          source={{ uri: images.pet }}
          style={{
            width: 60,
            height: 60,
            borderRadius: 10,
          }}
        />
        <Image
          source={{ uri: images.pet }}
          style={{
            width: 60,
            height: 60,
            borderRadius: 10,
          }}
        />
      </View>
    </>
  );
};
