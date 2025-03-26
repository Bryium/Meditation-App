import { View, Text } from "react-native";
import React from "react";
import AppGradient from "@/components/AppGradient";

const Affirmations = () => {
  return (
    <View className="flex-1">
      <AppGradient colors={["#2e1f58", "#54426b", "#a790af"]}>
        <Text>Affirmations</Text>
      </AppGradient>
    </View>
  );
};

export default Affirmations;
