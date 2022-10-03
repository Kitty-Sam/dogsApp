import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import { styles } from './style';
import { GroupType } from './type';
import { TextItemBold } from '../Text/TextItemBold/TextItemBold';

export const GroupContainer: FC<GroupType> = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
      <TextItemBold>{title}</TextItemBold>
    </TouchableOpacity>
  );
};
