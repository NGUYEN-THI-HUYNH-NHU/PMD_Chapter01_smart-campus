import { SearchX } from "lucide-react-native";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { colors, radius, spacing, typography } from "../../theme";

export interface EmptyAnnouncementsProps {
  query: string;
  onDeleteQuery: () => void;
}

const EmptyAnnouncements = ({
  query,
  onDeleteQuery,
}: EmptyAnnouncementsProps) => {
  return (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyIcon}>
        <SearchX />
      </Text>
      <Text style={styles.emptyText}>
        {query && `Not found any announcement suiting "${query}"`}
      </Text>
      {query && (
        <Pressable
          onPress={onDeleteQuery}
          style={styles.clearSearchBtn}
          accessibilityRole="button"
          accessibilityLabel="Delete search keyword"
        >
          <Text style={styles.clearSearchText}>Delete search keyword</Text>
        </Pressable>
      )}
    </View>
  );
};

export default EmptyAnnouncements;

const styles = StyleSheet.create({
  emptyContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: spacing.xl,
    gap: spacing.sm,
  },
  emptyIcon: {
    fontSize: 36,
  },
  emptyText: {
    ...typography.body,
    color: colors.muted,
    textAlign: "center",
    lineHeight: 22,
  },
  clearSearchBtn: {
    marginTop: spacing.sm,
    paddingVertical: 10,
    paddingHorizontal: spacing.md,
    backgroundColor: colors.primary,
    borderRadius: radius.sm,
  },
  clearSearchText: {
    ...typography.label,
    color: colors.surface,
  },
});
