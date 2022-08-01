import React from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../../screens/CalendarScreen/style';
import { changeDate } from '../../utils/changeDate';
import Icon from 'react-native-vector-icons/Ionicons';
import { iconsName } from '../../enum/iconsName';

export type ModalDialogType = {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
  pinnedDay: string;
  setIsOpen: (isOpen: boolean) => void;
  getData: any;
};

export const ModalDialog = ({ isVisible, setIsVisible, pinnedDay, getData, setIsOpen }: ModalDialogType) => {
  return (
    <Modal visible={isVisible}>
      <View style={styles.modalContainer}>
        <Text
          style={{
            position: 'absolute',
            top: 150,
            right: 18,
            fontSize: 16,
            borderRadius: 10,
            borderColor: 'grey',
            borderWidth: 1,
            padding: 4,
          }}
        >
          {changeDate(pinnedDay)}
        </Text>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            width: 300,
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 20,
          }}
          onPress={() => {
            setIsOpen(true);
            setIsVisible(false);
          }}
        >
          <Icon name={iconsName.CREATE_OUTLINE} size={32} />
          <Text>create new note</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            width: 300,
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 20,
          }}
          onPress={() => {
            setIsVisible(false);
            getData();
          }}
        >
          <Icon name={iconsName.CLIPBOARD_OUTLINE} size={32} />
          <Text>show schedule on THIS day</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};
