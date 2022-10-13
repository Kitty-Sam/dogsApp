import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import { styles } from './style';
import { GroupType } from './type';
import { TextItemBold } from '../Text/TextItemBold/TextItemBold';
import { COLORS } from '../../colors/colors';

export const GroupContainer: FC<GroupType> = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
      <TextItemBold style={{ color: COLORS.text.white }}>{title}</TextItemBold>
    </TouchableOpacity>
  );
};
