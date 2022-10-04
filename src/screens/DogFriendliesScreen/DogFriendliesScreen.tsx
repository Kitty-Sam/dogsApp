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
import { getDogFriendlies } from '../../store/selectors/dogFriendliesSelector';
import { DogFriendlyScreenProps } from './type';
import { TextItemThin } from '../../components/Text/TextItemThin/TextItemThin';
import { stylesCommon } from '../ShopsScreen/style';

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

  if (!dogFriendlies.length) {
    return (
      <ImageBackground source={img} style={stylesCommon.emptyContainer}>
        <Text style={{ color: COLORS.text.dark_blue }}>Add dog friendly place</Text>
        <AddSection chapter={chaptersName.DOG_FRIENDLY} />
      </ImageBackground>
    );
  }
  return (
    <SafeAreaView>
      {statusApp === requestStatus.LOADING ? (
        <ActivityIndicator />
      ) : (
        <FlatList data={dogFriendlies} renderItem={renderItem} />
      )}
    </SafeAreaView>
  );
};
