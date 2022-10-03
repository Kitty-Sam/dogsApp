import React, { FC } from 'react';
import { SafeAreaView } from 'react-native';
import { UsefulStackScreenProps } from '../../navigation/UsefulStack/type';
import { ServicesNavigationName } from '../../enum/navigation';
import { GroupContainer } from '../../components/GroupContainer/GroupContainer';

export const UsefulServiceScreen: FC<UsefulStackScreenProps> = props => {
  const { navigation } = props;

  return (
    <SafeAreaView
      style={{
        flexGrow: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'space-around',
        justifyContent: 'space-evenly',
      }}
    >
      <GroupContainer title={'Shops'} onPress={() => navigation.navigate(ServicesNavigationName.SHOPS)} />
      <GroupContainer title={'Clinics'} onPress={() => navigation.navigate(ServicesNavigationName.CLINICS)} />
      <GroupContainer title={'Dog Walkers'} onPress={() => navigation.navigate(ServicesNavigationName.SHOPS)} />
      <GroupContainer title={'Masters'} onPress={() => navigation.navigate(ServicesNavigationName.MASTERS)} />
      <GroupContainer title={'Add pet'} onPress={() => navigation.navigate(ServicesNavigationName.ADD)} />
    </SafeAreaView>
  );
};
