import React, { FC, useState } from 'react';
import { Alert } from 'react-native';
import { ModalAddItem } from '../Modals/ModalAddItem/ModalAddItem';
import { useDispatch } from 'react-redux';
import { COLORS } from '../../colors/colors';
import { useInput } from '../../hooks/useInput';
import { addNewServiceAction } from '../../store/sagas/sagaActions/addNewService';
import { AddSectionType } from './type';
import { chaptersName } from '../../enum/chapters';
import { getCoordinates } from '../../utils/getCoordinates';
import { addNewMapMarkAction } from '../../store/sagas/sagaActions/addNewMapMark';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export const AddSection: FC<AddSectionType> = ({ chapter }) => {
  const [isOpen, setIsOpen] = useState(false);

  const addedTitle = useInput('');
  const addedInfo = useInput('');
  const addedPhone = useInput('');
  const addedAddress = useInput('');

  const addButtonPress = () => {
    setIsOpen(true);
  };

  const dispatch = useDispatch();

  const payload = {
    id: addedTitle.value,
    title: addedTitle.value,
    info: addedInfo.value,
    address: addedAddress.value,
    phone: addedPhone.value,
  };

  const addItemPress = async () => {
    const location = await getCoordinates(addedAddress.value);

    if (location) {
      const newMark = {
        id: addedTitle.value,
        chapter: chapter,
        pinColor: chapter === chaptersName.CLINIC ? 'red' : 'purple',
        title: addedTitle.value,
        description: addedInfo.value,
        coordinate: { latitude: location.lat, longitude: location.lng },
      };
      dispatch(addNewMapMarkAction({ newMapMark: newMark }));
    }
    console.log('location', location);

    if (
      addedInfo.value.trim() === '' ||
      addedTitle.value.trim() === '' ||
      addedPhone.value.trim() === '' ||
      addedAddress.value.trim() === ''
    ) {
      Alert.alert('Please, add the all necessary information');
      addedTitle.resetValue();
      addedInfo.resetValue();
      addedPhone.resetValue();
      addedAddress.resetValue();
      return;
    }

    dispatch(addNewServiceAction({ chapter, newService: payload }));

    setIsOpen(false);
    addedTitle.resetValue();
    addedInfo.resetValue();
    addedPhone.resetValue();
    addedAddress.resetValue();
  };

  return (
    <>
      <MaterialCommunityIcon
        name={'note-plus-outline'}
        size={36}
        onPress={addButtonPress}
        color={COLORS.text.dark_blue}
      />
      <ModalAddItem
        addItemPress={addItemPress}
        chapter={chapter}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        addedTitle={addedTitle}
        addedInfo={addedInfo}
        addedAddress={addedAddress}
        addedPhone={addedPhone}
      />
    </>
  );
};
