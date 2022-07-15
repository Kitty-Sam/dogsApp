import React, { useRef, useState } from 'react';
import { AppButton } from '../Button/CustomSquareButton';
import { Image, Modal, TouchableOpacity, View, Text, Alert } from 'react-native';
import { ModalInside } from '../Modal/ModalInside';
import { useDispatch } from 'react-redux';
import { styles } from './style';
import { chaptersName } from '../../enum/chapters';
import { buttonsName } from '../../enum/buttonsName';
import { addShopAC } from '../../store/actions/shopAC';
import { addClinicAC } from '../../store/actions/clinicAC';
import { addMasterAC } from '../../store/actions/masterAC';
import Icon from 'react-native-vector-icons/Ionicons';
import { iconsName } from '../../enum/iconsName';

export const AddSection = ({ chapter }: any) => {
  const [addTitle, setTitle] = useState('');
  const [addInfo, setInfo] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const addedTitleRef = useRef<any>(null); //InputHandler
  addedTitleRef.current = addTitle;

  const addedAddressRef = useRef<any>(null);
  addedAddressRef.current = addInfo;

  const dispatch = useDispatch();

  const addButtonPress = () => {
    setIsOpen(true);
  };

  const addItemPress = () => {
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
      dispatch(addShopAC(payload));
    }
    if (chapter === chaptersName.CLINIC) {
      dispatch(addClinicAC(payload));
    }
    if (chapter === chaptersName.MASTER) {
      dispatch(addMasterAC(payload));
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
        <Text
          style={{
            textAlign: 'left',
            marginHorizontal: 18,
            marginTop: 8,
            fontSize: 24,
            fontStyle: 'italic',
            fontWeight: 'bold',
            textTransform: 'capitalize',
          }}
        >
          {chapter}
        </Text>
        <View style={styles.modalContainer}>
          <Image source={{ uri: img }} style={{ width: 200, height: 100, borderRadius: 20 }} />
          <TouchableOpacity
            style={{ position: 'absolute', right: 16, top: 8, zIndex: 10 }}
            onPress={() => setIsOpen(false)}
          >
            <Icon name={iconsName.CLOSE_OUTLINE} size={24} />
          </TouchableOpacity>
          <ModalInside
            placeholderInfo={'add info'}
            placeholderTitle={'add title'}
            setInfo={setInfo}
            setTitle={setTitle}
            addInfo={addInfo}
            addTitle={addTitle}
          />
          <View
            style={{
              flexDirection: 'row',
              width: 200,
              justifyContent: 'space-around',
            }}
          >
            <AppButton title={buttonsName.ADD} onPress={addItemPress} backgroundColor={'orange'} />
            <AppButton title={buttonsName.CANCEL} onPress={() => setIsOpen(false)} backgroundColor={'brown'} />
          </View>
        </View>
      </Modal>
    </>
  );
};
