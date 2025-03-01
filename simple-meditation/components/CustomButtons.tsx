import { View, Text } from "react-native";
import React from "react";

interface CustomButtonsProps {
  onPress: () => void;
  title: string;
  textStyles?: object;
  containerStyles?: object;
}

const CustomButtons = () => {
  return (
    <View>
      <Text>CustomButtons</Text>
    </View>
  );
};

export default CustomButtons;
