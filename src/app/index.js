import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Home from './home'

export default function index() {
  return (
    <View className="flex flex-1">
      <Home/>
    </View>
  );
}

