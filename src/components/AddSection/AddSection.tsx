import React, { useState } from 'react';
import { Alert } from 'react-native';
import { ModalAddItem } from '../Modals/ModalAddItem';
import { useDispatch } from 'react-redux';
import { chaptersName } from '../../enum/chapters';
import Icon from 'react-native-vector-icons/Ionicons';
import { iconsName } from '../../enum/iconsName';
import { database } from '../../utils/getDataBaseURL';
import { addShopAC } from '../../store/actions/shopAC';
import { addClinicAC } from '../../store/actions/clinicAC';
import { addMasterAC } from '../../store/actions/masterAC';
import { COLORS } from '../../colors/colors';
import { useInput } from '../../hooks/useInput';

export const AddSection = ({ chapter }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const addedTitle = useInput('');
  const addedInfo = useInput('');

  const addButtonPress = () => {
    setIsOpen(true);
  };

  const dispatch = useDispatch();

  const payload = {
    id: addedTitle.value,
    title: addedTitle.value,
    info: addedInfo.value,
  };

  const addItemPress = async () => {
    if (addedInfo.value.trim() === '' || addedTitle.value.trim() === '') {
      Alert.alert('Please, add the all necessary information');
      addedTitle.resetValue();
      addedInfo.resetValue();
      return;
    }

    if (chapter === chaptersName.SHOP) {
      database
        .ref(`/shops`)
        .child(`${payload.id}`)
        .set({ ...payload, chapter: chaptersName.SHOP });
      dispatch(addShopAC({ ...payload, chapter: chaptersName.SHOP }));
    }
    if (chapter === chaptersName.CLINIC) {
      database
        .ref(`/clinics`)
        .child(`${payload.id}`)
        .set({ ...payload, chapter: chaptersName.CLINIC });
      dispatch(addClinicAC({ ...payload, chapter: chaptersName.CLINIC }));
    }
    if (chapter === chaptersName.MASTER) {
      database
        .ref(`/masters`)
        .child(`${payload.id}`)
        .set({ ...payload, chapter: chaptersName.MASTER });
      dispatch(addMasterAC({ ...payload, chapter: chaptersName.MASTER }));
    }
    setIsOpen(false);
    addedTitle.resetValue();
    addedInfo.resetValue();
  };

  return (
    <>
      <Icon name={iconsName.ADD_OUTLINE} size={36} onPress={addButtonPress} color={COLORS.text.dark_blue} />
      <ModalAddItem
        addItemPress={addItemPress}
        chapter={chapter}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        addedTitle={addedTitle}
        addedInfo={addedInfo}
      />
    </>
  );
};
