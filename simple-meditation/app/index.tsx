import { View, Text, ImageBackground } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

import beachImage from "@/assets/meditation-images/beach.webp";

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={beachImage}
        resizeMode="cover"
        style={{ flex: 1 }}
      >
        <LinearGradient
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          colors={["rgba(0,0,0,0.6)", "rgba(0,0,0,0.8)"]}
        >
          <Text style={{ color: "white", fontSize: 30 }}>App</Text>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default App;
