import React, { FC, useEffect } from 'react';
import { FlatList, ImageBackground, SafeAreaView, Text, View } from 'react-native';
import { AddSection } from '../../components/AddSection/AddSection';
import { chaptersName } from '../../enum/chapters';
import { useDispatch, useSelector } from 'react-redux';
import { ItemType } from '../../components/ItemContainer/type';
import { requestStatus } from '../../store/reducers/appReducer';
import { getAppStatus } from '../../store/selectors/appSelector';
import { COLORS } from '../../colors/colors';
import { fetchServicesAction } from '../../store/sagas/sagaActions/fetchServices';
import { getDogFriendlies } from '../../store/selectors/dogFriendliesSelector';
import { DogFriendlyScreenProps } from './type';
import { stylesCommon } from '../ShopsScreen/style';
import { Loader } from '../../components/Loader/Loader';
import { ListItemContainer } from '../../components/ListItemContainer/ListItemContainer';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const img = require('../../assets/white_dog_thin.jpeg');

export const DogFriendliesScreen: FC<DogFriendlyScreenProps> = props => {
  const { moveToItemScreen, removeItem } = props.route.params;
  const dogFriendlies = useSelector(getDogFriendlies);
  const statusApp = useSelector(getAppStatus);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchServicesAction({ chapter: chaptersName.DOG_FRIENDLY }));
  }, []);

  const renderItem = ({ item }: { item: ItemType }) => {
    return <ListItemContainer moveToItemScreen={moveToItemScreen} removeItem={removeItem} item={item} />;
  };

  if (!dogFriendlies.length) {
    return (
      <ImageBackground source={img} style={stylesCommon.emptyContainer}>
        <Text style={{ color: COLORS.text.dark_blue }}>Add dog friendly place</Text>
        <AddSection chapter={chaptersName.DOG_FRIENDLY} />
      </ImageBackground>
    );
  }
  return (
    <SafeAreaView style={{ flex: 1, margin: 12 }}>
      {statusApp === requestStatus.LOADING ? (
        <Loader />
      ) : (
        <>
          <FlatList data={dogFriendlies} renderItem={renderItem} />
          <View style={{ position: 'absolute', bottom: 80, right: 24 }}>
            <AddSection chapter={chaptersName.DOG_FRIENDLY} />
          </View>
        </>
      )}
    </SafeAreaView>
  );
};
