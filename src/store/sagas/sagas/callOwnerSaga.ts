import { Alert, Linking, Platform } from 'react-native';
import { CallOwnerActionType } from '../sagaActions/callOwner';

export function* callOwnerWorker({ payload }: CallOwnerActionType) {
  const { phone } = payload;
  try {
    const url = Platform.OS !== 'android' ? `telprompt:${phone}` : `tel:${phone}`;

    const isSupported: boolean = yield Linking.canOpenURL(url);
    if (!isSupported) {
      Alert.alert(`Phone number ${phone} is not available`);
    } else {
      return Linking.openURL(url);
    }
  } catch (error: any) {
    console.warn(error);
  }
}
