import { DeviceEventEmitter } from 'react-native';
export const SHOW_TOAST_MESSAGE = 'SHOW_TOAST_MESSAGE';

export type ToastOptionType = {
  message: string;
  useNativeToast?: boolean;
};

export enum MESSAGE_TYPE {
  INFO = 'info',
  SUCCESS = 'success',
  DANGER = 'danger',
}

export const toast = {
  info: (options: ToastOptionType) => {
    DeviceEventEmitter.emit(SHOW_TOAST_MESSAGE, { ...options, type: MESSAGE_TYPE.INFO });
  },
  success: (options: ToastOptionType) => {
    DeviceEventEmitter.emit(SHOW_TOAST_MESSAGE, { ...options, type: MESSAGE_TYPE.SUCCESS });
  },
  danger: (options: ToastOptionType) => {
    DeviceEventEmitter.emit(SHOW_TOAST_MESSAGE, { ...options, type: MESSAGE_TYPE.DANGER });
  },
};
