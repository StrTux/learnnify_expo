import React from 'react';
import { Text, TextStyle } from 'react-native';
import FlaticonIcons from './iconMap';

// Font family (must match your loaded font exactly)
const ICON_FONT_FAMILY = 'uicons-regular-rounded-J3WOUERV';

// Extract valid keys from icon map
type FlaticonIconKey = keyof typeof FlaticonIcons;

// Props type (clean and scalable)
type RenderIconProps = {
  name: string;
  size?: number;
  color?: string;
  style?: TextStyle;
};

/**
 * Render a Flaticon icon
 */
const renderIcon = ({
  name,
  size = 24,
  color = '#000',
  style = {},
}: RenderIconProps): React.ReactElement | null => {

  if (!name) return null;

  // Runtime safety check
  if (!(name in FlaticonIcons)) {
    console.warn(`Icon "${name}" not found in iconMap`);
    return null;
  }

  const iconCode = FlaticonIcons[name as FlaticonIconKey];

  return (
    <Text
      style={[
        {
          fontFamily: ICON_FONT_FAMILY,
          fontSize: size,
          color: color,
        },
        style,
      ]}
    >
      {iconCode}
    </Text>
  );
};

export default renderIcon;