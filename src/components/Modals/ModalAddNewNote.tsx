import React from 'react';
import { Modal, Text, View } from 'react-native';
import { styles } from '../../screens/CalendarScreen/style';
import { AppButton } from '../Button/CustomSquareButton';
import { CustomTextInput } from '../TextInput/CustomTextInput';
import { inputsPlaceholdersName } from '../../enum/inputPlaceholdersName';
import { buttonsName } from '../../enum/buttonsName';
import { changeDate } from '../../utils/changeDate';

export type ModalAddNewNoteType = {
  isOpen: boolean;
  setTitle: (title: string) => void;
  setIsOpen: (isOpen: boolean) => void;
  title: string;
  pinnedDay: string;
  savePress: any;
};

export const ModalAddNewNote = ({ isOpen, pinnedDay, title, setTitle, savePress, setIsOpen }: ModalAddNewNoteType) => {
  return (
    <Modal visible={isOpen}>
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
        <Text>Create new note</Text>
        <CustomTextInput placeholder={inputsPlaceholdersName.ADD_TITLE} value={title} setValue={setTitle} />
        <View style={styles.buttonsContainer}>
          <AppButton title={buttonsName.SAVE} onPress={savePress} backgroundColor={'orange'} />
          <AppButton
            onPress={() => {
              setIsOpen(false);
            }}
            title={buttonsName.CANCEL}
            backgroundColor={'brown'}
          />
        </View>
      </View>
    </Modal>
  );
};
