import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import AnnouncementRow from "./AnnouncementRow";
import { colors } from "../../theme";
import EmptyAnnouncements from "./EmptyAnnouncements";
import { Announcement } from "./types";

interface AnnouncementsFeedProps {
  announcements: Announcement[];
}
export function AnnouncementsFeed({ announcements }: AnnouncementsFeedProps) {
  const ListDivider = () => <View style={styles.divider} />;

  const handleRowPress = (id: string) => {
    console.log(`Reading announcement with ID: ${id}`);
  };

  return (
    <FlatList
      data={announcements}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <AnnouncementRow
          announcement={item}
          showSummary={false}
          onPress={handleRowPress}
        />
      )}
      ItemSeparatorComponent={ListDivider}
      ListEmptyComponent={EmptyAnnouncements}
      keyboardShouldPersistTaps="handled"
    />
  );
}

const styles = StyleSheet.create({
  divider: {
    height: 1,
    backgroundColor: colors.border,
  },
});
