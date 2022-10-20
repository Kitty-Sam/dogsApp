import React, { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { ItemType } from '../ItemContainer/type';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from './style';
import { chaptersName } from '../../enum/chapters';

export type ListItemContainerPropsType = {
  item: ItemType;
  moveToItemScreen: (
    id: string,
    info: string,
    title: string,
    chapter: chaptersName,
    address: string,
    phone: string,
  ) => void;
  removeItem: (text: chaptersName, id: string) => void;
};

export const ListItemContainer: FC<ListItemContainerPropsType> = prop => {
  const { item, moveToItemScreen, removeItem } = prop;
  const { title, phone, address, id, info, chapter } = item;
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => moveToItemScreen(id, info, title, chapter, address, phone)}
    >
      <View style={styles.content}>
        <View style={styles.row}>
          <Text style={styles.name} numberOfLines={1}>
            {title}
          </Text>
          <MaterialCommunityIcon name={'sticker-remove-outline'} onPress={() => removeItem(chapter, id)} />
        </View>
        <Text numberOfLines={2} style={styles.subTitle}>
          {address}
        </Text>
        <Text numberOfLines={2} style={styles.subTitle}>
          {phone}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
