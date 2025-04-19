import { Ionicons } from '@expo/vector-icons';
// import { ThemeProvider, useTheme } from '../contexts/ThemeContext';
import { ThemeProvider, useTheme } from '../contexts/ThemeContext';
import { View, Text, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Slot } from 'expo-router';
import Wrapper_dark_mode from '../dark_mode/wrapper_dark_mode'


export default function RootLayout() {
  return (
    <ThemeProvider>
      <Wrapper_dark_mode />
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
