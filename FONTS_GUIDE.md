# Font & Icon Setup Guide

## 📦 Fonts Included

### Poppins Font Family
- **Poppins-Light** - Weight 300
- **Poppins-Regular** - Weight 400
- **Poppins-Medium** - Weight 500
- **Poppins-SemiBold** - Weight 600
- **Poppins-Bold** - Weight 700

### Icon Font
- **UIcons** - Flaticon Uicons Regular Rounded

## 🎨 Usage Examples

### 1. Using Typography Utilities
```tsx
import { Text } from 'react-native';
import { typography, fonts } from 'utils/typography';

export const MyComponent = () => {
  return (
    <>
      <Text style={typography.displayLarge}>Large Title</Text>
      <Text style={typography.headingMedium}>Heading</Text>
      <Text style={typography.bodyLarge}>Body text</Text>
      <Text style={typography.labelSmall}>Label</Text>
    </>
  );
};
```

### 2. Using Direct Font Family
```tsx
import { Text } from 'react-native';
import { fonts } from 'utils/typography';

export const BoldText = () => {
  return (
    <Text style={{ fontFamily: fonts.bold, fontSize: 18 }}>
      Bold Poppins Text
    </Text>
  );
};
```

### 3. Using Icon Component
```tsx
import { Icon } from 'components/UI/Icon';
import { View } from 'react-native';

export const IconExample = () => {
  return (
    <View>
      <Icon name="home" size={24} color="#000" />
      <Icon name="search" size={20} color="#3b82f6" />
      <Icon name="user" size={18} color="#ef4444" />
    </View>
  );
};
```

## 📋 Available Icon Names

### Navigation
- `arrow-left`, `arrow-right`
- `home`, `menu`, `close`
- `search`, `back`

### Common
- `check`, `delete`, `edit`
- `info`, `warning`, `error`

### Auth
- `user`, `lock`, `unlock`
- `key`, `eye`, `eye-off`

### Social
- `facebook`, `google`, `github`
- `mail`, `phone`

## 🔧 Custom Icon Names

To add more icons, edit [Icon.tsx](../components/UI/Icon.tsx) and update the `iconMap`:

```tsx
const iconMap: Record<string, string> = {
  'my-icon': '\uE999', // Your unicode value
  // ... more icons
};
```

## 📝 Font Files Location
All font files are stored in: `assets/fonts/`

- Poppins-Light.ttf
- Poppins-Regular.ttf
- Poppins-Medium.ttf
- Poppins-SemiBold.ttf
- Poppins-Bold.ttf
- uicons-regular-rounded-J3WOUERV.ttf

## ✅ Font Loading
Fonts are automatically loaded in `App.tsx` using `expo-font`.
The splash screen will remain visible until fonts are loaded.
