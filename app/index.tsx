import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind yes!
      </Text>
      <Link
        href="/onboarding"
        className="p-4 mt-4 rounded bg-primary text-white"
      >
        Go to Onboarding
      </Link>
      <Link
        href="/(auth)/signin"
        className="p-4 mt-4 rounded bg-primary text-white"
      >
        Go to Sign in
      </Link>
      <Link
        href="/(auth)/signup"
        className="p-4 mt-4 rounded bg-primary text-white"
      >
        Go to Sign up
      </Link>
      <Link
        href="/(tabs)/subscriptions/spotify"
        className="p-4 mt-4 rounded bg-primary text-white"
      >
        Spotify Subscription
      </Link>
      <Link
        href={{
          pathname: "/subscriptions/[id]",
          params: { id: "claude" },
        }}
        className="p-4 mt-4 rounded bg-primary text-white"
      >
        Claude Max Subscription
      </Link>
    </View>
  );
}
