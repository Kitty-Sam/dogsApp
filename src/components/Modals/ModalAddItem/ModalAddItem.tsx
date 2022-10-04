import React, { FC } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Modal,
  Platform,
  SafeAreaView,
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
import TextInputMask from 'react-native-text-input-mask';
import { CustomTextInput } from '../../TextInput/CustomTextInput';

export const ModalAddItem: FC<ModalAddItemType> = ({
  isOpen,
  chapter,
  setIsOpen,
  addItemPress,
  addedTitle,
  addedInfo,
  addedPhone,
  addedAddress,
}) => {
  return (
    <Modal visible={isOpen}>
      <SafeAreaView style={styles.modalCommonContainer}>
        <HeaderTextItem>{chapter}</HeaderTextItem>
        <>
          <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View style={styles.modalInputBlock}>
                <CustomTextInput placeholder={inputsPlaceholdersName.ADD_TITLE} {...addedTitle} />
                <CustomTextInput placeholder={inputsPlaceholdersName.ADD_ADDRESS} {...addedAddress} />
                <TextInputMask
                  onChangeText={(formatted, extracted) => {
                    addedPhone.onChangeText(formatted);
                  }}
                  value={addedPhone.value}
                  mask={'+375 ([00]) [000] [00] [00]'}
                  style={styles.input}
                  placeholder={inputsPlaceholdersName.PET_OWNER_INFO}
                />
                <CustomTextInput placeholder={inputsPlaceholdersName.ADD_INFO} {...addedInfo} />
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
        </>
      </SafeAreaView>
    </Modal>
  );
};
