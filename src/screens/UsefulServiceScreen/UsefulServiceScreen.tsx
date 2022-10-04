import React, { FC } from 'react';
import { LogBox, SafeAreaView } from 'react-native';
import { UsefulStackScreenProps } from '../../navigation/UsefulStack/type';
import { ServicesNavigationName } from '../../enum/navigation';
import { GroupContainer } from '../../components/GroupContainer/GroupContainer';
import { styles } from './style';
import { chaptersName } from '../../enum/chapters';
import { removeServiceAction } from '../../store/sagas/sagaActions/removeService';
import { useDispatch } from 'react-redux';

LogBox.ignoreLogs(['Non-serializable values were found in the navigation state']);

export const UsefulServiceScreen: FC<UsefulStackScreenProps> = props => {
  const { navigation } = props;

  const dispatch = useDispatch();

  const moveToItemScreen = (
    id: string,
    info: string,
    title: string,
    chapter: chaptersName,
    address: string,
    phone: string,
  ) => {
    navigation.navigate(ServicesNavigationName.ITEM_UNITE, {
      id,
      info,
      title,
      chapter,
      address,
      phone,
    });
  };

  const removeItem = (text: chaptersName, id: string) => {
    dispatch(removeServiceAction({ chapter: text, id }));
  };

  return (
    <SafeAreaView style={styles.root}>
      <GroupContainer
        title={'Dog Walkers'}
        onPress={() => navigation.navigate(ServicesNavigationName.MASTERS, { moveToItemScreen, removeItem })}
      />
      <GroupContainer
        title={'Pet Sitters'}
        onPress={() => navigation.navigate(ServicesNavigationName.PET_SITTERS, { moveToItemScreen, removeItem })}
      />
      <GroupContainer
        title={'Vets'}
        onPress={() => navigation.navigate(ServicesNavigationName.CLINICS, { moveToItemScreen, removeItem })}
      />
      <GroupContainer
        title={'Shops'}
        onPress={() => navigation.navigate(ServicesNavigationName.SHOPS, { moveToItemScreen, removeItem })}
      />
      <GroupContainer
        title={'Groomers'}
        onPress={() => navigation.navigate(ServicesNavigationName.GROOMERS, { moveToItemScreen, removeItem })}
      />
      <GroupContainer
        title={'Trainers'}
        onPress={() => navigation.navigate(ServicesNavigationName.TRAINERS, { moveToItemScreen, removeItem })}
      />
      <GroupContainer
        title={'Dog friendly'}
        onPress={() => navigation.navigate(ServicesNavigationName.DOG_FRIENDLY, { moveToItemScreen, removeItem })}
      />
    </SafeAreaView>
  );
};
