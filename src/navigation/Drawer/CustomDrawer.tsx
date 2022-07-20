import React from 'react';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationName } from '../../enum/navigation';
import { styles } from './style';
import { useSelector } from 'react-redux';
import { getCurrentUserPhoto } from '../../store/selectors/loginSelector';

export const CustomDrawer = (props: any) => {
  const photo = useSelector(getCurrentUserPhoto);
  const navigation = useNavigation<any>();
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <Image source={{ uri: String(photo) }} style={styles.avatarContainer} />
        <TouchableOpacity style={styles.userNameText} onPress={() => navigation.navigate(DrawerNavigationName.PROFILE)}>
          <Text>Katerina Samuta</Text>
        </TouchableOpacity>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <TouchableOpacity style={styles.logOutText}>
        <Text>Log out</Text>
      </TouchableOpacity>
    </View>
  );
};
