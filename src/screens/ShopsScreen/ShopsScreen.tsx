import React, { useEffect } from 'react';
import { FlatList, Image, ScrollView, Text, View } from 'react-native';
import { AddSection } from '../../components/AddSection/AddSection';
import { chaptersName } from '../../enum/chapters';
import { useDispatch, useSelector } from 'react-redux';
import { getShops } from '../../store/selectors/shopSelector';
import { ItemType } from '../../components/ItemContainer/type';
import { ItemContainer } from '../../components/ItemContainer/ItemContainer';
import { styles } from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import { iconsName } from '../../enum/iconsName';
import { stylesCommon } from '../MastersScreen/style';
import { getCurrentUserId } from '../../store/selectors/loginSelector';
import { FirebaseDatabaseTypes } from '@react-native-firebase/database';
import { database } from '../../utils/getDataBaseURL';
import { fetchShopsAC } from '../../store/actions/shopAC';

const img = 'https://dogbizsuccess.com/wp-content/uploads/article-the-professional-bio-300x300.jpg';

export const ShopsScreen = () => {
  const shops = useSelector(getShops);

  const currentUserId = useSelector(getCurrentUserId);

  const dispatch = useDispatch();

  const getUsefulInfo = async () => {
    const referenceShops: FirebaseDatabaseTypes.Reference = await database.ref(`/users/${currentUserId}/shops`);
    const snapshotShops: FirebaseDatabaseTypes.DataSnapshot = await referenceShops.once('value');
    if (snapshotShops.val()) {
      const values = snapshotShops.val();
      const shops: ItemType[] = Object.values(values);
      // console.log('shopsFromFb', shops);
      dispatch(fetchShopsAC(shops));
    } else {
      const emptyArray: any[] = [];
      dispatch(fetchShopsAC(emptyArray));
    }
  };
  useEffect(() => {
    getUsefulInfo();
    console.log('Render');
  }, [shops]);

  const renderItem = ({ item }: { item: ItemType }) => {
    const { id, info, title, chapter } = item;
    return <ItemContainer id={id} title={title} info={info} chapter={chapter} />;
  };

  if (!shops.length) {
    return (
      <View style={stylesCommon.emptyContainer}>
        <View style={stylesCommon.addSectionContainer}>
          <AddSection chapter={chaptersName.SHOP} />
        </View>
        <Image source={{ uri: img }} style={stylesCommon.emptyImageContainer} />
        <Text style={stylesCommon.emptyText}>You can be the first!</Text>
      </View>
    );
  }
  return (
    <ScrollView style={stylesCommon.rootContainer}>
      <Text style={stylesCommon.headerText}>Shops</Text>
      <View style={stylesCommon.textSectionContainer}>
        <Icon name={iconsName.ALERT_OUTLINE} size={36} />
        <Text style={stylesCommon.textSectionContainer}>
          Add here your favorite shop with a big amount of discounts.
        </Text>
      </View>
      <View style={stylesCommon.addSectionContainer}>
        <AddSection chapter={chaptersName.SHOP} />
      </View>
      <View style={styles.chapterContainer}>
        <FlatList data={shops} renderItem={renderItem} horizontal />
      </View>
    </ScrollView>
  );
};
