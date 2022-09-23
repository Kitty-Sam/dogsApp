import React, { useCallback, useEffect, useRef, useState } from 'react';
import { DeviceEventEmitter, Platform, Text, ToastAndroid, TouchableOpacity } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { COLORS } from '../../colors/colors';
import { MESSAGE_TYPE, SHOW_TOAST_MESSAGE } from '../../utils/toast';

const ToastColors = {
  info: COLORS.background.dark_brown,
  success: COLORS.buttons.peach,
  danger: COLORS.buttons.brown,
};

export type ToastDataType = {
  duration: number;
  message: string;
  type: MESSAGE_TYPE;
  useNativeToast: boolean;
};

export const Toast = () => {
  const [messageType, setMessageType] = useState<MESSAGE_TYPE>(MESSAGE_TYPE.INFO);
  const [message, setMessage] = useState<string | null>(null);
  const [timeOutDuration, setTimeOutDuration] = useState<number>(4000);

  const timeOutRef = useRef<number | null>(null);

  const animatedOpacity = useSharedValue<number>(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: animatedOpacity.value,
    };
  }, []);

  const onNewToast = (data: ToastDataType) => {
    if (Platform.OS === 'android' && data.useNativeToast) {
      return ToastAndroid.show(data.message, ToastAndroid.LONG);
    }
    if (data.duration) {
      setTimeOutDuration(data.duration);
    }
    setMessage(data.message);
    setMessageType(data.type);
  };

  const closeToast = useCallback(() => {
    setMessage(null);
    setTimeOutDuration(5000);
    animatedOpacity.value = withTiming(0);
    if (timeOutRef.current != null) {
      clearInterval(timeOutRef.current);
    }
  }, [animatedOpacity]);

  useEffect(() => {
    if (message) {
      // @ts-ignore
      timeOutRef.current = setInterval(() => {
        if (timeOutDuration === 0) {
          closeToast();
        } else {
          setTimeOutDuration(prev => prev - 1000);
        }
      }, 1000);
    }

    return () => {
      if (timeOutRef.current != null) {
        clearInterval(timeOutRef.current);
      }
    };
  }, [closeToast, message, timeOutDuration]);

  useEffect(() => {
    if (message) {
      animatedOpacity.value = withTiming(1, { duration: 1000 });
    }
  }, [message, animatedOpacity]);

  useEffect(() => {
    DeviceEventEmitter.addListener(SHOW_TOAST_MESSAGE, onNewToast);

    return () => {
      DeviceEventEmitter.removeAllListeners();
    };
  }, []);

  if (!message) {
    return null;
  }

  return (
    <Animated.View
      style={[
        {
          position: 'absolute',
          bottom: '4%',
          left: '4%',
          right: '4%',
          backgroundColor: ToastColors[messageType!],
          zIndex: 1,
          elevation: 1,
          borderRadius: 4,
        },
        animatedStyle,
      ]}
    >
      <TouchableOpacity onPress={closeToast}>
        <Text
          style={{
            padding: 14,
            color: 'white',
            fontSize: 16,
            textAlign: 'center',
          }}
        >
          {message}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};
