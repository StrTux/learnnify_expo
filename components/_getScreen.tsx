import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import type { Screen } from "./types";

interface GetStartedScreenProps {
  navigate: (to: Screen) => void;
}

export default function GetStartedScreen({ navigate }: GetStartedScreenProps) {
  return (
    <ImageBackground
      source={require("../assets/getscreen.png")}
      className="flex-1"
      resizeMode="cover"
    >
      {/* Overlay */}
      <View className="flex-1 bg-black/35 justify-end px-6 pb-10">

        {/* Button */}
        <TouchableOpacity
          className="bg-black/90 py-4 rounded-xl items-center"
          onPress={() => navigate("Auth")}
        >
          <Text className="text-white text-base font-medium">
            Get Started
          </Text>
        </TouchableOpacity>

      </View>
    </ImageBackground>
  );
}
