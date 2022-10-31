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
import { COLORS } from '../../colors/colors';
import { styles } from './style';
import { FAB } from 'react-native-paper';
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
          style={styles.mainPhotoImage}
          onLoadEnd={() => onLoading(false)}
          onLoadStart={() => onLoading(true)}
        />
      }
      <Gap size={3} />
      <ScrollView style={styles.libraryContainer}>
        {allPhotos.length ? (
          <SafeAreaView style={styles.root}>
            <FlatList
              horizontal
              data={allPhotos}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => onOpenImagePress(item)}>
                  <Image key={item} source={{ uri: item }} style={styles.smallPhotoImage} />
                  <Modal visible={openId === item} style={styles.modalContainer}>
                    <View style={styles.mainModalBlock}>
                      <Icon
                        name={iconsName.ARROW_LEFT}
                        onPress={() => {
                          setOpen('');
                        }}
                        size={24}
                        color={COLORS.text.grey}
                      />
                      <Image key={item} source={{ uri: item }} style={styles.mainPhotoImage} />
                      <Icon
                        name={iconsName.ARROW_RIGHT}
                        onPress={() => {
                          console.log('right');
                        }}
                        size={24}
                        color={COLORS.text.grey}
                      />
                      <FAB icon="plus" style={styles.fab} onPress={() => console.log('add')} />
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
