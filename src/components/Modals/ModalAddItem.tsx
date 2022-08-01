import React from 'react';
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Modal,
  Platform,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { styles } from '../AddSection/style';
import { createImg } from '../../utils/createImg';
import { chaptersName } from '../../enum/chapters';
import Icon from 'react-native-vector-icons/Ionicons';
import { iconsName } from '../../enum/iconsName';
import { CustomTextInput } from '../TextInput/CustomTextInput';
import { AppButton } from '../Button/CustomSquareButton';
import { buttonsName } from '../../enum/buttonsName';
import { inputsPlaceholdersName } from '../../enum/inputPlaceholdersName';

export type ModalAddItemType = {
  isOpen: boolean;
  chapter: chaptersName;
  setIsOpen: (isOpen: boolean) => void;
  addedTitle: string;
  setTitle: (title: string) => void;
  addedInfo: string;
  setInfo: (info: string) => void;
  addItemPress: any;
};

export const ModalAddItem = ({
  isOpen,
  chapter,
  setIsOpen,
  addedTitle,
  setTitle,
  addedInfo,
  setInfo,
  addItemPress,
}: ModalAddItemType) => {
  return (
    <Modal visible={isOpen}>
      <View style={styles.modalCommonContainer}>
        <Text style={styles.chapterText}>{chapter}</Text>
        <View style={styles.modalContainer}>
          <Image source={{ uri: createImg(chaptersName.MASTER) }} style={styles.imageContainer} />
          <TouchableOpacity style={styles.closeIcon} onPress={() => setIsOpen(false)}>
            <Icon name={iconsName.CLOSE_OUTLINE} size={24} />
          </TouchableOpacity>
          <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View style={styles.modalInputBlock}>
                <CustomTextInput
                  placeholder={inputsPlaceholdersName.ADD_TITLE}
                  value={addedTitle}
                  setValue={setTitle}
                />
                <CustomTextInput placeholder={inputsPlaceholdersName.ADD_INFO} value={addedInfo} setValue={setInfo} />
              </View>
            </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
          <View style={styles.buttonsContainer}>
            <AppButton title={buttonsName.ADD} onPress={addItemPress} backgroundColor={'orange'} />
            <AppButton title={buttonsName.CANCEL} onPress={() => setIsOpen(false)} backgroundColor={'brown'} />
          </View>
        </View>
      </View>
    </Modal>
  );
};
