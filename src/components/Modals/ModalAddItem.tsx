import React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Modal,
  Platform,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { styles } from '../AddSection/style';
import { chaptersName } from '../../enum/chapters';
import Icon from 'react-native-vector-icons/Ionicons';
import { iconsName } from '../../enum/iconsName';
import { AppButton } from '../Button/AppButton';
import { buttonsName } from '../../enum/buttonsName';
import { inputsPlaceholdersName } from '../../enum/inputPlaceholdersName';
import { COLORS } from '../../colors/colors';
import { HeaderTextItem } from '../Text/HeaderTextItem/HeaderTextItem';
import { UseInputResponseType } from '../../hooks/useInput';

export type ModalAddItemType = {
  isOpen: boolean;
  chapter: chaptersName;
  setIsOpen: (isOpen: boolean) => void;
  addedTitle: UseInputResponseType;
  addedInfo: UseInputResponseType;
  addItemPress: () => void;
};

export const ModalAddItem = ({ isOpen, chapter, setIsOpen, addItemPress, addedTitle, addedInfo }: ModalAddItemType) => {
  return (
    <Modal visible={isOpen}>
      <View style={styles.modalCommonContainer}>
        <HeaderTextItem>{chapter}</HeaderTextItem>
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.closeIcon} onPress={() => setIsOpen(false)}>
            <Icon name={iconsName.CLOSE_OUTLINE} size={24} color={COLORS.text.dark_blue} />
          </TouchableOpacity>
          <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View style={styles.modalInputBlock}>
                <TextInput
                  placeholderTextColor={COLORS.text.grey}
                  placeholder={inputsPlaceholdersName.ADD_TITLE}
                  {...addedTitle}
                  style={styles.input}
                />
                <TextInput
                  placeholderTextColor={COLORS.text.grey}
                  placeholder={inputsPlaceholdersName.ADD_INFO}
                  {...addedInfo}
                  style={styles.input}
                />
              </View>
            </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
          <View style={styles.buttonsContainer}>
            <AppButton title={buttonsName.ADD} onPress={addItemPress} backgroundColor={COLORS.buttons.peach} />
            <AppButton
              title={buttonsName.CANCEL}
              onPress={() => setIsOpen(false)}
              backgroundColor={COLORS.buttons.brown}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};
