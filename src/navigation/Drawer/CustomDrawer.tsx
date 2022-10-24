import React from 'react';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUserName, getCurrentUserPhoto } from '../../store/selectors/loginSelector';
import { COLORS } from '../../colors/colors';
import { googleSignOutAction } from '../../store/sagas/sagaActions/googleSignOut';
import { TextItemThin } from '../../components/Text/TextItemThin/TextItemThin';
import { images } from '../../consts/consts';

export const CustomDrawer = (props: any) => {
  const photo = useSelector(getCurrentUserPhoto);
  const currentUserName = useSelector(getCurrentUserName);
  const dispatch = useDispatch();

  const onLogOut = () => {
    dispatch(googleSignOutAction());
  };
  return (
    <DrawerContentScrollView
      {...props}
      style={{ flex: 1 }}
      contentContainerStyle={{ backgroundColor: COLORS.background.light_violet }}
    >
      <>
        <Image source={{ uri: !photo ? images.avatar : photo }} style={styles.avatarContainer} />
        <TouchableOpacity style={styles.userNameTextContainer}>
          <Text style={{ color: COLORS.text.dark_blue, fontSize: 18 }}>{currentUserName}</Text>
          <Text style={{ color: COLORS.text.dark_blue }}>friends and pets</Text>
        </TouchableOpacity>
      </>

      <View
        style={{
          backgroundColor: COLORS.text.white,
          borderTopEndRadius: 30,
          paddingTop: 40,
        }}
      >
        <DrawerItemList {...props} />
        <View style={{ backgroundColor: COLORS.text.white }}>
          <TouchableOpacity style={styles.logOutText} onPress={onLogOut}>
            <TextItemThin style={{ letterSpacing: -0.5 }}>Log out</TextItemThin>
          </TouchableOpacity>
        </View>
      </View>
    </DrawerContentScrollView>
  );
};
