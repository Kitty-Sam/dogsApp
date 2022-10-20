import React, { FC, useEffect } from 'react';
import { FlatList, ImageBackground, SafeAreaView, Text, View } from 'react-native';
import { AddSection } from '../../components/AddSection/AddSection';
import { chaptersName } from '../../enum/chapters';
import { useDispatch, useSelector } from 'react-redux';
import { getMasters } from '../../store/selectors/masterSelector';
import { ItemType } from '../../components/ItemContainer/type';

import { requestStatus } from '../../store/reducers/appReducer';
import { getAppStatus } from '../../store/selectors/appSelector';
import { COLORS } from '../../colors/colors';
import { fetchServicesAction } from '../../store/sagas/sagaActions/fetchServices';
import { stylesCommon } from '../ShopsScreen/style';
import { MastersScreenProps } from './type';
import { Loader } from '../../components/Loader/Loader';
import { ListItemContainer } from '../../components/ListItemContainer/ListItemContainer';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const img = require('../../assets/white_dog_thin.jpeg');

export const MastersScreen: FC<MastersScreenProps> = props => {
  const { moveToItemScreen, removeItem } = props.route.params;
  const masters = useSelector(getMasters);
  const statusApp = useSelector(getAppStatus);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchServicesAction({ chapter: chaptersName.MASTER }));
  }, []);

  const renderItem = ({ item }: { item: ItemType }) => {
    return <ListItemContainer moveToItemScreen={moveToItemScreen} removeItem={removeItem} item={item} />;
  };

  if (!masters.length) {
    return (
      <ImageBackground source={img} style={stylesCommon.emptyContainer}>
        <Text style={{ color: COLORS.text.dark_blue }}>Add dog walker</Text>
        <AddSection chapter={chaptersName.MASTER} />
      </ImageBackground>
    );
  }
  return (
    <SafeAreaView style={{ flex: 1, margin: 12 }}>
      {statusApp === requestStatus.LOADING ? (
        <Loader />
      ) : (
        <>
          <FlatList data={masters} renderItem={renderItem} />
          <View style={{ position: 'absolute', bottom: 80, right: 24 }}>
            <AddSection chapter={chaptersName.MASTER} />
          </View>
        </>
      )}
    </SafeAreaView>
  );
};
