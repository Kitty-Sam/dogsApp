import React from 'react';
import { FlatList, Image, ScrollView, Text, View } from 'react-native';
import { AddSection } from '../../components/AddSection/AddSection';
import { chaptersName } from '../../enum/chapters';
import { useSelector } from 'react-redux';
import { getShops } from '../../store/selectors/shopSelector';
import { ItemType } from '../../components/ItemContainer/type';
import { ItemContainer } from '../../components/ItemContainer/ItemContainer';
import { styles } from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import { iconsName } from '../../enum/iconsName';
import { stylesCommon } from '../MastersScreen/style';

const img = 'https://dogbizsuccess.com/wp-content/uploads/article-the-professional-bio-300x300.jpg';

export const ShopsScreen = () => {
  const shops = useSelector(getShops);
  const renderItem = ({ item }: { item: ItemType }) => {
    const { id, info, title, chapter } = item;
    return <ItemContainer id={id} title={title} info={info} chapter={chapter} />;
  };

  if (!shops.length) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={stylesCommon.addSectionContainer}>
          <AddSection chapter={chaptersName.SHOP} />
        </View>
        <Image source={{ uri: img }} style={{ width: 300, height: 300, margin: 20, borderRadius: 20 }} />
        <Text style={{ fontSize: 14 }}>You can be the first!</Text>
      </View>
    );
  }
  return (
    <ScrollView style={stylesCommon.rootContainer}>
      <Text style={stylesCommon.headerText}>Shops</Text>
      <View style={stylesCommon.textSectionContainer}>
        <Icon name={iconsName.ALERT_OUTLINE} size={36} />
        <Text style={stylesCommon.textSectionContainer}>
          Add here your favorite shop with a big amount of discounts.
        </Text>
      </View>
      <View style={stylesCommon.addSectionContainer}>
        <AddSection chapter={chaptersName.SHOP} />
      </View>
      <View style={styles.chapterContainer}>
        <FlatList data={shops} renderItem={renderItem} horizontal />
      </View>
    </ScrollView>
  );
};
