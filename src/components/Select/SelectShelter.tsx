import React, { FC } from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import { ShelterTypeProps } from './type';
import { styles } from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const SelectShelter: FC<ShelterTypeProps> = ({ shelters }) => {
  async function saveShelter(item: string) {
    await AsyncStorage.setItem('shelter', JSON.stringify(item));
  }
  return (
    <SelectDropdown
      data={shelters}
      onSelect={(selectedItem, index) => {
        saveShelter(selectedItem);
      }}
      buttonTextAfterSelection={(selectedItem, index) => {
        return selectedItem;
      }}
      rowTextForSelection={(item, index) => {
        return item;
      }}
      buttonStyle={styles.button}
      defaultButtonText={'Choose shelter'}
    />
  );
};
