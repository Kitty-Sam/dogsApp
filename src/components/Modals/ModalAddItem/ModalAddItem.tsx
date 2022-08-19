import React, { FC } from 'react';
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
import { styles } from '../../AddSection/style';
import Icon from 'react-native-vector-icons/Ionicons';
import { iconsName } from '../../../enum/iconsName';
import { AppButton } from '../../Button/AppButton';
import { buttonsName } from '../../../enum/buttonsName';
import { inputsPlaceholdersName } from '../../../enum/inputPlaceholdersName';
import { COLORS } from '../../../colors/colors';
import { HeaderTextItem } from '../../Text/HeaderTextItem/HeaderTextItem';
import { ModalAddItemType } from './type';

export const ModalAddItem: FC<ModalAddItemType> = ({
  isOpen,
  chapter,
  setIsOpen,
  addItemPress,
  addedTitle,
  addedInfo,
}) => {
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
                  multiline={true}
                  numberOfLines={2}
                  {...addedTitle}
                  style={styles.input}
                  editable
                />
                <TextInput
                  placeholderTextColor={COLORS.text.grey}
                  placeholder={inputsPlaceholdersName.ADD_INFO}
                  multiline={true}
                  editable
                  {...addedInfo}
                  style={[styles.input, { height: 100 }]}
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
