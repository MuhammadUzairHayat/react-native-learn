import { formatCurrency } from "@/lib/utils";
import React from "react";
import { Image, Text, View } from "react-native";

const UpcomingSubscriptionCard = ({
  data: { name, price, daysLeft, icon },
}: {
  data: UpcomingSubscription;
}) => {
  return (
    <View className="upcoming-card">
      <View className="upcoming-row">
        <View className="upcoming-icon-wrapper">
          <Image source={icon} className="upcoming-icon" />
        </View>
        <View>
          <Text className="upcoming-price"> {formatCurrency(price)}</Text>
          <Text className="upcoming-meta" numberOfLines={1}>
            {daysLeft > 1 ? `${daysLeft} days left` : `last day`}
          </Text>
        </View>
      </View>
      <Text className="upcoming-name" numberOfLines={1}>
        {name}
      </Text>
    </View>
  );
};

export default UpcomingSubscriptionCard;
