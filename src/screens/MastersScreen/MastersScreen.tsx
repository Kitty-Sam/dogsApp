import React from 'react';
import { FlatList, ScrollView, Text, View } from 'react-native';
import { AddSection } from '../../components/AddSection/AddSection';
import { chaptersName } from '../../enum/chapters';
import { useSelector } from 'react-redux';
import { getMasters } from '../../store/selectors/masterSelector';
import { ItemType } from '../../components/ItemContainer/type';
import { ItemContainer } from '../../components/ItemContainer/ItemContainer';
import { styles, stylesCommon } from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import { iconsName } from '../../enum/iconsName';

export const MastersScreen = () => {
  const masters = useSelector(getMasters);
  const renderItem = ({ item }: { item: ItemType }) => {
    const { id, info, title, chapter } = item;
    return <ItemContainer id={id} title={title} info={info} chapter={chapter} />;
  };
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
