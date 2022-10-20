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
import { getGroomers } from '../../store/selectors/groomerSelector';
import { stylesCommon } from '../ShopsScreen/style';
import { GroomersScreenProps } from './type';
import { Loader } from '../../components/Loader/Loader';
import { ListItemContainer } from '../../components/ListItemContainer/ListItemContainer';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const img = require('../../assets/white_dog_thin.jpeg');

export const GroomersScreen: FC<GroomersScreenProps> = props => {
  const { moveToItemScreen, removeItem } = props.route.params;
  const groomers = useSelector(getGroomers);
  const statusApp = useSelector(getAppStatus);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchServicesAction({ chapter: chaptersName.GROOMER }));
  }, []);

  const renderItem = ({ item }: { item: ItemType }) => {
    return <ListItemContainer moveToItemScreen={moveToItemScreen} removeItem={removeItem} item={item} />;
  };

  if (!groomers.length) {
    return (
      <ImageBackground source={img} style={stylesCommon.emptyContainer}>
        <Text style={{ color: COLORS.text.dark_blue }}>Add groomer</Text>
        <AddSection chapter={chaptersName.GROOMER} />
      </ImageBackground>
    );
  }
  return (
    <SafeAreaView style={{ flex: 1, margin: 12 }}>
      {statusApp === requestStatus.LOADING ? (
        <Loader />
      ) : (
        <>
          <FlatList data={groomers} renderItem={renderItem} />
          <View style={{ position: 'absolute', bottom: 80, right: 24 }}>
            <AddSection chapter={chaptersName.GROOMER} />
          </View>
        </>
      )}
    </SafeAreaView>
  );
};
