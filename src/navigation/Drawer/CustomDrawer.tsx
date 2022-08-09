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
import { COLORS } from '../../colors/colors';
import Icon from 'react-native-vector-icons/Ionicons';

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
        <View style={{ flexDirection: 'row' }}>
          <Image source={{ uri: photo }} style={styles.avatarContainer} />
          <TouchableOpacity
            style={styles.userNameTextContainer}
            onPress={() => navigation.navigate(DrawerNavigationName.PROFILE)}
          >
            <Text style={{ color: COLORS.text.dark_blue }}>{currentUserName}</Text>
          </TouchableOpacity>
        </View>

        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View
        style={{
          height: 100,
          borderTopWidth: 1,
          borderTopColor: COLORS.buttons.peach,
          borderTopEndRadius: 50,
          backgroundColor: COLORS.buttons.peach,
        }}
      >
        <TouchableOpacity style={styles.logOutText} onPress={onLogOut}>
          <Icon name={'log-out-outline'} size={24} color={COLORS.text.dark_blue} />
          <Text style={{ color: COLORS.text.dark_blue, margin: 4 }}>Log out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
