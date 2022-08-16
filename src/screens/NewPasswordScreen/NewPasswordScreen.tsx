import React from 'react';
import { TextItemThin } from '../../components/Text/TextItemThin/TextItemThin';
import { SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { useInput } from '../../hooks/useInput';
import { COLORS } from '../../colors/colors';
import { inputsPlaceholdersName } from '../../enum/inputPlaceholdersName';
import { styles } from './style';
import { AuthNavigationName } from '../../enum/navigation';
import { NewPasswordScreenProps } from './type';

export const NewPasswordScreen = (props: NewPasswordScreenProps) => {
  const { navigation } = props;
  const code = useInput('');
  const newPassword = useInput('');
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TextInput
        value={code.value}
        onChangeText={code.onChangeText}
        placeholderTextColor={COLORS.text.dark_blue}
        placeholder={inputsPlaceholdersName.CODE}
        style={styles.input}
      />
      <TextInput
        value={newPassword.value}
        onChangeText={newPassword.onChangeText}
        placeholderTextColor={COLORS.text.dark_blue}
        placeholder={inputsPlaceholdersName.PASSWORD}
        style={styles.input}
      />
      <TouchableOpacity onPress={() => navigation.navigate(AuthNavigationName.LOGIN)}>
        <TextItemThin>Try sign in</TextItemThin>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
