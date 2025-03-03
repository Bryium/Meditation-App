import { View, Text } from "react-native";
import React from "react";
import AppGradient from "@/components/AppGradient";
import { StatusBar } from "expo-status-bar";

const NatureMeditate = () => {
  return (
    <View className="flex-1">
      <AppGradient colors={["#161b2e", "#766e67"]}>
        <View className="mb-6">
          <Text className="text-gray-200 mb-3 font-bold text-4xl text-left">
            Welcome Bryium
          </Text>
          <Text className="text-indigo-100 text-xl font-medium ">
            Start your meditation today{" "}
          </Text>
        </View>
      </AppGradient>
      <StatusBar style="light" />
    </View>
  );
};

export default NatureMeditate;
