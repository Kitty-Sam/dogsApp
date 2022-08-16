import React, { useState } from 'react';
import { Alert } from 'react-native';
import { ModalAddItem } from '../Modals/ModalAddItem';
import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import { iconsName } from '../../enum/iconsName';
import { COLORS } from '../../colors/colors';
import { useInput } from '../../hooks/useInput';
import { addNewServiceAction } from '../../store/sagas/sagaActions/addNewService';

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

    dispatch(addNewServiceAction({ chapter, newService: payload }));

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
