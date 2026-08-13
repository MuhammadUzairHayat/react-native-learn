import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-sans text-success">
        Welcome to Nativewind yes!
      </Text>
      <Link href="/onboarding" className="mt-4 rounded bg-primary p-4">
        <Text className="font-sans-medium text-white">Go to Onboarding</Text>
      </Link>
      <Link href="/(auth)/signin" className="mt-4 rounded bg-primary p-4">
        <Text className="font-sans-medium text-white">Go to Sign in</Text>
      </Link>
      <Link href="/(auth)/signup" className="mt-4 rounded bg-primary p-4">
        <Text className="font-sans-medium text-white">Go to Sign up</Text>
      </Link>
      <Link
        href="/(tabs)/subscriptions/spotify"
        className="mt-4 rounded bg-primary p-4"
      >
        <Text className="font-sans-medium text-white">
          Spotify Subscription
        </Text>
      </Link>
      <Link
        href={{
          pathname: "/subscriptions/[id]",
          params: { id: "claude" },
        }}
        className="mt-4 rounded bg-primary p-4"
      >
        <Text className="font-sans-medium text-white">
          Claude Max Subscription
        </Text>
      </Link>
    </View>
  );
}
