import { StatusBar } from 'expo-status-bar';
import './global.css'
import { useState, useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { BackHandler } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import GetStartedScreen from 'components/_getScreen';
import AuthScreen from 'components/_auth';
import HomeScreen from 'components/_home';
import type { Screen } from 'components/types';


// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [screen, setScreen] = useState<Screen>('GetStarted');
  const [screenHistory, setScreenHistory] = useState<Screen[]>(['GetStarted']);

  // Load fonts
  const [fontsLoaded, fontError] = useFonts({
    'Poppins-Light': require('./assets/fonts/Poppins-Light.ttf'),
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
    'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'UIcons': require('./assets/fonts/uicons-regular-rounded-J3WOUERV.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  const navigate = (to: Screen) => {
    setScreen(to);
    setScreenHistory([...screenHistory, to]);
  };

  const goBack = () => {
    if (screenHistory.length > 1) {
      const newHistory = screenHistory.slice(0, -1);
      setScreenHistory(newHistory);
      setScreen(newHistory[newHistory.length - 1]);
      return true; // Prevent default back behavior
    }
    return false; // Allow default back behavior (exit app)
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', goBack);
    return () => backHandler.remove();
  }, [screenHistory]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaProvider>
      {screen === 'GetStarted' && <GetStartedScreen navigate={navigate} />}
      {screen === 'Auth' && <AuthScreen onNavigate={navigate} />}
      {screen === 'Home' && <HomeScreen navigate={navigate} />}
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
