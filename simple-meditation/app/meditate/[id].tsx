import { View, Text, ImageBackground, Pressable } from "react-native";

import MEDITATION_IMAGES from "@/constants/meditation-images";
import AppGradient from "@/components/AppGradient";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router, useLocalSearchParams } from "expo-router";
import CustomButtons from "@/components/CustomButtons";
import { useEffect, useState } from "react";

const MeditateScreen = () => {
  const { id } = useLocalSearchParams();

  const imageIndex = (Number(id) - 1) % MEDITATION_IMAGES.length;

  const [secondsRemaining, setSecondsRemaining] = useState(10);
  const [isMeditating, setMeditating] = useState(false);

  useEffect(() => {
    let timerID: NodeJS.Timeout;

    if (secondsRemaining === 0) {
      setMeditating(false);
      return;
    }

    if (isMeditating) {
      timerID = setTimeout(() => {
        setSecondsRemaining((prev) => prev - 1);
      }, 1000);
    }

    return () => {
      clearTimeout(timerID);
    };
  }, [secondsRemaining, isMeditating]);

  return (
    <View className="flex-1">
      <ImageBackground
        source={MEDITATION_IMAGES[imageIndex]}
        resizeMode="cover"
        className="flex-1"
      >
        <AppGradient colors={["transparent", "rgba(0,0,0,0.8)"]}>
          <Pressable
            onPress={() => router.back()}
            className="absolute top-16 left-6 z-10"
          >
            <AntDesign name="leftcircleo" size={50} color="white" />
          </Pressable>
          <View className="flex-1 justify-center">
            <View className="mx-auto bg-neutral-200 rounded-full w-44 h-44 justify-center items-center ">
              <Text className="text-4xl text-blue-800">
                00:{secondsRemaining}
              </Text>
            </View>
          </View>
          <View className="mb-5">
            <CustomButtons
              title="start Meditation"
              onPress={() => setMeditating(true)}
            />
          </View>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default MeditateScreen;
