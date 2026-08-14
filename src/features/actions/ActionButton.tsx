import { View, Text, Pressable, StyleSheet } from "react-native";
import { QuickAction } from "./types";
import { colors, radius, spacing, typography } from "../../theme";

interface ActionButtonProps {
  action: QuickAction;
  onPress: (id: string) => void;
}
const ActionButton = ({ action, onPress }: ActionButtonProps) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.actionCard,
        pressed && styles.actionCardPressed,
      ]}
      onPress={() => onPress(action.id)}
      accessibilityLabel={`${action.label}. ${action.description}`}
      accessibilityHint="Click to open the shortcut for this feature"
    >
      <Text style={styles.actionLabel}>{action.label}</Text>
      <Text
        style={styles.actionDescription}
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {action.description}
      </Text>
    </Pressable>
  );
};

export default ActionButton;

const styles = StyleSheet.create({
  actionCard: {
    flexBasis: "47%",
    flexGrow: 1,
    minHeight: 60,
    justifyContent: "space-between",
    padding: spacing.sm,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    backgroundColor: colors.surface,
  },
  actionCardPressed: {
    backgroundColor: "rgba(23, 107, 154, 0.12)",
    borderColor: "rgba(23, 107, 154, 0.12)",
  },
  actionLabel: {
    ...typography.title,
    fontSize: 14,
    color: colors.primaryDark,
  },
  actionDescription: {
    ...typography.body,
    fontStyle: "italic",
    fontSize: 12,
    color: colors.muted,
  },
});
