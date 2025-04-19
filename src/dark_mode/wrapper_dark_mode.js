// src/app/dark_mode/wrapper_dark_mode.js
import { View } from 'react-native';
import { Slot } from 'expo-router';
import { useTheme } from '../contexts/ThemeContext';
import Toggler_dark_mode from './toggler_dark_mode';
import { StatusBar } from 'expo-status-bar';

export default function Wrapper_dark_mode() {
  const { theme } = useTheme();

  return (
    // <View className="relative flex-1 bg-white dark:bg-gray-900">
    //   <Toggler_dark_mode />
    //   <Slot />
    //   <StatusBar style="auto" />
    // </View>
    <View className={`${theme} flex-1`}>
        <Toggler_dark_mode />
        <Slot />
    </View>

  );
}
