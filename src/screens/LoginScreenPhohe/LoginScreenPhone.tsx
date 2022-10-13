import React, { useEffect, useRef, useState } from 'react';
import { Alert, Button, View } from 'react-native';
import auth from '@react-native-firebase/auth';
import { SafeAreaView } from 'react-native-safe-area-context';
import TextInputMask from 'react-native-text-input-mask';
import OtpInputs from 'react-native-otp-inputs';
import { toggleIsLoggedAC } from '../../store/actions/loginAC';
import { useDispatch } from 'react-redux';
import { HeaderTextItem } from '../../components/Text/HeaderTextItem/HeaderTextItem';
import { Gap } from '../../components/Gap/Gap';

export const LoginScreenPhone = () => {
  const [confirm, setConfirm] = useState<any | null>(null);
  const [code, setCode] = useState<string>('');
  const [phone, setPhone] = useState<string>('');

  const myCodeRef = useRef<any | null>(null);

  useEffect(() => {
    myCodeRef.current = code;
  }, []);

  const dispatch = useDispatch();

  const signInWithPhoneNumber = async (phoneNumber: string) => {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    console.log('confirmation verificationId', confirmation.verificationId);
    console.log('confirmation', confirmation);
    setConfirm(confirmation);
  };

  const confirmCode = async () => {
    try {
      if (confirm) {
        await confirm.confirm(myCodeRef.current);
        Alert.alert('everything ok');
        dispatch(toggleIsLoggedAC({ isLogged: true }));
      }
    } catch (error) {
      Alert.alert('Invalid code.');
    }
  };

  if (!confirm) {
    return (
      <SafeAreaView style={{ margin: 24 }}>
        <HeaderTextItem>Enter your phone for sign in</HeaderTextItem>
        <Gap size={2} />
        <TextInputMask
          placeholder="enter your phone"
          mask={'+375 ([00]) [000] [00] [00]'}
          value={phone}
          onChangeText={formatted => setPhone(formatted)}
          style={{ borderWidth: 1, borderColor: 'black', height: 50, borderRadius: 10, padding: 10 }}
        />
        <Button title="Sign In" onPress={() => signInWithPhoneNumber(phone)} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ margin: 24, flex: 1 }}>
      <OtpInputs
        handleChange={setCode}
        numberOfInputs={6}
        autofillFromClipboard={false}
        inputContainerStyles={{
          borderRadius: 12,
          height: 48,
          width: 48,
          borderColor: 'grey',
          borderWidth: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />
      <View style={{ margin: 24 }}>
        <Button title="Confirm Code" onPress={confirmCode} />
      </View>
    </SafeAreaView>
  );
};
