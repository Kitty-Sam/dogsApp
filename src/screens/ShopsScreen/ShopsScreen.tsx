import React, { memo, useEffect } from 'react';
import { ActivityIndicator, FlatList, ImageBackground, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { AddSection } from '../../components/AddSection/AddSection';
import { chaptersName } from '../../enum/chapters';
import { useDispatch, useSelector } from 'react-redux';
import { getShops } from '../../store/selectors/shopSelector';
import { ItemType } from '../../components/ItemContainer/type';
import { ItemContainer } from '../../components/ItemContainer/ItemContainer';
import { styles } from './style';
import { stylesCommon } from '../MastersScreen/style';
import { getCurrentUserId } from '../../store/selectors/loginSelector';
import { FirebaseDatabaseTypes } from '@react-native-firebase/database';
import { database } from '../../utils/getDataBaseURL';
import { fetchShopsAC } from '../../store/actions/shopAC';
import { toggleAppStatus } from '../../store/actions/appAC';
import { requestStatus } from '../../store/reducers/appReducer';
import { getAppStatus } from '../../store/selectors/appSelector';
import { COLORS } from '../../colors/colors';
import { HeaderTextItem } from '../../components/Text/HeaderTextItem/HeaderTextItem';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const img = require('../../assets/white_cat_fat.jpeg');

export const ShopsScreen = memo(() => {
  const shops = useSelector(getShops);
  const statusApp = useSelector(getAppStatus);

  const dispatch = useDispatch();

  const getUsefulInfo = async () => {
    dispatch(toggleAppStatus(requestStatus.LOADING));
    const referenceShops: FirebaseDatabaseTypes.Reference = await database.ref(`/shops`);
    const snapshotShops: FirebaseDatabaseTypes.DataSnapshot = await referenceShops.once('value');
    if (snapshotShops.val()) {
      const values = snapshotShops.val();
      const shops: ItemType[] = Object.values(values);
      dispatch(fetchShopsAC(shops));
      dispatch(toggleAppStatus(requestStatus.SUCCEEDED));
    } else {
      const emptyArray: ItemType[] = [];
      dispatch(fetchShopsAC(emptyArray));
      dispatch(toggleAppStatus(requestStatus.SUCCEEDED));
    }
  };
  useEffect(() => {
    getUsefulInfo();
  }, []);

  const renderItem = ({ item }: { item: ItemType }) => {
    const { id, info, title, chapter } = item;
    return <ItemContainer id={id} title={title} info={info} chapter={chapter} />;
  };

  if (!shops.length) {
    return (
      <ImageBackground source={img} style={stylesCommon.emptyContainer}>
        <Text style={{ color: COLORS.text.dark_blue }}>Add shop</Text>
        <AddSection chapter={chaptersName.SHOP} />
      </ImageBackground>
    );
  }
  return (
    <SafeAreaView style={stylesCommon.rootContainer}>
      {statusApp === requestStatus.LOADING ? (
        <ActivityIndicator />
      ) : (
        <>
          <HeaderTextItem>Shops</HeaderTextItem>
          <View style={stylesCommon.addSectionContainer}>
            <AddSection chapter={chaptersName.SHOP} />
          </View>
          <FlatList data={shops} renderItem={renderItem} horizontal contentContainerStyle={styles.chapterContainer} />
        </>
      )}
    </SafeAreaView>
  );
});
