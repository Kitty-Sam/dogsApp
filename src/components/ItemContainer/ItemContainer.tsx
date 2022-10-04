import React, { FC } from 'react';
import { View } from 'react-native';
import { ItemType } from './type';
import { TextItemThin } from '../Text/TextItemThin/TextItemThin';
import { HeaderTextItem } from '../Text/HeaderTextItem/HeaderTextItem';
import { styles } from './style';
import { Gap } from '../Gap/Gap';
import { AddSection } from '../AddSection/AddSection';

export const ItemContainer: FC<ItemType> = ({ title, info, address, phone, chapter }) => {
  return (
    <>
      <View style={styles.commonInfoContainer}>
        <HeaderTextItem>{title}</HeaderTextItem>
        <Gap size={2} />
        <TextItemThin>Address: {address}</TextItemThin>
        <Gap size={1} />
        <TextItemThin>Phone: {phone}</TextItemThin>
      </View>
      <View style={styles.feedBackContainer}>
        <TextItemThin>Feedback: </TextItemThin>
        <TextItemThin>{info}</TextItemThin>
      </View>
      <View style={{ position: 'absolute', bottom: 120 }}>
        <AddSection chapter={chapter} />
      </View>
    </>
  );
};
