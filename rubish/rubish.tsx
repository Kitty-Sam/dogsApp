import React, { useState } from 'react';

const Rubish = () => {
  return <div></div>;
};

export default Rubish;

// const [isEnabled, setIsEnabled] = useState(false);
// const toggleSwitch = () => setIsEnabled(previousState => !previousState);
// import { Button, Platform, Switch } from "react-native";
// import { COLORS } from "../src/colors/colors";
// import { toast } from "../src/utils/toast";
// import React from "react";
//
// <Switch
//   trackColor={{ false: COLORS.text.grey, true: COLORS.text.dark_blue }}
//   thumbColor={isEnabled ? COLORS.buttons.brown : COLORS.buttons.peach}
//   onValueChange={toggleSwitch}
//   value={isEnabled}
// />
// {Platform.OS === 'android' && (
//   <Button
//     title="USE NATIVE TOAST"
//     onPress={() => {
//       toast.info({ message: 'Am native lol', useNativeToast: true });
//     }}
//   />
// )}
//
// <Button
//   title="SHOW ERROR"
//   onPress={() => {
//     toast.danger({ message: 'An error occurred' });
//   }}
// />
// <Button
//   title="SHOW SUCCESS"
//   onPress={() => {
//     toast.success({ message: 'success' });
//   }}
// />
// <Button
//   title="SHOW info"
//   onPress={() => {
//     toast.info({ message: 'Button press' });
//   }}
// />

//     <View>
//       {storeImages.length !== 0
//         ? storeImages.map(el => (
//             <Image source={{ uri: el }} style={{ width: 100, height: 100 }} key={el + Date.now()} />
//           ))
//         : null}
//     </View>
