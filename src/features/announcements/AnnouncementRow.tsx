import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { Announcement } from "./types";
import { colors, radius, spacing, typography } from "../../theme";

interface AnnouncementRowProps {
  announcement: Announcement;
  showSummary?: boolean;
  onPress: (id: string) => void;
}

const AnnouncementRow = ({
  announcement,
  showSummary = true,
  onPress,
}: AnnouncementRowProps) => {
  return (
    <Pressable
      onPress={() => onPress(announcement.id)}
      style={({ pressed }) => [styles.row, pressed && styles.rowPressed]}
      accessibilityRole="button"
      accessibilityLabel={`${announcement.title}. Category ${announcement.category}`}
      accessibilityHint="Click to see this announcement's details"
    >
      <View style={styles.rowText}>
        <View style={[styles.badge, styles[`badge_${announcement.category}`]]}>
          <Text
            style={[
              styles.badgeText,
              styles[`badgeText_${announcement.category}`],
            ]}
          >
            {announcement.category.toUpperCase()}
          </Text>
        </View>
        <Text numberOfLines={2} ellipsizeMode="tail" style={styles.title}>
          {announcement.title}
        </Text>
        {showSummary && (
          <Text numberOfLines={2} ellipsizeMode="tail" style={styles.summary}>
            {announcement.summary}
          </Text>
        )}
      </View>

      <Text style={styles.date}>{announcement.publishedAt}</Text>
    </Pressable>
  );
};

export default AnnouncementRow;

const styles = StyleSheet.create({
  row: {
    backgroundColor: colors.surface,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: spacing.md,
    padding: spacing.md,
  },
  rowPressed: {
    backgroundColor: "#rgba(0, 0, 0, 0.03)",
  },
  rowText: {
    flex: 1,
    gap: spacing.xs,
  },
  title: {
    ...typography.heading,
    fontSize: 15,
    color: colors.text,
    lineHeight: 20,
  },
  summary: {
    ...typography.label,
    fontSize: 11,
    color: colors.muted,
    marginTop: 4,
  },
  badge: {
    alignSelf: "flex-start",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: radius.md,
  },
  badgeText: {
    fontSize: 9,
    fontWeight: 700,
  },
  badge_academic: { backgroundColor: "#E0F2FE" },
  badgeText_academic: { color: "#0369A1" },
  badge_event: { backgroundColor: "#FEF3C7" },
  badgeText_event: { color: "#B45309" },
  badge_service: { backgroundColor: "#DCFCE7" },
  badgeText_service: { color: "#15803D" },
  date: {
    ...typography.label,
    fontSize: 11,
    color: colors.muted,
    marginTop: 4,
  },
});
