import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import { styles } from './style';
import { useDispatch } from 'react-redux';
import { chaptersName } from '../../enum/chapters';
import { ItemType } from './type';
import { TextItemBold } from '../Text/TextItemBold/TextItemBold';
import { TextItemThin } from '../Text/TextItemThin/TextItemThin';
import { removeServiceAction } from '../../store/sagas/sagaActions/removeService';

export const ItemContainer: FC<ItemType> = ({ title, info, id, chapter }) => {
  const dispatch = useDispatch();

  const removeItem = (text: chaptersName) => () => {
    dispatch(removeServiceAction({ chapter: text, id }));
  };

  return (
    <TouchableOpacity style={styles.itemContainer} onLongPress={removeItem(chapter)}>
      <TextItemBold>{title}</TextItemBold>
      <TextItemThin>{info}</TextItemThin>
    </TouchableOpacity>
  );
};
