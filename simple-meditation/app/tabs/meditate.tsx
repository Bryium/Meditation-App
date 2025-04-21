import { View, Text, ImageBackground } from "react-native";
import React from "react";

import MEDITATION_IMAGES from "@/constants/meditation-images";

const MeditateScreen = () => {
  return (
    <View className="flex-1">
      <ImageBackground
        source={MEDITATION_IMAGES[0]}
        resizeMode="cover"
        className="flex-1 justify-center items-center"
      >
        <Text className="text-white text-2xl font-bold">Test</Text>
      </ImageBackground>
      <Text className="text-center mt-4">meditate</Text>
    </View>
  );
};

export default MeditateScreen;
