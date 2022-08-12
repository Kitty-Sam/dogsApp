import React, { useState } from 'react';
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
import { animalsName } from '../../enum/animalsName';
import { toggleFavoriteAC } from '../../store/actions/userAC';

const catDefaultImg =
  'https://images.unsplash.com/photo-1611915387288-fd8d2f5f928b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80';
const dogDefaultImg =
  'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=0.672xw:1.00xh;0.166xw,0&resize=640:*';

export const PetUniteScreen = (
  props: StackScreenNavigationProps<AdoptionNavigationName.PET_UNITE, AdoptionStackParamList>,
) => {
  const { navigation } = props;

  const currentUserPhone = useSelector(getCurrentUserPhone);
  const currentUserId = useSelector(getCurrentUserId);

  const { nickName, description, photo, age, male, animal, id } = props.route.params;
  const [isFavorite, setFavorite] = useState(false);

  const dispatch = useDispatch();

  const callNumber = (phone: string) => {
    const url = Platform.OS !== 'android' ? `telprompt:${phone}` : `tel:${phone}`;

    Linking.canOpenURL(url)
      .then(supported => {
        if (!supported) {
          Alert.alert(`Phone number ${phone} is not available`);
        } else {
          return Linking.openURL(url);
        }
      })
      .catch(err => Alert.alert(err));
  };

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
              [male].includes('Unknown') ? iconsName.UNKNOWN : [male].includes('Boy') ? iconsName.BOY : iconsName.GIRL
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
            await database
              .ref(`/users/${currentUserId}/favorites`)
              .child(`${id}`)
              .set({
                male: male,
                animal: animal,
                age: age,
                description: description,
                nickName: nickName,
                id: id,
                photo: animal === animalsName.CAT ? catDefaultImg : dogDefaultImg,
              });

            dispatch(
              toggleFavoriteAC({
                male: male,
                animal: animal,
                age: age,
                description: description,
                nickName: nickName,
                id: id,
                photo: animal === animalsName.CAT ? catDefaultImg : dogDefaultImg,
              }),
            );
          }}
          style={{ margin: 10 }}
          color={COLORS.text.dark_blue}
        />
      </View>
    </SafeAreaView>
  );
};
