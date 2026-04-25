import React from 'react';
import { Text, TextProps } from 'react-native';

interface IconProps extends TextProps {
  name: string;
  size?: number;
  color?: string;
}

/**
 * Icon Component using UIcons Font
 * @param name - Icon name from iconMap
 * @param size - Font size (default: 24)
 * @param color - Icon color (default: black)
 */
export const Icon = ({ 
  name, 
  size = 24, 
  color = '#000000',
  style,
  ...props 
}: IconProps) => {
  // Get icon unicode from name - using common icon names
  const iconMap: Record<string, string> = {
    // Navigation
    'arrow-left': '\uE000',
    'arrow-right': '\uE001',
    'home': '\uE002',
    'menu': '\uE003',
    'close': '\uE004',
    'search': '\uE005',
    'back': '\uE006',
    
    // Common
    'check': '\uE100',
    'delete': '\uE101',
    'edit': '\uE102',
    'info': '\uE103',
    'warning': '\uE104',
    'error': '\uE105',
    
    // Auth
    'user': '\uE200',
    'lock': '\uE201',
    'unlock': '\uE202',
    'key': '\uE203',
    'eye': '\uE204',
    'eye-off': '\uE205',
    
    // Social
    'facebook': '\uE300',
    'google': '\uE301',
    'github': '\uE302',
    'mail': '\uE303',
    'phone': '\uE304',
  };

  const iconUnicode = iconMap[name] || '\uE000';

  return (
    <Text
      style={[
        {
          fontFamily: 'UIcons',
          fontSize: size,
          color: color,
        },
        style,
      ]}
      {...props}
    >
      {iconUnicode}
    </Text>
  );
};

export default Icon;
