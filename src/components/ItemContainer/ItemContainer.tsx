import React from 'react';
import { TouchableOpacity } from 'react-native';
import { styles } from './style';
import { useDispatch } from 'react-redux';
import { removeShopAC } from '../../store/actions/shopAC';
import { chaptersName } from '../../enum/chapters';
import { ItemType } from './type';
import { removeClinicAC } from '../../store/actions/clinicAC';
import { removeMasterAC } from '../../store/actions/masterAC';
import { database } from '../../utils/getDataBaseURL';
import { TextItemBold } from '../Text/TextItemBold/TextItemBold';
import { TextItemThin } from '../Text/TextItemThin/TextItemThin';

export const ItemContainer = ({ title, info, id, chapter }: ItemType) => {
  const dispatch = useDispatch();

  const removeItem = (text: chaptersName) => async () => {
    if (text === chaptersName.SHOP) {
      await database.ref(`shops`).child(`${id}`).remove();
      dispatch(removeShopAC({ id }));
    }
    if (text === chaptersName.CLINIC) {
      await database.ref(`/clinics`).child(`${id}`).remove();
      dispatch(removeClinicAC({ id }));
    }
    if (text === chaptersName.MASTER) {
      await database.ref(`/masters`).child(`${id}`).remove();
      dispatch(removeMasterAC({ id }));
    }
  };

  return (
    <TouchableOpacity style={styles.itemContainer} onLongPress={removeItem(chapter)}>
      <TextItemBold>{title}</TextItemBold>
      <TextItemThin>{info}</TextItemThin>
    </TouchableOpacity>
  );
};
