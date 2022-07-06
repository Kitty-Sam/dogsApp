import React from 'react';
import {FlatList, SafeAreaView, ScrollView, Text, View} from 'react-native';
import {ItemContainer} from '../../components/ItemContainer/ItemContainer';
import {AddSection} from '../../components/AddSection/AddSection';
import {useSelector} from 'react-redux';
import {ItemType} from '../../components/ItemContainer/ItemContainerType';
import {chaptersName} from '../../enum/chaptersEnum';
import {getShops} from '../../store/selectors/shopSelector';
import {getClinics} from '../../store/selectors/clinicSelector';
import {getMasters} from '../../store/selectors/masterSelector';
import {styles} from './UsefulInfoScreenStyle';

export const UsefulInfoScreen = () => {
  const shops = useSelector(getShops);
  const clinics = useSelector(getClinics);
  const masters = useSelector(getMasters);

  const renderItem = ({item}: {item: ItemType}) => {
    const {title, info, id, chapter} = item;
    return (
      <ItemContainer title={title} info={info} id={id} chapter={chapter} />
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <Text>Shops</Text>
        <View style={styles.chapterContainer}>
          <AddSection chapter={chaptersName.SHOP} />
          <FlatList data={shops} renderItem={renderItem} horizontal />
        </View>

        <Text>Veterinary clinics</Text>
        <View style={styles.chapterContainer}>
          <AddSection chapter={chaptersName.CLINIC} />
          <FlatList data={clinics} renderItem={renderItem} horizontal />
        </View>

        <Text>Masters</Text>
        <View style={styles.chapterContainer}>
          <AddSection chapter={chaptersName.MASTER} />
          <FlatList data={masters} renderItem={renderItem} horizontal />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
