import React, {useRef, useState} from 'react';
import {Alert, Button, FlatList, SafeAreaView, Text, View} from 'react-native';
import {
  ShopContainer,
  ShopType,
} from '../components/ShopContainer/ShopContainer';
import {CustomTextInput} from '../components/TextInput/CustomTextInput';
import {shops} from '../addedInfo/shops';

export const UsefulInfoScreen = () => {
  const [shopTitle, setTitle] = useState('');
  const [shopAddress, setAddress] = useState('');

  const shopAddedTitleRef = useRef<any>(null); //InputHandler
  shopAddedTitleRef.current = shopTitle;

  const shopAddedAddressRef = useRef<any>(null);
  shopAddedAddressRef.current = shopAddress;

  /*  const errorPress = () => {
    navigation.navigate(MainNavigationName.ERROR);
  };*/

  const renderItem = ({item}: {item: ShopType}) => {
    const {title, address} = item;
    return <ShopContainer title={title} address={address} />;
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text>Shops</Text>
      <FlatList data={shops} renderItem={renderItem} />
      <View
        style={{
          width: 300,
          height: 200,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <CustomTextInput
          placeholder={'shop title'}
          value={shopTitle}
          setValue={setTitle}
        />
        <CustomTextInput
          placeholder={'shop address'}
          value={shopAddress}
          setValue={setAddress}
        />
        <View style={{width: 100}}>
          <Button
            title={'add'}
            onPress={() => {
              Alert.alert(`add  ${shopTitle} and ${shopAddress}`);
              setTitle('');
              setAddress('');
            }}
          />
        </View>
      </View>
      {/*<CustomButton title={'Error'} onPress={errorPress} styles={styles} />*/}
    </SafeAreaView>
  );
};
