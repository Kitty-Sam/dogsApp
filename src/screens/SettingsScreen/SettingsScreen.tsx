import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextItemThin } from '../../components/Text/TextItemThin/TextItemThin';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

export const SettingsScreen = () => {
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Icon
        name={'menu-sharp'}
        size={24}
        style={{ position: 'absolute', top: 12, left: 24, zIndex: 10 }}
        onPress={() => navigation.openDrawer()}
      />
      <TextItemThin>Settings</TextItemThin>
    </SafeAreaView>
  );
};
