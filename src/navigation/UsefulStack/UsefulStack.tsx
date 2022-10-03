import React from 'react';
import { ShopsScreen } from '../../screens/ShopsScreen/ShopsScreen';
import { ClinicsScreen } from '../../screens/ClinicsScreen/ClinicsScreen';
import { MastersScreen } from '../../screens/MastersScreen/MastersScreen';
import { ServicesNavigationName } from '../../enum/navigation';
import { UsefulStackParamList } from './type';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { UsefulServiceScreen } from '../../screens/UsefulServiceScreen/UsefulServiceScreen';
import { AddPetScreen } from '../../screens/AddPetScreen/AddPetScreen';

const StackService = createNativeStackNavigator<UsefulStackParamList>();

export const UsefulStack = () => {
  return (
    <StackService.Navigator
      screenOptions={{
        headerBackTitle: 'Back',
      }}
    >
      <StackService.Screen name={ServicesNavigationName.ROOT} component={UsefulServiceScreen} />
      <StackService.Screen name={ServicesNavigationName.SHOPS} component={ShopsScreen} />
      <StackService.Screen name={ServicesNavigationName.CLINICS} component={ClinicsScreen} />
      <StackService.Screen name={ServicesNavigationName.MASTERS} component={MastersScreen} />
      <StackService.Screen name={ServicesNavigationName.ADD} component={AddPetScreen} />
    </StackService.Navigator>
  );
};
