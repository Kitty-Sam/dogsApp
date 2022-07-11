import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import {styles} from './style';
import {useDispatch} from 'react-redux';
import {removeShopAC} from '../../store/actions/shopAC';
import {chaptersName} from '../../enum/chapters';
import {ItemType} from './type';
import {removeClinicAC} from '../../store/actions/clinicAC';
import {removeMasterAC} from '../../store/actions/masterAC';
import {createImg} from '../../utils/createImg';

export const ItemContainer = ({title, info, id, chapter}: ItemType) => {
  const dispatch = useDispatch();
  const removeItem = (text: chaptersName) => () => {
    if (text === chaptersName.SHOP) {
      dispatch(removeShopAC({id}));
    }
    if (text === chaptersName.CLINIC) {
      dispatch(removeClinicAC({id}));
    }
    if (text === chaptersName.MASTER) {
      dispatch(removeMasterAC({id}));
    }
  };

  return (
    <TouchableOpacity
      style={styles.itemContainer}
      onLongPress={removeItem(chapter)}>
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.text}>{info}</Text>
      <Image source={{uri: createImg(chapter)}} style={styles.imageContainer} />
    </TouchableOpacity>
  );
};
