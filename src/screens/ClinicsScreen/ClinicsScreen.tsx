import React, { memo, useEffect } from 'react';
import { ActivityIndicator, FlatList, ImageBackground, ScrollView, Text, View } from 'react-native';
import { AddSection } from '../../components/AddSection/AddSection';
import { chaptersName } from '../../enum/chapters';
import { useDispatch, useSelector } from 'react-redux';
import { getClinics } from '../../store/selectors/clinicSelector';
import { ItemType } from '../../components/ItemContainer/type';
import { ItemContainer } from '../../components/ItemContainer/ItemContainer';
import { styles } from './style';
import { stylesCommon } from '../MastersScreen/style';
import { getCurrentUserId } from '../../store/selectors/loginSelector';
import { FirebaseDatabaseTypes } from '@react-native-firebase/database';
import { database } from '../../utils/getDataBaseURL';
import { fetchClinicsAC } from '../../store/actions/clinicAC';
import { getAppStatus } from '../../store/selectors/appSelector';
import { toggleAppStatus } from '../../store/actions/appAC';
import { requestStatus } from '../../store/reducers/appReducer';
import { COLORS } from '../../colors/colors';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const img = require('../../assets/white_buldog.jpeg');

export const ClinicsScreen = memo(() => {
  const clinics = useSelector(getClinics);

  const currentUserId = useSelector(getCurrentUserId);
  const statusApp = useSelector(getAppStatus);

  const dispatch = useDispatch();

  const getUsefulInfo = async () => {
    dispatch(toggleAppStatus(requestStatus.LOADING));

    const referenceClinics: FirebaseDatabaseTypes.Reference = await database.ref(`/users/${currentUserId}/clinics`);
    const snapshotClinics: FirebaseDatabaseTypes.DataSnapshot = await referenceClinics.once('value');

    if (snapshotClinics.val()) {
      const values = snapshotClinics.val();
      const clinics: any = Object.values(values);
      dispatch(fetchClinicsAC(clinics));
      dispatch(toggleAppStatus(requestStatus.SUCCEEDED));
    } else {
      const emptyArray: any[] = [];
      dispatch(fetchClinicsAC(emptyArray));
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

  if (!clinics.length) {
    return (
      <ImageBackground source={img} style={stylesCommon.emptyContainer}>
        <Text style={{ color: COLORS.text.dark_blue }}>Add clinic</Text>
        <AddSection chapter={chaptersName.CLINIC} />
      </ImageBackground>
    );
  }
  return (
    <ScrollView style={stylesCommon.rootContainer}>
      {statusApp === requestStatus.LOADING ? (
        <ActivityIndicator />
      ) : (
        <>
          <Text style={stylesCommon.headerText}>Clinics</Text>
          <Text style={stylesCommon.headerText}>Lime disease</Text>
          <Text style={stylesCommon.textArticle}>
            Treatment for Lyme disease in dogs usually involves a course of antibiotics which will last for 4 weeks or
            longer (the antibiotic Doxycycline is typically a first-choice option). If your pooch seems to be
            experiencing a lot of pain, your vet may also prescribe anti-inflammatory medication to help alleviate joint
            pain.
          </Text>
          <View style={stylesCommon.addSectionContainer}>
            <AddSection chapter={chaptersName.CLINIC} />
          </View>
          <View style={styles.chapterContainer}>
            <FlatList data={clinics} renderItem={renderItem} horizontal />
          </View>
        </>
      )}
    </ScrollView>
  );
});
