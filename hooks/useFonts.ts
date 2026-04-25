import { useFonts as useExpoFonts } from 'expo-font';

export const useFonts = async () => {
  return useExpoFonts({
    // Poppins Fonts
    'Poppins-Light': require('../assets/fonts/Poppins-Light.ttf'),
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
    'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    
    // Icon Font
    'UIcons': require('../assets/fonts/uicons-regular-rounded-J3WOUERV.ttf'),
  });
};
