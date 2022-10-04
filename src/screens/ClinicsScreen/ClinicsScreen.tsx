import React, { FC, useEffect } from 'react';
import { ActivityIndicator, FlatList, ImageBackground, SafeAreaView, TouchableOpacity, View } from 'react-native';
import { AddSection } from '../../components/AddSection/AddSection';
import { chaptersName } from '../../enum/chapters';
import { useDispatch, useSelector } from 'react-redux';
import { getClinics } from '../../store/selectors/clinicSelector';
import { ItemType } from '../../components/ItemContainer/type';
import { getAppStatus } from '../../store/selectors/appSelector';
import { requestStatus } from '../../store/reducers/appReducer';
import { TextItemThin } from '../../components/Text/TextItemThin/TextItemThin';
import { fetchServicesAction } from '../../store/sagas/sagaActions/fetchServices';
import { ClinicsScreenProps } from './type';
import { stylesCommon } from '../ShopsScreen/style';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const img = require('../../assets/white_buldog.jpeg');

export const ClinicsScreen: FC<ClinicsScreenProps> = props => {
  const { moveToItemScreen, removeItem } = props.route.params;
  const clinics = useSelector(getClinics);
  const statusApp = useSelector(getAppStatus);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchServicesAction({ chapter: chaptersName.CLINIC }));
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

  if (!clinics.length) {
    return (
      <ImageBackground source={img} style={stylesCommon.emptyContainer}>
        <TextItemThin>Add clinic</TextItemThin>
        <AddSection chapter={chaptersName.CLINIC} />
      </ImageBackground>
    );
  }
  return (
    <SafeAreaView>
      {statusApp === requestStatus.LOADING ? (
        <ActivityIndicator />
      ) : (
        <FlatList data={clinics} renderItem={renderItem} />
      )}
    </SafeAreaView>
  );
};
