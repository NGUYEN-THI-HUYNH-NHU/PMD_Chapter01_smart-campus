import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  SectionList,
} from "react-native";
import SearchField from "../../components/SearchField";
import AnnouncementRow from "./AnnouncementRow";
import { groupAnnouncements } from "./announcementData";
import { colors, radius, spacing, typography } from "../../theme";
import EmptyAnnouncements from "./EmptyAnnouncements";
import { Announcement } from "./types";

interface AnnouncementsScreenProps {
  announcements: Announcement[];
}

const AnnouncementsScreen = ({ announcements }: AnnouncementsScreenProps) => {
  const [query, setQuery] = useState<string>("");
  const { fontScale, width } = useWindowDimensions();

  const filtered = announcements.filter((item) =>
    `${item.title} ${item.summary} ${item.category}`
      .toLowerCase()
      .includes(query.trim().toLowerCase()),
  );

  const groupedSections = groupAnnouncements(filtered);

  const handleRowPress = (id: string) => {
    console.log(`Reading announcement with ID: ${id}`);
  };

  const ListDivider = () => <View style={styles.divider} />;

  return (
    <View style={styles.container}>
      <SectionList
        sections={groupedSections}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <AnnouncementRow announcement={item} onPress={handleRowPress} />
        )}
        ItemSeparatorComponent={ListDivider}
        ListEmptyComponent={
          <EmptyAnnouncements
            query={query}
            onDeleteQuery={() => setQuery("")}
          />
        }
        renderSectionHeader={({ section: { title } }) => (
          <View style={styles.sectionHeaderContainer}>
            <Text accessibilityRole="header" style={styles.sectionHeaderTitle}>
              {title}
            </Text>
          </View>
        )}
        ListHeaderComponent={
          <View style={styles.header}>
            <SearchField
              value={query}
              placeholder="Search for announcements, events,..."
              onChangeText={setQuery}
              onDeleteText={() => setQuery("")}
            />
          </View>
        }
        stickySectionHeadersEnabled={fontScale < 1.5}
        keyboardShouldPersistTaps="handled"
      />
    </View>
  );
};

export default AnnouncementsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.md,
    paddingVertical: 46,
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
  sectionHeaderContainer: {
    backgroundColor: "#E2E8F0",
    paddingVertical: spacing.xs + 2,
    paddingHorizontal: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  sectionHeaderTitle: {
    ...typography.label,
    color: colors.primaryDark,
    fontSize: 13,
    letterSpacing: 0.5,
  },
});
