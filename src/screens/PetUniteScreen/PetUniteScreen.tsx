import React, { FC, useEffect, useState } from 'react';
import { ActivityIndicator, Image, Modal, SafeAreaView, TouchableOpacity, View } from 'react-native';
import { AdoptionNavigationName } from '../../enum/navigation';
import { AppButton } from '../../components/Button/AppButton';
import { COLORS } from '../../colors/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { buttonsName } from '../../enum/buttonsName';
import { iconsName } from '../../enum/iconsName';
import { styles } from './style';
import { TextItemThin } from '../../components/Text/TextItemThin/TextItemThin';
import { HeaderTextItem } from '../../components/Text/HeaderTextItem/HeaderTextItem';
import { getCurrentUserId } from '../../store/selectors/loginSelector';
import { useDispatch, useSelector } from 'react-redux';
import { database } from '../../utils/getDataBaseURL';
import { addFavoriteAC, FavoriteSaveIdType, removeFavoriteAC } from '../../store/actions/userAC';
import { fetchFavoritePetsIdsAction } from '../../store/sagas/sagaActions/fetchFavoritePetsIds';
import { getFavoritesIds } from '../../store/selectors/userSelector';
import { callOwnerAction } from '../../store/sagas/sagaActions/callOwner';
import { PetUniteScreenProps } from './type';
import { selectItem } from '../../utils/selectItem';
import { LoadImagePickerButton } from '../../components/LoadImagePickerButton/LoadImagePickerButton';
import { ScrollView } from 'native-base';

export const PetUniteScreen: FC<PetUniteScreenProps> = props => {
  const { navigation } = props;
  const { nickName, description, photo, age, male, id, ownerInfo } = props.route.params;

  const currentUserId = useSelector(getCurrentUserId);
  const favoritesIds = useSelector(getFavoritesIds);

  const favoritesIdsResult = favoritesIds.map((el: FavoriteSaveIdType) => Object.values(el)).flat();

  const [isFavorite, setFavorite] = useState(favoritesIdsResult.includes(id));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavoritePetsIdsAction());
  }, []);

  const callNumber = (phone: string) => {
    dispatch(callOwnerAction({ phone }));
  };

  const removeFromFavorites = async () => {
    await database.ref(`/users/${currentUserId}`).child('favorites').child(`${id}`).remove();
    dispatch(removeFavoriteAC({ id }));
  };

  const addFavorite = async () => {
    await database.ref(`/users/${currentUserId}`).child('favorites').child(`${id}`).set({
      id: id,
    });
    dispatch(addFavoriteAC({ id }));
  };

  useEffect(() => {
    if (!isFavorite) {
      removeFromFavorites();
    }
    if (isFavorite) {
      addFavorite();
    }
  }, [!isFavorite]);

  const [image, setImage] = useState<string>('');
  const [storeImages, setStoreImages] = useState<string[]>([]);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const openGallery = () => {
    setIsVisible(prev => true);
  };

  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.adoptionButtonContainer}>
        <AppButton
          onPress={() => navigation.navigate(AdoptionNavigationName.ADOPTION)}
          title={buttonsName.BACK}
          backgroundColor={COLORS.buttons.brown}
        />
      </View>
      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={openGallery}>
          <Image source={{ uri: image ? image : photo }} style={styles.image} />
        </TouchableOpacity>
        <LoadImagePickerButton
          setImage={setImage}
          setStoreImages={setStoreImages}
          currentUserId={currentUserId}
          screen={'Animals'}
        />
      </View>

      <Modal visible={isVisible}>
        <SafeAreaView style={{ justifyContent: 'center', alignItems: 'center' }}>
          {!storeImages ? (
            <ActivityIndicator />
          ) : (
            <ScrollView horizontal={true}>
              {storeImages.map(el => (
                <Image source={{ uri: el }} style={{ width: 200, height: 200, margin: 16 }} key={el + Date.now()} />
              ))}
            </ScrollView>
          )}
          <AppButton onPress={() => setIsVisible(false)} title={'Close'} />
        </SafeAreaView>
      </Modal>

      <View style={styles.informativeBlock}>
        <View style={styles.textContainer}>
          <HeaderTextItem>{nickName}</HeaderTextItem>
          <TextItemThin>{description}</TextItemThin>
        </View>
        <View>
          <TextItemThin>{age}</TextItemThin>
          <Icon name={selectItem(male)} size={26} color={COLORS.text.dark_blue} />
        </View>
      </View>

      <View style={styles.buttonWithIconContainer}>
        <View style={styles.buttonContainer}>
          <AppButton
            onPress={() => callNumber(ownerInfo)}
            title={buttonsName.ADOPT}
            backgroundColor={COLORS.buttons.peach}
          />
        </View>

        <Icon
          name={isFavorite ? iconsName.HEART : iconsName.HEART_OUTLINE}
          size={26}
          onPress={() => {
            setFavorite(!isFavorite);
          }}
          style={styles.favoriteIcon}
          color={COLORS.text.dark_blue}
        />
      </View>
    </SafeAreaView>
  );
};
