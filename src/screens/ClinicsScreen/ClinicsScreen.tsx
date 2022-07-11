import React from 'react';
import {FlatList, ScrollView, Text, View} from 'react-native';
import {AddSection} from '../../components/AddSection/AddSection';
import {chaptersName} from '../../enum/chapters';
import {useSelector} from 'react-redux';
import {getClinics} from '../../store/selectors/clinicSelector';
import {ItemType} from '../../components/ItemContainer/type';
import {ItemContainer} from '../../components/ItemContainer/ItemContainer';
import {styles} from './style';
import {stylesCommon} from '../MastersScreen/style';

export const ClinicsScreen = () => {
  const clinics = useSelector(getClinics);
  const renderItem = ({item}: {item: ItemType}) => {
    const {id, info, title, chapter} = item;
    return (
      <ItemContainer id={id} title={title} info={info} chapter={chapter} />
    );
  };
  return (
    <ScrollView style={stylesCommon.rootContainer}>
      <Text style={stylesCommon.headerText}>Clinics</Text>
      <Text style={stylesCommon.headerText}>Lime disease</Text>
      <Text style={stylesCommon.text}>
        Treatment for Lyme disease in dogs usually involves a course of
        antibiotics which will last for 4 weeks or longer (the antibiotic
        Doxycycline is typically a first-choice option). If your pooch seems to
        be experiencing a lot of pain, your vet may also prescribe
        anti-inflammatory medication to help alleviate joint pain.
      </Text>
      <View style={stylesCommon.addSectionContainer}>
        <AddSection chapter={chaptersName.CLINIC} />
      </View>

      <View style={styles.chapterContainer}>
        <FlatList data={clinics} renderItem={renderItem} horizontal />
      </View>
    </ScrollView>
  );
};
