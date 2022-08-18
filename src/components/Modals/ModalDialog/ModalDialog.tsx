import React, { FC } from 'react';
import { Modal, TouchableOpacity, View } from 'react-native';
import { styles } from '../../../screens/CalendarScreen/style';
import { changeDate } from '../../../utils/changeDate';
import Icon from 'react-native-vector-icons/Ionicons';
import { iconsName } from '../../../enum/iconsName';
import { TextItemThin } from '../../Text/TextItemThin/TextItemThin';
import { ModalDialogType } from './type';

export const ModalDialog: FC<ModalDialogType> = ({ isVisible, setIsVisible, pinnedDay, getData, setIsOpen }) => {
  return (
    <Modal visible={isVisible}>
      <View style={styles.modalContainer}>
        <TextItemThin>{changeDate(pinnedDay)}</TextItemThin>
        <TouchableOpacity
          style={styles.textContainer}
          onPress={() => {
            setIsOpen(true);
            setIsVisible(false);
          }}
        >
          <Icon name={iconsName.CREATE_OUTLINE} size={32} />
          <TextItemThin>create new note</TextItemThin>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.textContainer}
          onPress={() => {
            setIsVisible(false);
            getData();
          }}
        >
          <Icon name={iconsName.CLIPBOARD_OUTLINE} size={32} />
          <TextItemThin>show schedule on THIS day</TextItemThin>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};
