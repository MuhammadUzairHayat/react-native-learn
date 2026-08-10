import { Link, useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const SubscriptionsDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <View>
      <Text>subscriptionsDetails: {id}</Text>
      <Link href="/" className="p-4 mt-4 rounded bg-primary text-white">
        Go Back
      </Link>
    </View>
  );
};

export default SubscriptionsDetails;
