import { StyleSheet } from "react-native";
import { colors, spacing, typography } from "../theme";

export const commonStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  sectionTitle: {
    marginBottom: spacing.sm,
  },
  header: {
    padding: spacing.md,
    backgroundColor: colors.background,
    borderBottomWidth: 1,
    borderColor: colors.border,
    gap: spacing.xs,
  },
  headerTitle: {
    ...typography.title,
    color: colors.primaryDark,
  },
  headerSubtitle: {
    ...typography.body,
    fontSize: 13,
    color: colors.muted,
  },
});
