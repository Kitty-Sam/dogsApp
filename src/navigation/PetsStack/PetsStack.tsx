import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PetsNavigationName } from '../../enum/navigation';
import { PetUniteScreen } from '../../screens/PetUniteScreen/PetUniteScreen';
import { PetsStackParamList } from './type';
import { ProfileScreen } from '../../screens/ProfileScreen/ProfileScreen';

const Pets = createNativeStackNavigator<PetsStackParamList>();

export const PetsStack = () => {
  return (
    <Pets.Navigator>
      <Pets.Screen name={PetsNavigationName.PROFILE} component={ProfileScreen} options={{ headerShown: false }} />
      <Pets.Screen name={PetsNavigationName.PET_UNITE} component={PetUniteScreen} />
    </Pets.Navigator>
  );
};
