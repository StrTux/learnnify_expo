import { View, Text } from "react-native";
import type { Screen } from "./types";

interface HomeScreenProps {
  navigate: (to: Screen) => void;
}

export default function HomeScreen({ navigate }: HomeScreenProps) {
  return (
    <View className="flex-1 justify-center items-center bg-white dark:bg-gray-900">
      <Text className="text-xl font-bold text-gray-900 dark:text-white">
        Welcome to Learnify!
      </Text>
    </View>
  );
}

