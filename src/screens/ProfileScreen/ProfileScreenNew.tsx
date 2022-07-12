import React, { useState } from 'react';
import { Alert, Image, PermissionsAndroid, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { launchImageLibrary, launchCamera, ImagePickerResponse } from 'react-native-image-picker';

export const ProfileScreenNew = () => {
  return (
    <View style={styles.container}>
      <UploadPhoto />
      <Text style={{ marginVertical: 20, fontSize: 16 }}>Welcome, Katerina Samuta</Text>
    </View>
  );
};

export const UploadPhoto = () => {
  const [image, setImage] = useState('');

  const savePhoto = (result: ImagePickerResponse) => {
    let newItem: string;
    if (result.assets && result.assets[0].uri) {
      newItem = result.assets[0].uri;
      console.log('newItem', newItem);
    }
    setImage(prev => newItem);
  };

  const addImage = async () => {
    try {
      const granted = await PermissionsAndroid.requestMultiple([PermissionsAndroid.PERMISSIONS.CAMERA]);
      console.log('granted', granted);

      if (granted['android.permission.CAMERA'] === PermissionsAndroid.RESULTS.GRANTED) {
        await launchCamera({
          saveToPhotos: true,
          mediaType: 'photo',
          includeBase64: false,
        });

        await launchImageLibrary(
          {
            selectionLimit: 0,
            mediaType: 'photo',
            includeBase64: false,
          },
          savePhoto,
        );
      } else {
        Alert.alert('Give your permissions');
        // granted = await PermissionsAndroid.requestMultiple([PermissionsAndroid.PERMISSIONS.CAMERA]);
        // console.log('granted', granted);
      }
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <View style={imageUploaderStyles.container}>
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      <View style={imageUploaderStyles.uploadBtnContainer}>
        <TouchableOpacity onPress={addImage} style={imageUploaderStyles.uploadBtn}>
          <Text>{image ? 'Edit' : 'Upload'} Image</Text>
          <Icon name="camera" size={20} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const imageUploaderStyles = StyleSheet.create({
  container: {
    elevation: 2,
    height: 200,
    width: 200,
    backgroundColor: '#efefef',
    position: 'relative',
    borderRadius: 999,
    overflow: 'hidden',
  },
  uploadBtnContainer: {
    opacity: 0.7,
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: 'lightgrey',
    width: '100%',
    height: '25%',
  },
  uploadBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
