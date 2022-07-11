import React, {useRef, useState} from 'react';
import {AppButton} from '../Button/CustomSquareButton';
import {Modal, View} from 'react-native';
import {ModalInside} from '../Modal/ModalInside';
import {useDispatch} from 'react-redux';
import {styles} from './style';
import {Type} from './type';
import {chaptersName} from '../../enum/chapters';
import {buttonsName} from '../../enum/buttonsName';
import {addShopAC} from '../../store/actions/shopAC';
import {addClinicAC} from '../../store/actions/clinicAC';
import {addMasterAC} from '../../store/actions/masterAC';

export const AddSection = ({chapter}: Type) => {
  const [addTitle, setTitle] = useState('');
  const [addInfo, setInfo] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const shopAddedTitleRef = useRef<any>(null); //InputHandler
  shopAddedTitleRef.current = addTitle;

  const shopAddedAddressRef = useRef<any>(null);
  shopAddedAddressRef.current = addInfo;

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

  return (
    <>
      <AppButton title={buttonsName.PLUS} onPress={addButtonPress} />
      <Modal
        visible={isOpen}
        style={{
          justifyContent: 'space-around',
        }}>
        <View style={styles.modalContainer}>
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
            }}>
            <AppButton
              title={buttonsName.ADD}
              onPress={addItemPress}
              backgroundColor={'yellow'}
            />
            <AppButton
              title={buttonsName.CANCEL}
              onPress={() => setIsOpen(false)}
            />
          </View>
        </View>
      </Modal>
    </>
  );
};
