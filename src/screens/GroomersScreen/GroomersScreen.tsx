import React, { FC, useEffect } from 'react';
import { ActivityIndicator, FlatList, ImageBackground, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { AddSection } from '../../components/AddSection/AddSection';
import { chaptersName } from '../../enum/chapters';
import { useDispatch, useSelector } from 'react-redux';
import { ItemType } from '../../components/ItemContainer/type';

import { requestStatus } from '../../store/reducers/appReducer';
import { getAppStatus } from '../../store/selectors/appSelector';
import { COLORS } from '../../colors/colors';
import { fetchServicesAction } from '../../store/sagas/sagaActions/fetchServices';
import { getGroomers } from '../../store/selectors/groomerSelector';
import { TextItemThin } from '../../components/Text/TextItemThin/TextItemThin';
import { stylesCommon } from '../ShopsScreen/style';
import { GroomersScreenProps } from './type';

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
    const { id, info, title, chapter, address, phone } = item;
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          onPress={() => moveToItemScreen(id, info, title, chapter, address, phone)}
          style={stylesCommon.itemContainer}
        >
          <TextItemThin style={{ textAlign: 'center' }}>{title}</TextItemThin>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => removeItem(chapter, id)}>
          <TextItemThin style={{ marginTop: 20 }}>x</TextItemThin>
        </TouchableOpacity>
      </View>
    );
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
    <SafeAreaView>
      {statusApp === requestStatus.LOADING ? (
        <ActivityIndicator />
      ) : (
        <FlatList data={groomers} renderItem={renderItem} />
      )}
    </SafeAreaView>
  );
};
