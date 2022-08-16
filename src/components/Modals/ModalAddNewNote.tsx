import React from 'react';
import { Modal, TextInput, View } from 'react-native';
import { styles } from '../../screens/CalendarScreen/style';
import { AppButton } from '../Button/AppButton';
import { CustomTextInput } from '../TextInput/CustomTextInput';
import { inputsPlaceholdersName } from '../../enum/inputPlaceholdersName';
import { buttonsName } from '../../enum/buttonsName';
import { changeDate } from '../../utils/changeDate';
import { COLORS } from '../../colors/colors';
import { TextItemThin } from '../Text/TextItemThin/TextItemThin';

export type ModalAddNewNoteType = {
  isOpen: boolean;
  setTitle: (title: string) => void;
  setIsOpen: (isOpen: boolean) => void;
  title: string;
  pinnedDay: string;
  savePress: () => void;
};

export const ModalAddNewNote = ({ isOpen, pinnedDay, title, setTitle, savePress, setIsOpen }: ModalAddNewNoteType) => {
  return (
    <Modal visible={isOpen}>
      <View style={styles.modalContainer}>
        <TextItemThin>{changeDate(pinnedDay)}</TextItemThin>
        <TextItemThin>Create new note</TextItemThin>
        <TextInput
          placeholder={inputsPlaceholdersName.ADD_TITLE}
          value={title}
          onChangeText={text => setTitle(text)}
          style={styles.input}
        />
        <View style={styles.buttonsContainer}>
          <AppButton title={buttonsName.SAVE} onPress={savePress} backgroundColor={COLORS.buttons.peach} />
          <AppButton
            onPress={() => {
              setIsOpen(false);
            }}
            title={buttonsName.CANCEL}
            backgroundColor={COLORS.buttons.brown}
          />
        </View>
      </View>
    </Modal>
  );
};
