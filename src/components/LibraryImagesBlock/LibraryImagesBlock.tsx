import React, { FC, useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Modal,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';

import { Gap } from '../Gap/Gap';
import { getGalleryImages } from '../../utils/getImagesFromStore';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

import { iconsName } from '../../enum/iconsName';

export type LibraryImagesBlockPropsType = {
  photo: string;
  nickName: string;
  currentUserId: string;
};

export const LibraryImagesBlock: FC<LibraryImagesBlockPropsType> = props => {
  const { photo, currentUserId, nickName } = props;

  const [loading, setLoading] = useState<boolean>(false);
  const [allPhotos, setAllPhotos] = useState<string[]>([]);

  const navigation = useNavigation();

  useEffect(() => {
    async function getAllPhotos() {
      const photoUrls = await getGalleryImages('animals', nickName, currentUserId);
      setAllPhotos(photoUrls);
    }
    getAllPhotos();
  }, [nickName, navigation]);

  const onLoading = (value: boolean) => {
    setLoading(value);
  };

  const [openId, setOpen] = useState<string>('');

  const onOpenImagePress = (id: string) => {
    setOpen(id);
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
      <ScrollView style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {allPhotos.length ? (
          <SafeAreaView style={{ flex: 1 }}>
            <FlatList
              horizontal
              data={allPhotos}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => onOpenImagePress(item)}>
                  <Image
                    key={item}
                    source={{ uri: item }}
                    style={{
                      width: 60,
                      height: 60,
                      borderRadius: 10,
                      margin: 4,
                    }}
                  />
                  <Modal visible={openId === item} style={{ flex: 1 }}>
                    <View
                      style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                      }}
                    >
                      <Icon
                        name={iconsName.PAW}
                        onPress={() => {
                          setOpen('');
                        }}
                      />
                      <Image
                        key={String(Date.now()) + `${item}`}
                        source={{ uri: item }}
                        style={{
                          width: 300,
                          height: 300,
                          borderRadius: 10,
                          margin: 4,
                        }}
                      />
                      <Icon
                        name={iconsName.MAP}
                        onPress={() => {
                          console.log('right');
                        }}
                      />
                    </View>
                  </Modal>
                </TouchableOpacity>
              )}
            />
          </SafeAreaView>
        ) : (
          <></>
        )}
      </ScrollView>
    </>
  );
};
