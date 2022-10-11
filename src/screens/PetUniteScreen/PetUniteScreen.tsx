import React, { FC, useLayoutEffect } from 'react';
import { SafeAreaView, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { PetUniteScreenProps } from './type';
import { TextItemThin } from '../../components/Text/TextItemThin/TextItemThin';
import { HeaderTextItem } from '../../components/Text/HeaderTextItem/HeaderTextItem';
import { Gap } from '../../components/Gap/Gap';
import { COLORS } from '../../colors/colors';

export const PetUniteScreen: FC<PetUniteScreenProps> = props => {
  const { navigation } = props;
  const { nickName, description, chip_id, breed, age } = props.route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: `${nickName}`,
    });
  }, []);

  const { width, height } = useWindowDimensions();

  return (
    <SafeAreaView style={{ margin: 24 }}>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <View
          style={{
            width: 150,
            height: 150,
            borderRadius: 75,
            borderColor: COLORS.text.grey,
            borderWidth: 1,
          }}
        />
        <Gap size={1} />
        <HeaderTextItem>{nickName}</HeaderTextItem>
      </View>
      <View>
        <Gap size={1} />
        <TextItemThin>Breed: {breed}</TextItemThin>
        <Gap size={1} />
        <TextItemThin>Date of birth: {age}</TextItemThin>
        <Gap size={1} />
        <TextItemThin>Color: {description}</TextItemThin>
        <Gap size={1} />
        <TextItemThin>Chip id: {chip_id}</TextItemThin>
      </View>
      <Gap size={3} />
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity
          style={{
            borderColor: COLORS.text.grey,
            borderWidth: 1,
            borderRadius: 20,
            width: 300,
            height: 200,
            padding: 12,
          }}
        >
          <TextItemThin> Note </TextItemThin>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
