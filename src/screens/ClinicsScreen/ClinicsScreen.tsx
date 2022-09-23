import React, { memo, useEffect } from 'react';
import { ActivityIndicator, FlatList, ImageBackground, SafeAreaView, View } from 'react-native';
import { AddSection } from '../../components/AddSection/AddSection';
import { chaptersName } from '../../enum/chapters';
import { useDispatch, useSelector } from 'react-redux';
import { getClinics } from '../../store/selectors/clinicSelector';
import { ItemType } from '../../components/ItemContainer/type';
import { ItemContainer } from '../../components/ItemContainer/ItemContainer';
import { styles } from './style';
import { stylesCommon } from '../MastersScreen/style';
import { getAppStatus } from '../../store/selectors/appSelector';
import { requestStatus } from '../../store/reducers/appReducer';
import { TextItemThin } from '../../components/Text/TextItemThin/TextItemThin';
import { HeaderTextItem } from '../../components/Text/HeaderTextItem/HeaderTextItem';
import { fetchServicesAction } from '../../store/sagas/sagaActions/fetchServices';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const img = require('../../assets/white_buldog.jpeg');

export const ClinicsScreen = memo(() => {
  const clinics = useSelector(getClinics);
  const statusApp = useSelector(getAppStatus);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchServicesAction({ chapter: chaptersName.CLINIC }));
  }, []);

  const renderItem = ({ item }: { item: ItemType }) => {
    const { id, info, title, chapter } = item;
    return <ItemContainer id={id} title={title} info={info} chapter={chapter} />;
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
    <SafeAreaView style={stylesCommon.rootContainer}>
      {statusApp === requestStatus.LOADING ? (
        <ActivityIndicator />
      ) : (
        <>
          <HeaderTextItem>Clinics</HeaderTextItem>
          <HeaderTextItem>Lime disease</HeaderTextItem>
          <TextItemThin style={styles.text}>
            Treatment for Lyme disease in dogs usually involves a course of antibiotics which will last for 4 weeks or
            longer (the antibiotic Doxycycline is typically a first-choice option). If your pooch seems to be
            experiencing a lot of pain, your vet may also prescribe anti-inflammatory medication to help alleviate joint
            pain.
          </TextItemThin>
          <View style={stylesCommon.addSectionContainer}>
            <AddSection chapter={chaptersName.CLINIC} />
          </View>
          <FlatList
            data={clinics}
            renderItem={renderItem}
            horizontal={false}
            contentContainerStyle={styles.chapterContainer}
          />
        </>
      )}
    </SafeAreaView>
  );
});
