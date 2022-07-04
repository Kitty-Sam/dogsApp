import React from 'react';
import {Text, View} from 'react-native';

export type ShopType = {
  title: string;
  address: string;
};

export const ShopContainer = ({title, address}: ShopType) => {
  return (
    <View
      style={{
        borderColor: 'black',
        borderWidth: 2,
        marginHorizontal: 16,
        marginVertical: 4,
        padding: 4,
        borderRadius: 10,
      }}>
      <Text>{title}</Text>
      <Text>{address}</Text>
    </View>
  );
};
