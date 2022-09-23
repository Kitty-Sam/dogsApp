import React, { FC } from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import { ShelterTypeProps } from './type';
import { styles } from './style';

export const SelectShelter: FC<ShelterTypeProps> = props => {
  const { shelters, updateCurrentShelter } = props;

  return (
    <SelectDropdown
      data={shelters}
      onSelect={updateCurrentShelter}
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
