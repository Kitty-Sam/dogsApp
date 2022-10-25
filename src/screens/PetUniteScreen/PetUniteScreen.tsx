import React, { FC, useLayoutEffect, useState } from 'react';
import { ActivityIndicator, Image, ScrollView, Text, View } from 'react-native';
import { PetUniteScreenProps } from './type';
import { TextItemThin } from '../../components/Text/TextItemThin/TextItemThin';
import { Gap } from '../../components/Gap/Gap';
import { RoundView } from '../../components/RoundView/RoundView';
import { LibraryImagesBlock } from '../../components/LibraryImagesBlock/LibraryImagesBlock';
import { FAB } from 'react-native-paper';
import { PetsNavigationName } from '../../enum/navigation';
import { styles } from './style';

export const PetUniteScreen: FC<PetUniteScreenProps> = props => {
  const { navigation } = props;
  const { nickName, description, breed, age, photo, chip_id, about } = props.route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: `${nickName}`,
    });
  }, []);

  const [loading, setLoading] = useState<boolean>(false);

  const onLoading = (value: boolean) => {
    setLoading(value);
  };

  return (
    <ScrollView style={styles.root} showsVerticalScrollIndicator={false}>
      <View style={styles.mainBlock}>
        {loading && <ActivityIndicator />}
        {
          <Image
            source={{ uri: photo }}
            style={styles.image}
            onLoadStart={() => onLoading(true)}
            onLoadEnd={() => onLoading(false)}
          />
        }
        <Gap size={1} />
        <TextItemThin style={{ color: '#9e9e9e' }}>{nickName}</TextItemThin>
        <Gap size={2} />
        <View style={styles.noteBlock}>
          <Text style={{ fontSize: 24 }}>{nickName}</Text>
          <View style={styles.roundViewContainer}>
            <RoundView note={age} size={'big'} />
            <RoundView note={'male'} size={'small'} />
            <RoundView note={breed} size={'big'} />
            <RoundView note={description} size={'big'} />
          </View>
          <Gap size={2} />
          <Text>{about ? about : 'Note'}</Text>
        </View>
        <Gap size={5} />
        <LibraryImagesBlock photo={photo} />
        <FAB
          icon="pencil"
          style={styles.fab}
          onPress={() =>
            navigation.navigate(PetsNavigationName.EDIT_PET, {
              photo,
              nickName,
              description,
              breed,
              age,
              chip_id,
              about,
            })
          }
        />
      </View>
    </ScrollView>
  );
};
