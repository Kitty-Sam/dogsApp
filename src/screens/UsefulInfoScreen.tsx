import React, {useRef} from 'react';
import {Alert, Button, FlatList, SafeAreaView, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {MainNavigationName} from '../enum/enum';
import {CustomButton} from '../components/Button/CustomButton';
import {styles} from '../components/Button/CustomButtonStyle';
import {
  ShopContainer,
  ShopType,
} from '../components/ShopContainer/ShopContainer';
import {
  CustomTextInput,
  InputHandler,
} from '../components/TextInput/CustomTextInput';
import {shops} from '../addedInfo/shops';

export const UsefulInfoScreen = () => {
  const navigation = useNavigation();
  const shopAddedTitleRef = useRef<InputHandler>(null);
  const shopAddedAddressRef = useRef<InputHandler>(null);

  const errorPress = () => {
    navigation.navigate(MainNavigationName.ERROR);
  };

  const renderItem = ({item}: {item: ShopType}) => {
    const {title, address} = item;
    return <ShopContainer title={title} address={address} />;
  };

  return (
    <SafeAreaView style={{flex: 1, alignSelf: 'stretch'}}>
      <Text>Shops</Text>
      <FlatList data={shops} renderItem={renderItem} />
      <CustomTextInput
        placeholder={'shop title'}
        ref={shopAddedTitleRef}
        onSubmit={() => shopAddedTitleRef.current?.onFocus()}
      />
      <CustomTextInput
        placeholder={'shop address'}
        ref={shopAddedAddressRef}
        onSubmit={() => shopAddedAddressRef.current?.onFocus()}
      />
      <Button
        title={'add'}
        onPress={() => {
          Alert.alert(
            `${shopAddedTitleRef.current?.getValue()} and ${shopAddedAddressRef.current?.getValue()}  `,
          );
        }}
      />
      <CustomButton title={'Error'} onPress={errorPress} styles={styles} />
    </SafeAreaView>
  );
};
