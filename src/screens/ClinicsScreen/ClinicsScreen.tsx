import React, { FC, useEffect } from 'react';
import { FlatList, ImageBackground, SafeAreaView, TouchableOpacity, View } from 'react-native';
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
import { Loader } from '../../components/Loader/Loader';
import { ListItemContainer } from '../../components/ListItemContainer/ListItemContainer';

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
    return <ListItemContainer moveToItemScreen={moveToItemScreen} removeItem={removeItem} item={item} />;
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
    <SafeAreaView style={{ flex: 1, margin: 12 }}>
      {statusApp === requestStatus.LOADING ? (
        <Loader text={'Data is uploading...'} />
      ) : (
        <>
          <FlatList data={clinics} renderItem={renderItem} />
          <View style={{ position: 'absolute', bottom: 80, right: 24 }}>
            <AddSection chapter={chaptersName.CLINIC} />
          </View>
        </>
      )}
    </SafeAreaView>
  );
};
