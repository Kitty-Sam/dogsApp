import React, { FC, useEffect } from 'react';
import { FlatList, ImageBackground, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { AddSection } from '../../components/AddSection/AddSection';
import { chaptersName } from '../../enum/chapters';
import { useDispatch, useSelector } from 'react-redux';
import { ItemType } from '../../components/ItemContainer/type';

import { requestStatus } from '../../store/reducers/appReducer';
import { getAppStatus } from '../../store/selectors/appSelector';
import { COLORS } from '../../colors/colors';
import { fetchServicesAction } from '../../store/sagas/sagaActions/fetchServices';
import { getPetSitters } from '../../store/selectors/petSitterSelector';
import { PetSittersScreenProps } from './type';
import { TextItemThin } from '../../components/Text/TextItemThin/TextItemThin';
import { stylesCommon } from '../ShopsScreen/style';
import { Loader } from '../../components/Loader/Loader';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const img = require('../../assets/white_dog_thin.jpeg');

export const PetSittersScreen: FC<PetSittersScreenProps> = props => {
  const { moveToItemScreen, removeItem } = props.route.params;
  const petSitters = useSelector(getPetSitters);
  const statusApp = useSelector(getAppStatus);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchServicesAction({ chapter: chaptersName.PET_SITTER }));
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
        <TouchableOpacity
          onPress={() => {
            removeItem(chapter, id);
          }}
        >
          <TextItemThin style={{ marginTop: 20 }}>x</TextItemThin>
        </TouchableOpacity>
      </View>
    );
  };

  if (!petSitters.length) {
    return (
      <ImageBackground source={img} style={stylesCommon.emptyContainer}>
        <Text style={{ color: COLORS.text.dark_blue }}>Add pet sitter</Text>
        <AddSection chapter={chaptersName.PET_SITTER} />
      </ImageBackground>
    );
  }
  return (
    <SafeAreaView>
      {statusApp === requestStatus.LOADING ? <Loader /> : <FlatList data={petSitters} renderItem={renderItem} />}
    </SafeAreaView>
  );
};
