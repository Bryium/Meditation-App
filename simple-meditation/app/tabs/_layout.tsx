import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import Colors from "@/constants/Colors";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveBackgroundColor: Colors.primary,
      }}
    >
      <Tabs.Screen
        name="nature-meditate"
        options={{ tabBarLabel: "Meditate" }}
      />
    </Tabs>
  );
};

export default TabsLayout;
