import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './style';
import {useDispatch} from 'react-redux';
import {removeShopAC} from '../../store/actions/shopAC';
import {chaptersName} from '../../enum/chapters';
import {ItemType} from './type';
import {removeClinicAC} from '../../store/actions/clinicAC';
import {removeMasterAC} from '../../store/actions/masterAC';

export const ItemContainer = ({title, info, id, chapter}: ItemType) => {
  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      style={styles.itemContainer}
      onLongPress={() => {
        if (chapter === chaptersName.SHOP) {
          dispatch(removeShopAC({id}));
        }
        if (chapter === chaptersName.CLINIC) {
          dispatch(removeClinicAC({id}));
        }
        if (chapter === chaptersName.MASTER) {
          dispatch(removeMasterAC({id}));
        }
      }}>
      <Text>{title}</Text>
      <Text>{info}</Text>
    </TouchableOpacity>
  );
};
