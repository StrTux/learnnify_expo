import React from 'react';
import { View, Text } from 'react-native';
import { typography } from 'utils/typography';
import { Icon } from './UI/Icon';

/**
 * Example Component showcasing fonts and icons
 */
export const FontsIconsExample = () => {
  return (
    <View className="flex-1 bg-white dark:bg-gray-900 p-6">
      {/* Display Sizes */}
      <View className="mb-8">
        <Text style={typography.displayLarge} className="text-gray-900 dark:text-white">
          Display Large
        </Text>
        <Text style={typography.displayMedium} className="text-gray-900 dark:text-white">
          Display Medium
        </Text>
        <Text style={typography.displaySmall} className="text-gray-900 dark:text-white">
          Display Small
        </Text>
      </View>

      {/* Headings */}
      <View className="mb-8">
        <Text style={typography.headingLarge} className="text-gray-900 dark:text-white mb-2">
          Heading Large
        </Text>
        <Text style={typography.headingMedium} className="text-gray-700 dark:text-gray-300 mb-2">
          Heading Medium
        </Text>
        <Text style={typography.headingSmall} className="text-gray-600 dark:text-gray-400">
          Heading Small
        </Text>
      </View>

      {/* Body Text */}
      <View className="mb-8">
        <Text style={typography.bodyLarge} className="text-gray-800 dark:text-gray-200 mb-2">
          This is body large text. Used for main content.
        </Text>
        <Text style={typography.bodyMedium} className="text-gray-700 dark:text-gray-300 mb-2">
          This is body medium text. Good for descriptions.
        </Text>
        <Text style={typography.bodySmall} className="text-gray-600 dark:text-gray-400">
          This is body small text. For supplementary information.
        </Text>
      </View>

      {/* Labels */}
      <View className="mb-8">
        <Text style={typography.labelLarge} className="text-gray-800 dark:text-gray-200 mb-2">
          Label Large
        </Text>
        <Text style={typography.labelMedium} className="text-gray-700 dark:text-gray-300">
          Label Medium
        </Text>
      </View>

      {/* Icons */}
      <View className="mb-8">
        <Text style={typography.labelLarge} className="text-gray-900 dark:text-white mb-4">
          Icons
        </Text>
        <View className="flex-row gap-4 flex-wrap">
          <View className="items-center">
            <Icon name="home" size={32} color="#3b82f6" />
            <Text style={typography.captionSmall} className="text-gray-600 dark:text-gray-400 mt-2">
              Home
            </Text>
          </View>
          <View className="items-center">
            <Icon name="search" size={32} color="#8b5cf6" />
            <Text style={typography.captionSmall} className="text-gray-600 dark:text-gray-400 mt-2">
              Search
            </Text>
          </View>
          <View className="items-center">
            <Icon name="user" size={32} color="#ec4899" />
            <Text style={typography.captionSmall} className="text-gray-600 dark:text-gray-400 mt-2">
              User
            </Text>
          </View>
          <View className="items-center">
            <Icon name="check" size={32} color="#10b981" />
            <Text style={typography.captionSmall} className="text-gray-600 dark:text-gray-400 mt-2">
              Check
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default FontsIconsExample;
