import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

interface CustomButtonsProps {
  onPress: () => void;
  title: string;
  textStyles?: object;
  containerStyles?: object;
}

const CustomButtons = ({
  onPress,
  title,
  textStyles = "",
  containerStyles = "",
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className={
        "bg-white rounded-xl min-h-[62px] justify-center items-center ${containerStyles}"
      }
      onPress={onPress}
    >
      <Text className={"font-semibold text-lg"}>CustomButtons</Text>
    </TouchableOpacity>
  );
};

export default CustomButtons;
