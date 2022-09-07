import React, { useEffect, useState } from 'react';
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
import { shelters } from '../../consts/consts';
import { SUM } from '../../enum/sum';
import { inputsPlaceholdersName } from '../../enum/inputPlaceholdersName';
import { Gap } from '../../components/Gap/Gap';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FAB } from 'react-native-paper';
import { iconsName } from '../../enum/iconsName';

const sum = [SUM.FIVE, SUM.TEN, SUM.FIFTEEN, SUM.TWENTY];

export const DonationScreen = () => {
  const [name, setName] = useState('');
  const [shelter, setShelter] = useState('');
  const [amount, setAmount] = useState(0);

  const { confirmPayment } = useConfirmPayment();

  const statusApp = useSelector(getAppStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    async function addShelter() {
      const shelterJSON = await AsyncStorage.getItem('shelter');
      if (shelterJSON) {
        const shelter = JSON.parse(shelterJSON);
        setShelter(shelter);
      }
    }
    addShelter();
  }, [shelter]);

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
        Alert.alert(`Thanks for your payment for ${shelter}`);
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
          <Gap size={1} />
          <View style={styles.sumItemContainer}>
            {sum.map(element => (
              <TouchableOpacity onPress={() => setAmount(element)} key={element}>
                <Text
                  style={[
                    styles.sumItem,
                    {
                      borderColor: amount === element ? COLORS.buttons.brown : COLORS.text.grey,
                    },
                  ]}
                >
                  {element}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <Gap size={3} />
          <TextItemBold>Choose the shelters</TextItemBold>
          <Gap size={1} />
          <SelectShelter shelters={shelters} />
          <Gap size={3} />

          <TextItemBold>Enter your name</TextItemBold>
          <Gap size={1} />
          <TextInput
            autoCapitalize="none"
            placeholder={inputsPlaceholdersName.NICK_NAME}
            keyboardType="name-phone-pad"
            onChangeText={() => setName(name)}
            style={styles.input}
          />
          <Gap size={3} />
          <TextItemBold>Enter your credit card</TextItemBold>
          <Gap size={1} />
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
          <Gap size={2} />
          <View style={styles.buttonsContainer}>
            <AppButton onPress={() => payPress()} title={buttonsName.PAY} disabled={shelter === '' || amount === 0} />
            <AppButton
              onPress={() => {
                setAmount(0);
                setName('');
              }}
              title={buttonsName.CLEAR}
              backgroundColor={COLORS.buttons.brown}
            />
          </View>
          <FAB icon={iconsName.PAW} style={styles.fab} onPress={() => Alert.alert('thanks for you help')} />
        </>
      )}
    </ScrollView>
  );
};
