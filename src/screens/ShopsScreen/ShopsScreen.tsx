import React from 'react';
import {FlatList, ScrollView, Text, View} from 'react-native';

import {AddSection} from '../../components/AddSection/AddSection';
import {chaptersName} from '../../enum/chapters';
import {useSelector} from 'react-redux';
import {getShops} from '../../store/selectors/shopSelector';
import {ItemType} from '../../components/ItemContainer/type';
import {ItemContainer} from '../../components/ItemContainer/ItemContainer';
import {styles} from './style';

export const ShopsScreen = () => {
  const shops = useSelector(getShops);
  const renderItem = ({item}: {item: ItemType}) => {
    const {id, info, title, chapter} = item;
    return (
      <ItemContainer id={id} title={title} info={info} chapter={chapter} />
    );
  };
  return (
    <ScrollView>
      <Text>Shops</Text>
      <View style={styles.chapterContainer}>
        <AddSection chapter={chaptersName.SHOP} />
        <FlatList data={shops} renderItem={renderItem} horizontal />
      </View>
    </ScrollView>
  );
};
