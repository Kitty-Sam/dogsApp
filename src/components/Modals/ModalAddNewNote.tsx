import React from 'react';
import { Modal, View } from 'react-native';
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
        <TextItemThin
        // style={{
        //   position: 'absolute',
        //   top: 150,
        //   right: 18,
        //   fontSize: 16,
        //   borderRadius: 10,
        //   borderColor: 'grey',
        //   borderWidth: 1,
        //   padding: 4,
        // }}
        >
          {changeDate(pinnedDay)}
        </TextItemThin>
        <TextItemThin>Create new note</TextItemThin>
        <CustomTextInput placeholder={inputsPlaceholdersName.ADD_TITLE} value={title} setValue={setTitle} />
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
