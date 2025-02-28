import { View, Text, ImageBackground } from "react-native";
import React from "react";

import beachImage from "@/assets/meditation-images/beach.webp";

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={beachImage}
        resizeMode="cover"
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Text style={{ fontSize: 24, color: "white", fontWeight: "bold" }}>
          App
        </Text>
      </ImageBackground>
    </View>
  );
};

export default App;
