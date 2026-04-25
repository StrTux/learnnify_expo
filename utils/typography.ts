import { StyleSheet } from 'react-native';

// Poppins Font Families
export const fonts = {
  light: 'Poppins-Light',
  regular: 'Poppins-Regular',
  medium: 'Poppins-Medium',
  semibold: 'Poppins-SemiBold',
  bold: 'Poppins-Bold',
};

// Typography Styles
export const typography = StyleSheet.create({
  // Display
  displayLarge: {
    fontFamily: fonts.bold,
    fontSize: 32,
    lineHeight: 40,
  },
  displayMedium: {
    fontFamily: fonts.bold,
    fontSize: 28,
    lineHeight: 36,
  },
  displaySmall: {
    fontFamily: fonts.bold,
    fontSize: 24,
    lineHeight: 32,
  },

  // Heading
  headingLarge: {
    fontFamily: fonts.semibold,
    fontSize: 22,
    lineHeight: 28,
  },
  headingMedium: {
    fontFamily: fonts.semibold,
    fontSize: 20,
    lineHeight: 26,
  },
  headingSmall: {
    fontFamily: fonts.semibold,
    fontSize: 18,
    lineHeight: 24,
  },

  // Body
  bodyLarge: {
    fontFamily: fonts.regular,
    fontSize: 16,
    lineHeight: 24,
  },
  bodyMedium: {
    fontFamily: fonts.regular,
    fontSize: 14,
    lineHeight: 20,
  },
  bodySmall: {
    fontFamily: fonts.regular,
    fontSize: 12,
    lineHeight: 18,
  },

  // Label
  labelLarge: {
    fontFamily: fonts.medium,
    fontSize: 14,
    lineHeight: 20,
  },
  labelMedium: {
    fontFamily: fonts.medium,
    fontSize: 12,
    lineHeight: 16,
  },
  labelSmall: {
    fontFamily: fonts.medium,
    fontSize: 11,
    lineHeight: 16,
  },

  // Caption
  captionLarge: {
    fontFamily: fonts.regular,
    fontSize: 12,
    lineHeight: 16,
  },
  captionSmall: {
    fontFamily: fonts.light,
    fontSize: 10,
    lineHeight: 14,
  },
});
