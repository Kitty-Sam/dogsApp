import React, { useState } from 'react';
import { ActivityIndicator, Alert, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { CardField, useConfirmPayment } from '@stripe/stripe-react-native';
import { COLORS } from '../../colors/colors';
import { AppButton } from '../../components/Button/AppButton';
import { buttonsName } from '../../enum/buttonsName';
import { API_URI } from '../../../config';
import { TextItemBold } from '../../components/Text/TextItemBold/TextItemBold';
import { getAppStatus } from '../../store/selectors/appSelector';
import { useDispatch, useSelector } from 'react-redux';
import { toggleAppStatus } from '../../store/actions/appAC';
import { requestStatus } from '../../store/reducers/appReducer';
import { styles } from './style';
import { SelectShelter } from '../../components/Select/SelectShelter';

export enum SUM {
  FIVE = 50,
  TEN = 100,
  FIFTEEN = 150,
  TWENTY = 200,
}

export const DonationScreen = () => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState(0);
  const { confirmPayment } = useConfirmPayment();

  const statusApp = useSelector(getAppStatus);
  const dispatch = useDispatch();

  const payPress = async () => {
    try {
      dispatch(toggleAppStatus(requestStatus.LOADING));
      const response = await fetch(`${API_URI}/create-payment-intent`, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ currency: 'usd', amount: amount }),
      });
      const { clientSecret } = await response.json();

      const { error, paymentIntent } = await confirmPayment(clientSecret, {
        paymentMethodType: 'Card',
        paymentMethodData: { billingDetails: { name } },
      });

      if (error) {
        Alert.alert(error.message);
        dispatch(toggleAppStatus(requestStatus.FAILED));
      } else if (paymentIntent) {
        Alert.alert('Success', `Payment successful: ${paymentIntent.id}`);
        dispatch(toggleAppStatus(requestStatus.SUCCEEDED));
      }
    } catch (ERROR) {
      console.log('ERROR FROM DONATION', ERROR);
    }
  };

  return (
    <ScrollView style={styles.root}>
      {statusApp === requestStatus.LOADING ? (
        <ActivityIndicator />
      ) : (
        <>
          <TextItemBold>Choose the correct sum (in $) </TextItemBold>
          <View style={styles.sumItemContainer}>
            <TouchableOpacity onPress={() => setAmount(SUM.FIVE)}>
              <Text
                style={[
                  styles.sumItem,
                  {
                    borderColor: amount === SUM.FIVE ? COLORS.buttons.brown : COLORS.text.grey,
                  },
                ]}
              >
                {SUM.FIVE}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setAmount(SUM.TEN)}>
              <Text
                style={[
                  styles.sumItem,
                  {
                    borderColor: amount === SUM.TEN ? COLORS.buttons.brown : COLORS.text.grey,
                  },
                ]}
              >
                {SUM.TEN}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setAmount(SUM.FIFTEEN)}>
              <Text
                style={[
                  styles.sumItem,
                  {
                    borderColor: amount === SUM.FIFTEEN ? COLORS.buttons.brown : COLORS.text.grey,
                  },
                ]}
              >
                {SUM.FIFTEEN}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setAmount(SUM.TWENTY)}>
              <Text
                style={[
                  styles.sumItem,
                  {
                    borderColor: amount === SUM.TWENTY ? COLORS.buttons.brown : COLORS.text.grey,
                  },
                ]}
              >
                {SUM.TWENTY}
              </Text>
            </TouchableOpacity>
          </View>

          <SelectShelter />

          <TextInput
            autoCapitalize="none"
            placeholder={'ENTER YOUR NAME'}
            keyboardType="name-phone-pad"
            onChangeText={() => setName(name)}
            style={styles.input}
          />
          <CardField
            onCardChange={cardDetails => console.log(cardDetails)}
            postalCodeEnabled={false}
            cardStyle={{
              borderColor: COLORS.text.dark_blue,
              borderWidth: 1,
              borderRadius: 8,
            }}
            style={styles.cardField}
          />
          <View style={styles.buttonsContainer}>
            <AppButton onPress={() => payPress()} title={buttonsName.PAY} />
            <AppButton
              onPress={() => {
                setAmount(0);
                setName('');
              }}
              title={buttonsName.CLEAR}
              backgroundColor={COLORS.buttons.brown}
            />
          </View>
        </>
      )}
    </ScrollView>
  );
};
