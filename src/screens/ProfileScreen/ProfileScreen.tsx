import React, { FC, useEffect } from 'react';
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { ProfileScreenProps } from './type';
import { useDispatch, useSelector } from 'react-redux';
import { getPersonalPets } from '../../store/selectors/userSelector';
import { PetType } from '../../store/reducers/userReducer';
import { HeaderTextItem } from '../../components/Text/HeaderTextItem/HeaderTextItem';
import { COLORS } from '../../colors/colors';
import { Gap } from '../../components/Gap/Gap';
import { PetsNavigationName } from '../../enum/navigation';
import { fetchPersonalPetsAction } from '../../store/sagas/sagaActions/fetchPersonalPets';

export const ProfileScreen: FC<ProfileScreenProps> = props => {
  const { navigation } = props;
  const personalPets = useSelector(getPersonalPets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPersonalPetsAction());
  }, []);

  return (
    <SafeAreaView style={{ marginHorizontal: 24 }}>
      <HeaderTextItem style={{ textAlign: 'center' }}>My pets</HeaderTextItem>
      <Gap size={3} />
      <ScrollView style={{ marginHorizontal: 24 }}>
        {personalPets.map((pet: PetType) => (
          <View key={pet.chip_id} style={{ marginVertical: 12 }}>
            <View
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                borderWidth: 1,
                borderColor: COLORS.text.grey,
                position: 'absolute',
                left: 100,
                top: 0,
                zIndex: 10,
              }}
            />
            <TouchableOpacity
              style={{ borderWidth: 1, borderColor: COLORS.text.grey, borderRadius: 20, padding: 24, marginTop: 50 }}
              onPress={() =>
                navigation.navigate(PetsNavigationName.PET_UNITE, {
                  nickName: pet.nickName,
                  breed: pet.breed,
                  age: pet.age,
                  description: pet.description,
                  chip_id: pet.chip_id,
                })
              }
            >
              <Text>Name: {pet.nickName}</Text>
              <Gap size={2} />
              <Text>Age: {pet.age}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
