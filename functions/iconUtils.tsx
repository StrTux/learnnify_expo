// Icon rendering utility for Flaticon fonts

import React from 'react';
import { Text, TextStyle } from 'react-native';
import FlaticonIcons from '../assets/icons/icon/iconMap';

// Extract valid icon keys from the icon map
type FlaticonIconKey = keyof typeof FlaticonIcons;

// Options type
type RenderOptions = {
    size?: number;
    color?: string;
};

/**
 * Format icon name from full string to key
 * Example: 'fi-rr-waveform' => 'waveform'
 */
export const formatIconName = (iconString: string): string => {
    if (!iconString) return '';

    const parts = iconString.split('-');
    const remainingParts = parts.slice(2);

    return remainingParts.join('-');
};

/**
 * Render Flaticon font icon
 */
export const renderFlaticon = (
    icon: string,
    { size = 22, color = '#4B5563' }: RenderOptions = {}
): React.ReactElement | null => {

    if (!icon) return null;

    // Normalize icon key
    const iconKey = icon.includes('-')
        ? formatIconName(icon)
        : icon;

    // Runtime safety check (important)
    if (!(iconKey in FlaticonIcons)) {
        console.warn(`Icon "${iconKey}" not found in FlaticonIcons`);
        return null;
    }

    const glyph = FlaticonIcons[iconKey as FlaticonIconKey];

    return (
        <Text
            style={
                {
                    fontFamily: 'uicons-regular-rounded-J3WOUERV',
                    fontSize: size,
                    color: color,
                } as TextStyle
            }
        >
            {glyph}
        </Text>
    );
};

// Export icon map
export { FlaticonIcons };