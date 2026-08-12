import { Link } from "expo-router";
import { styled } from "nativewind";
import { Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeAreaView);
export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 p-5 bg-background">
      <Text className="text-3xl font-sans-bold text-success">Home</Text>
      <Text className="mt-3 font-sans text-base text-foreground">
        This is your main tab.
      </Text>

      <View className="mt-8 gap-4">
        <Link
          href="/(tabs)/insights"
          className="p-4 rounded bg-primary text-white font-sans-medium"
        >
          Go to Insights
        </Link>
        <Link
          href="/(tabs)/subscriptions"
          className="p-4 rounded bg-primary text-white font-sans-medium"
        >
          Go to Subscriptions
        </Link>
        <Link
          href="/(tabs)/settings"
          className="p-4 rounded bg-primary text-white font-sans-medium"
        >
          Go to Settings
        </Link>
      </View>
    </SafeAreaView>
  );
}
