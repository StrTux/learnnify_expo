import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  KeyboardAvoidingView,
  Platform,
  Image,
  StatusBar,
  useColorScheme,
  StatusBarStyle,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { LoginForm, SignupForm } from "./UI/form";
import type { Screen } from "./types";
import { Accordion } from "./UI/index";

interface AuthScreenProps {
  onNavigate: (screen: Screen) => void;
  params?: {
    mode?: "login" | "signup";
  };
}

const AuthScreen = ({ onNavigate, params = {} }: AuthScreenProps) => {
  const colorScheme = useColorScheme();

  const [activeTab, setActiveTab] = useState<"login" | "signup">(
    params.mode === "signup" ? "signup" : "login"
  );

  const [tabWidth, setTabWidth] = useState(0);

  const slideAnim = useRef(
    new Animated.Value(activeTab === "signup" ? 1 : 0)
  ).current;

  const switchTab = (tab: "login" | "signup") => {
    setActiveTab(tab);

    Animated.spring(slideAnim, {
      toValue: tab === "login" ? 0 : 1,
      useNativeDriver: true,
    }).start();
  };

  const translateX = slideAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, tabWidth],
  });

const gradientColors =
  colorScheme === "dark"
    ? ["#020617", "#1e293b"] as const
    : ["#ffffff", "#dbeafe"] as const;

  return (
    <KeyboardAvoidingView
      className="flex-1"
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
<LinearGradient
  colors={["transparent", "rgba(43, 44, 45, 0.287)"]}
  start={{ x: 0, y: 0 }}
  end={{ x: 0, y: 1 }}
  className="absolute bottom-0 left-0 right-0 h-80"
/>

      <StatusBar
        barStyle={colorScheme === "dark" ? "light-content" : "dark-content"}
      />

      {/* MAIN CONTAINER */}
      <View className="flex-1 justify-center px-5">

        {/* LOGO */}
        <View className="absolute top-16 left-0 right-0 items-center z-10">
          <Image
            source={require("../assets/logowhitebg.png")}
            className="w-60 h-60"
            resizeMode="contain"
          />
        </View>

        {/* 🔲 AUTH CARD */}
        <View className="bg-white dark:bg-gray-800 rounded-3xl p-5 shadow-lg">

          {/* TABS */}
          <View
            onLayout={(e) => {
              const totalWidth = e.nativeEvent.layout.width;
              const usableWidth = totalWidth - 12;
              setTabWidth(usableWidth / 2);
            }}
            className="h-14 flex-row rounded-xl bg-gray-100 dark:bg-gray-700 p-1 relative overflow-hidden mb-6"
          >
            {/* INDICATOR */}
            <Animated.View
              style={{
                width: tabWidth,
                transform: [{ translateX }],
              }}
              className="absolute top-1 bottom-1 left-1 bg-white dark:bg-gray-900 rounded-lg"
            />

            {["login", "signup"].map((tab) => (
              <TouchableOpacity
                key={tab}
                onPress={() => switchTab(tab)}
                className="flex-1 items-center justify-center z-10"
              >
                <Text
                  className={`font-semibold ${
                    activeTab === tab
                      ? "text-gray-900 dark:text-white"
                      : "text-gray-500"
                  }`}
                >
                  {tab === "login" ? "Sign In" : "Sign Up"}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* FORM */}
          <View className="w-full">
            {activeTab === "login" ? <LoginForm /> : <SignupForm />}
          </View>
        </View>

        {/* BOTTOM */}
        <View className="items-center mt-8">
          <TouchableOpacity onPress={() => onNavigate("Home")}>
            <Text className="text-sm font-semibold text-blue-500">
              Skip for demo →
            </Text>
          </TouchableOpacity>

          <Text className="text-xs text-gray-400 text-center mt-2 px-6">
            By continuing, you agree to Terms & Privacy
          </Text>
        </View>
     </View>
    </KeyboardAvoidingView>
  );
};

export default AuthScreen;