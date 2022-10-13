import React from 'react';
import { ShopsScreen } from '../../screens/ShopsScreen/ShopsScreen';
import { ClinicsScreen } from '../../screens/ClinicsScreen/ClinicsScreen';
import { MastersScreen } from '../../screens/MastersScreen/MastersScreen';
import { ServicesNavigationName } from '../../enum/navigation';
import { UsefulStackParamList } from './type';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { UsefulServiceScreen } from '../../screens/UsefulServiceScreen/UsefulServiceScreen';
import { PetSittersScreen } from '../../screens/PetSittersScreen/PetSittersScreen';
import { GroomersScreen } from '../../screens/GroomersScreen/GroomersScreen';
import { TrainersScreen } from '../../screens/TrainersScreen/TrainersScreen';
import { DogFriendliesScreen } from '../../screens/DogFriendliesScreen/DogFriendliesScreen';
import { ItemUniteScreen } from '../../screens/ItemUniteScreen/ItemUniteScreen';
import { COLORS } from '../../colors/colors';

const StackService = createNativeStackNavigator<UsefulStackParamList>();

export const UsefulStack = () => {
  return (
    <StackService.Navigator
      screenOptions={{
        headerBackTitle: 'Back',
        headerTintColor: COLORS.buttons.violet,
        headerTitleStyle: {
          color: COLORS.text.black,
        },
      }}
    >
      <StackService.Screen name={ServicesNavigationName.ROOT} component={UsefulServiceScreen} />
      <StackService.Screen name={ServicesNavigationName.SHOPS} component={ShopsScreen} />
      <StackService.Screen name={ServicesNavigationName.CLINICS} component={ClinicsScreen} />
      <StackService.Screen name={ServicesNavigationName.MASTERS} component={MastersScreen} />
      <StackService.Screen name={ServicesNavigationName.PET_SITTERS} component={PetSittersScreen} />
      <StackService.Screen name={ServicesNavigationName.GROOMERS} component={GroomersScreen} />
      <StackService.Screen name={ServicesNavigationName.TRAINERS} component={TrainersScreen} />
      <StackService.Screen name={ServicesNavigationName.DOG_FRIENDLY} component={DogFriendliesScreen} />
      <StackService.Screen name={ServicesNavigationName.ITEM_UNITE} component={ItemUniteScreen} />
    </StackService.Navigator>
  );
};
