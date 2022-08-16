import React, { useEffect, useState } from 'react';
import { Alert, Image, Linking, Platform, SafeAreaView, View } from 'react-native';
import { StackScreenNavigationProps } from '../../navigation/navPropsType';
import { AdoptionNavigationName } from '../../enum/navigation';
import { AdoptionStackParamList } from '../AdoptionScreen/type';
import { AppButton } from '../../components/Button/AppButton';
import { COLORS } from '../../colors/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { buttonsName } from '../../enum/buttonsName';
import { iconsName } from '../../enum/iconsName';
import { styles } from './style';
import { TextItemThin } from '../../components/Text/TextItemThin/TextItemThin';
import { HeaderTextItem } from '../../components/Text/HeaderTextItem/HeaderTextItem';
import { getCurrentUserId, getCurrentUserPhone } from '../../store/selectors/loginSelector';
import { useDispatch, useSelector } from 'react-redux';
import { database } from '../../utils/getDataBaseURL';
import { FavoriteSaveIdType, addFavoriteAC, removeFavoriteAC } from '../../store/actions/userAC';
import { maleName } from '../../enum/maleName';
import { fetchFavoritePetsIdsAction } from '../../store/sagas/sagaActions/fetchFavoritePetsIds';
import { getFavoritesIds } from '../../store/selectors/userSelector';
import { callOwnerAction } from '../../store/sagas/sagaActions/callOwner';

export const PetUniteScreen = (
  props: StackScreenNavigationProps<AdoptionNavigationName.PET_UNITE, AdoptionStackParamList>,
) => {
  const { navigation } = props;

  const currentUserPhone = useSelector(getCurrentUserPhone);
  const currentUserId = useSelector(getCurrentUserId);
  const favoritesIds = useSelector(getFavoritesIds);
  console.log('favoritesIds', favoritesIds);

  const favoritesIdsResult = favoritesIds.map((el: FavoriteSaveIdType) => Object.values(el)).flat();

  const { nickName, description, photo, age, male, id } = props.route.params;
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

  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={{ position: 'absolute', left: 18, top: 18, zIndex: 10 }}>
        <AppButton
          onPress={() => navigation.navigate(AdoptionNavigationName.ADOPTION)}
          title={'Back'}
          backgroundColor={COLORS.buttons.brown}
        />
      </View>
      <View style={styles.imageContainer}>
        <Image source={{ uri: photo }} style={styles.image} />
      </View>

      <View style={styles.informativeBlock}>
        <View style={styles.textContainer}>
          <HeaderTextItem>{nickName}</HeaderTextItem>
          <TextItemThin>{description}</TextItemThin>
        </View>
        <View>
          <TextItemThin>{age}</TextItemThin>
          <Icon
            name={
              [male].includes(maleName.UNKNOWN)
                ? iconsName.UNKNOWN
                : [male].includes(maleName.BOY)
                ? iconsName.BOY
                : iconsName.GIRL
            }
            size={26}
            color={COLORS.text.dark_blue}
          />
        </View>
      </View>

      <View style={styles.buttonWithIconContainer}>
        <View style={styles.buttonContainer}>
          <AppButton
            onPress={() => callNumber(currentUserPhone)}
            title={buttonsName.ADOPT}
            backgroundColor={COLORS.buttons.peach}
          />
        </View>

        <Icon
          name={isFavorite ? iconsName.HEART : iconsName.HEART_OUTLINE}
          size={26}
          onPress={async () => {
            setFavorite(!isFavorite);
          }}
          style={{ margin: 10 }}
          color={COLORS.text.dark_blue}
        />
      </View>
    </SafeAreaView>
  );
};
