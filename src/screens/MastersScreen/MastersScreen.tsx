import React from 'react';
import {FlatList, ScrollView, Text, View} from 'react-native';

import {AddSection} from '../../components/AddSection/AddSection';
import {chaptersName} from '../../enum/chapters';
import {useSelector} from 'react-redux';
import {getMasters} from '../../store/selectors/masterSelector';
import {ItemType} from '../../components/ItemContainer/type';
import {ItemContainer} from '../../components/ItemContainer/ItemContainer';
import {styles} from './style';

export const MastersScreen = () => {
  const masters = useSelector(getMasters);
  const renderItem = ({item}: {item: ItemType}) => {
    const {id, info, title, chapter} = item;
    return (
      <ItemContainer id={id} title={title} info={info} chapter={chapter} />
    );
  };
  return (
    <ScrollView>
      <Text>Masters</Text>
      <View style={styles.chapterContainer}>
        <AddSection chapter={chaptersName.MASTER} />
        <FlatList data={masters} renderItem={renderItem} horizontal />
      </View>
    </ScrollView>
  );
};
