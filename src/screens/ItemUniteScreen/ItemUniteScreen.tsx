import React from 'react';
import { ItemContainer } from '../../components/ItemContainer/ItemContainer';
import { useWindowDimensions, View } from 'react-native';

export const ItemUniteScreen = (props: any) => {
  const { title, id, chapter, address, info, phone } = props.route.params;

  const { width, height } = useWindowDimensions();
  return (
    <View style={{ width: width, height: height }}>
      <ItemContainer id={id} title={title} info={info} chapter={chapter} address={address} phone={phone} />
    </View>
  );
};
