import React, { FC, useLayoutEffect } from 'react';
import { SafeAreaView, View } from 'react-native';
import { FriendUniteScreenProps } from './type';
import { HeaderTextItem } from '../../components/Text/HeaderTextItem/HeaderTextItem';
import { Gap } from '../../components/Gap/Gap';
import { COLORS } from '../../colors/colors';
import Icon from 'react-native-vector-icons/Ionicons';

export const FriendUniteScreen: FC<FriendUniteScreenProps> = props => {
  const { navigation } = props;
  const { id, name, isFollow } = props.route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: `${name}`,
    });
  }, []);

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
        <HeaderTextItem>{name}</HeaderTextItem>
        <Icon name={isFollow ? 'heart' : 'heart-outline'} />
      </View>
    </SafeAreaView>
  );
};
