import React from 'react';
import { Linking, Text } from 'react-native';

export const SelectShelter = () => {
  return (
    <Text style={{ color: 'blue' }} onPress={() => Linking.openURL('http://google.com')}>
      Google
    </Text>
  );
};
