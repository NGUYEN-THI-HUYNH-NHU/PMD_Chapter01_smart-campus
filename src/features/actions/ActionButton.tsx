import { View, Text, Pressable, StyleSheet } from "react-native";
import { QuickAction } from "./types";
import { colors, radius, spacing } from "../../theme";

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
    >
      <Text style={styles.actionLabel}>{action.label}</Text>
      <Text
        style={styles.actionDescription}
        numberOfLines={2}
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
    minHeight: 80,
    display: "flex",
    justifyContent: "space-between",
    padding: spacing.md,
    borderColor: colors.border,
    borderRadius: radius.md,
    backgroundColor: colors.secondary,
  },
  actionCardPressed: {
    backgroundColor: "#a0d7f8",
  },
  actionLabel: {
    fontSize: 14,
    fontWeight: "bold",
    color: colors.primaryDark,
  },
  actionDescription: {
    color: colors.primary,
    fontStyle: "italic",
    fontSize: 12,
  },
});
