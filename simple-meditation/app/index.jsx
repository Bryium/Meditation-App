import { Image, Stylesheet, Platform, Text, View } from "react-native";
import React from "react";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
    </View>
  );
}

const styles = Stylesheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});
