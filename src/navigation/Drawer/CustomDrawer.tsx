import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {TouchableOpacity, View, Text, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {DrawerNavigationName} from '../../enum/navigation';
import {styles} from './style';

const avatar1 =
  'https://cdnstatic.rg.ru/uploads/images/222/22/41/photorep_imageid_513152_19_b6265e7a.jpg';

export const CustomDrawer = (props: any) => {
  const navigation = useNavigation<any>();
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <Image source={{uri: avatar1}} style={styles.avatarContainer} />
        <TouchableOpacity
          style={styles.userNameText}
          onPress={() => navigation.navigate(DrawerNavigationName.PROFILE)}>
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
