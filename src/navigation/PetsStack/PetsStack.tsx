import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PetsNavigationName } from '../../enum/navigation';
import { PetUniteScreen } from '../../screens/PetUniteScreen/PetUniteScreen';
import { PetsStackParamList } from './type';
import { ProfileScreen } from '../../screens/ProfileScreen/ProfileScreen';
import { COLORS } from '../../colors/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { AddPetScreen } from '../../screens/AddPetScreen/AddPetScreen';
import { EditPetProfileScreen } from '../../screens/EditPetProfileScreen/EditPetProfileScreen';

const Pets = createNativeStackNavigator<PetsStackParamList>();

export const PetsStack = () => {
  const navigation = useNavigation<any>();
  return (
    <Pets.Navigator
      screenOptions={{
        headerBackTitle: 'Back',
        headerTintColor: COLORS.buttons.violet,
        headerTitleStyle: {
          color: COLORS.text.black,
        },
        headerTitleAlign: 'center',
      }}
    >
      <Pets.Screen
        name={PetsNavigationName.PROFILE}
        component={ProfileScreen}
        options={{ headerLeft: () => <Icon name={'menu-sharp'} size={24} onPress={() => navigation.openDrawer()} /> }}
      />
      <Pets.Screen name={PetsNavigationName.PET_UNITE} component={PetUniteScreen} />
      <Pets.Screen name={PetsNavigationName.ADD_PET} component={AddPetScreen} />
      <Pets.Screen name={PetsNavigationName.EDIT_PET} component={EditPetProfileScreen} />
    </Pets.Navigator>
  );
};
