import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import { styles } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { removeShopAC } from '../../store/actions/shopAC';
import { chaptersName } from '../../enum/chapters';
import { ItemType } from './type';
import { removeClinicAC } from '../../store/actions/clinicAC';
import { removeMasterAC } from '../../store/actions/masterAC';
import { createImg } from '../../utils/createImg';
import { database } from '../../utils/getDataBaseURL';
import { getCurrentUserId } from '../../store/selectors/loginSelector';

export const ItemContainer = ({ title, info, id, chapter }: ItemType) => {
  const dispatch = useDispatch();
  const currentUserId = useSelector(getCurrentUserId);
  const removeItem = (text: chaptersName) => async () => {
    if (text === chaptersName.SHOP) {
      await database.ref(`/users/${currentUserId}/shops`).child(`${id}`).remove();
      dispatch(removeShopAC({ id }));
    }
    if (text === chaptersName.CLINIC) {
      await database.ref(`/users/${currentUserId}/clinics`).child(`${id}`).remove();
      dispatch(removeClinicAC({ id }));
    }
    if (text === chaptersName.MASTER) {
      await database.ref(`/users/${currentUserId}/masters`).child(`${id}`).remove();
      dispatch(removeMasterAC({ id }));
    }
  };

  return (
    <TouchableOpacity style={styles.itemContainer} onLongPress={removeItem(chapter)}>
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.text}>{info}</Text>
      <Image source={{ uri: createImg(chapter) }} style={styles.imageContainer} />
    </TouchableOpacity>
  );
};
