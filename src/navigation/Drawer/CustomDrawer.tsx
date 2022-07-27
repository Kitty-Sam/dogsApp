import React from 'react';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationName } from '../../enum/navigation';
import { styles } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUserName, getCurrentUserPhoto } from '../../store/selectors/loginSelector';
import { toggleIsLoggedAC } from '../../store/actions/loginAC';
import { signOut } from 'firebase/auth';
import { auth } from '../../../firebase';

export const CustomDrawer = (props: any) => {
  const photo = useSelector(getCurrentUserPhoto);
  const currentUserName = useSelector(getCurrentUserName);
  const dispatch = useDispatch();

  const onLogOut = async () => {
    await signOut(auth);
    dispatch(toggleIsLoggedAC({ isLogged: false }));
  };

  const navigation = useNavigation<any>();
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <Image source={{ uri: photo }} style={styles.avatarContainer} />
        <TouchableOpacity style={styles.userNameText} onPress={() => navigation.navigate(DrawerNavigationName.PROFILE)}>
          <Text>{currentUserName}</Text>
        </TouchableOpacity>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <TouchableOpacity style={styles.logOutText} onPress={onLogOut}>
        <Text>Log out</Text>
      </TouchableOpacity>
    </View>
  );
};
