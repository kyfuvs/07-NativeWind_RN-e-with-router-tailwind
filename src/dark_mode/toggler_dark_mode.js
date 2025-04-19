// src/app/dark_mode/toggler_dark_mode.js
import { Pressable, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../contexts/ThemeContext';

export default function Toggler_dark_mode() {
  const { theme, toggleTheme } = useTheme();
  console.log("Toggler_dark_mode mounted");

  return (
    <View className="absolute top-4 right-4 z-50">

      <Pressable onPress={toggleTheme}>
        <Ionicons
          name={theme === 'dark' ? 'moon' : 'sunny'}
          size={30}
          color={theme === 'dark' ? 'white' : 'black'}
        />
      </Pressable>
    </View>
  );
}
