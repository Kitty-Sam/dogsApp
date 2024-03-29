import React, { memo, useEffect } from 'react';
import { ActivityIndicator, FlatList, ImageBackground, SafeAreaView, Text, View } from 'react-native';
import { AddSection } from '../../components/AddSection/AddSection';
import { chaptersName } from '../../enum/chapters';
import { useDispatch, useSelector } from 'react-redux';
import { getMasters } from '../../store/selectors/masterSelector';
import { ItemType } from '../../components/ItemContainer/type';
import { ItemContainer } from '../../components/ItemContainer/ItemContainer';
import { styles, stylesCommon } from './style';
import { requestStatus } from '../../store/reducers/appReducer';
import { getAppStatus } from '../../store/selectors/appSelector';
import { COLORS } from '../../colors/colors';
import { HeaderTextItem } from '../../components/Text/HeaderTextItem/HeaderTextItem';
import { fetchServicesAction } from '../../store/sagas/sagaActions/fetchServices';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const img = require('../../assets/white_dog_thin.jpeg');

export const MastersScreen = memo(() => {
  const masters = useSelector(getMasters);
  const statusApp = useSelector(getAppStatus);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchServicesAction({ chapter: chaptersName.MASTER }));
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
    <SafeAreaView style={stylesCommon.rootContainer}>
      {statusApp === requestStatus.LOADING ? (
        <ActivityIndicator />
      ) : (
        <>
          <HeaderTextItem>Masters</HeaderTextItem>
          <View style={stylesCommon.addSectionContainer}>
            <AddSection chapter={chaptersName.MASTER} />
          </View>
          <FlatList data={masters} renderItem={renderItem} horizontal contentContainerStyle={styles.chapterContainer} />
        </>
      )}
    </SafeAreaView>
  );
});
