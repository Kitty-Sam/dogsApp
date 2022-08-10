import React, { useRef, useState } from 'react';
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

export const AddSection = ({ chapter }: any) => {
  const [addedTitle, setTitle] = useState('');
  const [addedInfo, setInfo] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const addedTitleRef = useRef<any>(null); //InputHandler
  addedTitleRef.current = addedTitle;

  const addedAddressRef = useRef<any>(null);
  addedAddressRef.current = addedInfo;

  const addButtonPress = () => {
    setIsOpen(true);
  };

  const dispatch = useDispatch();

  const addItemPress = async () => {
    const payload = {
      id: addedTitle,
      title: addedTitle,
      info: addedInfo,
    };
    if (addedInfo.trim() === '' || addedTitle.trim() === '') {
      Alert.alert('Please, add the all necessary information');
      setInfo('');
      setTitle('');
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
    setInfo('');
    setTitle('');
  };

  return (
    <>
      <Icon name={iconsName.ADD_OUTLINE} size={36} onPress={addButtonPress} color={COLORS.text.dark_blue} />
      <ModalAddItem
        addItemPress={addItemPress}
        addedInfo={addedInfo}
        addedTitle={addedTitle}
        setInfo={setInfo}
        setTitle={setTitle}
        chapter={chapter}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </>
  );
};
