import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AdoptionNavigationName } from '../../enum/navigation';
import { AdoptionScreen } from '../../screens/AdoptionScreen/AdoptionScreen';
import { AdoptionStackParamList } from '../../screens/AdoptionScreen/type';
import { PetUniteScreen } from '../../screens/PetUniteScreen/PetUniteScreen';

const Adoption = createNativeStackNavigator<AdoptionStackParamList>();

export const AdoptionStack = () => {
  return (
    <Adoption.Navigator>
      <Adoption.Screen
        name={AdoptionNavigationName.ADOPTION}
        component={AdoptionScreen}
        options={{ headerShown: false }}
      />
      <Adoption.Screen name={AdoptionNavigationName.PET_UNITE} component={PetUniteScreen} />
    </Adoption.Navigator>
  );
};
