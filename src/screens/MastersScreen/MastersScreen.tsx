import React, { memo, useEffect } from 'react';
import { ActivityIndicator, FlatList, ImageBackground, ScrollView, Text, View } from 'react-native';
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
import { toggleAppStatus } from '../../store/actions/appAC';
import { requestStatus } from '../../store/reducers/appReducer';
import { getAppStatus } from '../../store/selectors/appSelector';
import { COLORS } from '../../colors/colors';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const img = require('../../assets/white_dog_thin.jpeg');

export const MastersScreen = memo(() => {
  const masters = useSelector(getMasters);
  const currentUserId = useSelector(getCurrentUserId);
  const statusApp = useSelector(getAppStatus);

  const dispatch = useDispatch();

  const getUsefulInfo = async () => {
    dispatch(toggleAppStatus(requestStatus.LOADING));
    const referenceMasters: FirebaseDatabaseTypes.Reference = await database.ref(`/users/${currentUserId}/masters`);
    const snapshotMasters: FirebaseDatabaseTypes.DataSnapshot = await referenceMasters.once('value');

    if (snapshotMasters.val()) {
      const values = snapshotMasters.val();
      const masters: any = Object.values(values);
      dispatch(fetchMastersAC(masters));
      dispatch(toggleAppStatus(requestStatus.SUCCEEDED));
    } else {
      const emptyArray: any[] = [];
      dispatch(fetchMastersAC(emptyArray));
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

  if (!masters.length) {
    return (
      <ImageBackground source={img} style={stylesCommon.emptyContainer}>
        <Text style={{ color: COLORS.text.dark_blue }}>Add master</Text>
        <AddSection chapter={chaptersName.MASTER} />
      </ImageBackground>
    );
  }
  return (
    <ScrollView style={stylesCommon.rootContainer}>
      {statusApp === requestStatus.LOADING ? (
        <ActivityIndicator />
      ) : (
        <>
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
        </>
      )}
    </ScrollView>
  );
});
