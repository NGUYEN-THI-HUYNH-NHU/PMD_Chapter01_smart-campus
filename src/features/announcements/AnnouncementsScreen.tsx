import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import SearchField from "../../components/SearchField";
import AnnouncementRow from "./AnnouncementRow";
import { announcements } from "./announcementData";
import { colors, radius, spacing, typography } from "../../theme";
import EmptyAnnouncements from "./EmptyAnnouncements";

export function AnnouncementsScreen() {
  const [query, setQuery] = useState<string>("");

  const filtered = announcements.filter((item) =>
    `${item.title} ${item.summary} ${item.category}`
      .toLowerCase()
      .includes(query.trim().toLowerCase()),
  );

  const handleRowPress = (id: string) => {
    console.log(`Reading announcement with ID: ${id}`);
  };

  const ListDivider = () => <View style={styles.divider} />;

  return (
    <FlatList
      data={filtered}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <AnnouncementRow announcement={item} onPress={handleRowPress} />
      )}
      ItemSeparatorComponent={ListDivider}
      ListEmptyComponent={EmptyAnnouncements}
      ListHeaderComponent={
        <View style={styles.header}>
          <Text accessibilityRole="header" style={styles.headerTitle}>
            Campus Announcements
          </Text>
          <SearchField
            value={query}
            placeholder="Search for announcements, events,..."
            onChangeText={setQuery}
            onDeleteText={() => setQuery("")}
          />
        </View>
      }
      keyboardShouldPersistTaps="handled"
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    padding: spacing.md,
    backgroundColor: colors.surface,
    borderBottomWidth: 1,
    borderColor: colors.border,
    gap: spacing.sm,
  },
  headerTitle: {
    ...typography.title,
    color: colors.primaryDark,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.background,
    borderRadius: radius.sm,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: spacing.sm,
  },
  divider: {
    height: 1,
    backgroundColor: colors.border,
  },
});
