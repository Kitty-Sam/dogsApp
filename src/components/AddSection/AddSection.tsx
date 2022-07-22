import React, { useRef, useState } from 'react';
import { AppButton } from '../Button/CustomSquareButton';
import { Alert, Image, Modal, Text, TouchableOpacity, View } from 'react-native';
import { ModalInput } from '../Modal/Modalnput';
import { useSelector } from 'react-redux';
import { styles } from './style';
import { chaptersName } from '../../enum/chapters';
import { buttonsName } from '../../enum/buttonsName';
import Icon from 'react-native-vector-icons/Ionicons';
import { iconsName } from '../../enum/iconsName';
import { database } from '../../utils/getDataBaseURL';
import { getCurrentUserId } from '../../store/selectors/loginSelector';

export const AddSection = ({ chapter }: any) => {
  const [addTitle, setTitle] = useState('');
  const [addInfo, setInfo] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const addedTitleRef = useRef<any>(null); //InputHandler
  addedTitleRef.current = addTitle;

  const addedAddressRef = useRef<any>(null);
  addedAddressRef.current = addInfo;

  const addButtonPress = () => {
    setIsOpen(true);
  };

  const currentUserId = useSelector(getCurrentUserId);

  const addItemPress = async () => {
    const payload = {
      id: addTitle,
      title: addTitle,
      info: addInfo,
    };
    if (addInfo.trim() === '' || addTitle.trim() === '') {
      Alert.alert('Please, add the all necessary information');
      setInfo('');
      setTitle('');
      return;
    }

    if (chapter === chaptersName.SHOP) {
      database
        .ref(`/users/${currentUserId}/shops`)
        .child(`${payload.title}`)
        .set({ ...payload, chapter: chaptersName.SHOP });
    }
    if (chapter === chaptersName.CLINIC) {
      database
        .ref(`/users/${currentUserId}/clinics`)
        .child(`${payload.title}`)
        .set({ ...payload, chapter: chaptersName.CLINIC });
    }
    if (chapter === chaptersName.MASTER) {
      database
        .ref(`/users/${currentUserId}/masters`)
        .child(`${payload.title}`)
        .set({ ...payload, chapter: chaptersName.MASTER });
    }
    setIsOpen(false);
    setInfo('');
    setTitle('');
  };

  const img = 'https://img.freepik.com/free-photo/adorable-white-dog-isolated-yellow_23-2148985980.jpg?w=2000';

  return (
    <>
      <Icon name={iconsName.ADD_CIRCLE_OUTLINE} size={36} onPress={addButtonPress} />
      <Modal visible={isOpen}>
        <View style={styles.modalCommonContainer}>
          <Text style={styles.chapterText}>{chapter}</Text>
          <View style={styles.modalContainer}>
            <Image source={{ uri: img }} style={styles.imageContainer} />
            <TouchableOpacity style={styles.closeIcon} onPress={() => setIsOpen(false)}>
              <Icon name={iconsName.CLOSE_OUTLINE} size={24} />
            </TouchableOpacity>
            <ModalInput
              placeholderInfo={'add info'}
              placeholderTitle={'add title'}
              setInfo={setInfo}
              setTitle={setTitle}
              addInfo={addInfo}
              addTitle={addTitle}
            />
            <View style={styles.buttonsContainer}>
              <AppButton title={buttonsName.ADD} onPress={addItemPress} backgroundColor={'orange'} />
              <AppButton title={buttonsName.CANCEL} onPress={() => setIsOpen(false)} backgroundColor={'brown'} />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};
