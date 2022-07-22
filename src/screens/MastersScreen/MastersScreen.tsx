import React, { useEffect } from 'react';
import { FlatList, Image, ScrollView, Text, View } from 'react-native';
import { AddSection } from '../../components/AddSection/AddSection';
import { chaptersName } from '../../enum/chapters';
import { useDispatch, useSelector } from 'react-redux';
import { getMasters } from '../../store/selectors/masterSelector';
import { ItemType } from '../../components/ItemContainer/type';
import { ItemContainer } from '../../components/ItemContainer/ItemContainer';
import { styles, stylesCommon } from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import { iconsName } from '../../enum/iconsName';
import { FirebaseDatabaseTypes } from '@react-native-firebase/database';
import { database } from '../../utils/getDataBaseURL';
import { fetchMastersAC } from '../../store/actions/masterAC';
import { getCurrentUserId } from '../../store/selectors/loginSelector';

const img =
  'https://st.depositphotos.com/1146092/1257/i/950/depositphotos_12573001-stock-photo-business-dog-typewriter.jpg';

export const MastersScreen = () => {
  const masters = useSelector(getMasters);
  const currentUserId = useSelector(getCurrentUserId);

  const dispatch = useDispatch();

  const getUsefulInfo = async () => {
    const referenceMasters: FirebaseDatabaseTypes.Reference = await database.ref(`/users/${currentUserId}/masters`);
    const snapshotMasters: FirebaseDatabaseTypes.DataSnapshot = await referenceMasters.once('value');

    if (snapshotMasters.val()) {
      const values = snapshotMasters.val();
      const masters: any = Object.values(values);
      dispatch(fetchMastersAC(masters));
    } else {
      const emptyArray: any[] = [];
      dispatch(fetchMastersAC(emptyArray));
    }
  };
  useEffect(() => {
    getUsefulInfo();
  }, [masters]);

  const renderItem = ({ item }: { item: ItemType }) => {
    const { id, info, title, chapter } = item;
    return <ItemContainer id={id} title={title} info={info} chapter={chapter} />;
  };

  if (!masters.length) {
    return (
      <View style={stylesCommon.emptyContainer}>
        <View style={stylesCommon.addSectionContainer}>
          <AddSection chapter={chaptersName.MASTER} />
        </View>
        <Image source={{ uri: img }} style={stylesCommon.emptyImageContainer} />
        <Text style={stylesCommon.emptyText}>You can be the first!</Text>
      </View>
    );
  }
  return (
    <ScrollView style={stylesCommon.rootContainer}>
      <Text style={stylesCommon.headerText}>Masters</Text>
      <View style={stylesCommon.textSectionContainer}>
        <Icon name={iconsName.ALERT_OUTLINE} size={36} />
        <Text style={stylesCommon.text}>Add here your favorite master with gold hands.</Text>
      </View>
      <View style={stylesCommon.addSectionContainer}>
        <AddSection chapter={chaptersName.MASTER} />
      </View>

      <View style={styles.chapterContainer}>
        <FlatList data={masters} renderItem={renderItem} horizontal />
      </View>
    </ScrollView>
  );
};
