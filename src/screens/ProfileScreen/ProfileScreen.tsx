import React from 'react';
import { ImageBackground, Text } from 'react-native';
import { styles } from './style';

const img =
  'https://images.unsplash.com/photo-1615266895858-c243b139d5b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8eWVsbG93JTIwZG9nfGVufDB8fDB8fA%3D%3D&w=1000&q=80';

export const ProfileScreen = () => {
  return (
    <ImageBackground source={{ uri: img }} style={styles.imageBackgroundContainer}>
      <Text style={styles.headerText}>Personal info</Text>
      <Text>Bread: dachshund</Text>
      <Text>NickName: Dysia</Text>
      <Text style={styles.headerText}>What I like?</Text>
      <Text>To eat taste food and to play with different toys</Text>
    </ImageBackground>
  );
};
