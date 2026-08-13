import { View, Text } from "react-native";
import React from "react";

interface EmptyAnnouncementsProps {
  query: string;
}

const EmptyAnnouncements = ({ query }: EmptyAnnouncementsProps) => {
  return (
    <View>
      <Text>{query}</Text>
    </View>
  );
};

export default EmptyAnnouncements;
