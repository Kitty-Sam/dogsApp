import React from 'react';
import {FlatList, ScrollView, Text, View} from 'react-native';

import {AddSection} from '../../components/AddSection/AddSection';
import {chaptersName} from '../../enum/chapters';
import {useSelector} from 'react-redux';
import {getClinics} from '../../store/selectors/clinicSelector';
import {ItemType} from '../../components/ItemContainer/type';
import {ItemContainer} from '../../components/ItemContainer/ItemContainer';
import {styles} from './style';

export const ClinicsScreen = () => {
  const clinics = useSelector(getClinics);
  const renderItem = ({item}: {item: ItemType}) => {
    const {id, info, title, chapter} = item;
    return (
      <ItemContainer id={id} title={title} info={info} chapter={chapter} />
    );
  };
  return (
    <ScrollView>
      <Text>Clinics</Text>
      <View style={styles.chapterContainer}>
        <AddSection chapter={chaptersName.CLINIC} />
        <FlatList data={clinics} renderItem={renderItem} horizontal />
      </View>
    </ScrollView>
  );
};
