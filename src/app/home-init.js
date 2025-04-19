import { View, Text, SafeAreaView } from 'react-native';

export default function Home() {
  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-black">
      <View className="flex-1 justify-center items-center">
        <Text className="text-2xl text-white text-center">Welcome to Expo Router & NativeWind</Text>
      </View>
    </SafeAreaView>
  );
}
