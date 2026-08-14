import { View, Text, StyleSheet } from "react-native";
import { spacing } from "../../theme";
import { QuickAction } from "./types";
import ActionButton from "./ActionButton";

interface ActionListProps {
  actions: QuickAction[];
}

const ActionList = ({ actions }: ActionListProps) => {
  const handleActionPress = (id: string) => {
    console.log(`Click action ${id}`);
  };

  return (
    <View style={styles.actions}>
      {actions.map((action) => (
        <ActionButton
          key={action.id}
          action={action}
          onPress={() => handleActionPress(action.id)}
        />
      ))}
    </View>
  );
};

export default ActionList;

const styles = StyleSheet.create({
  actions: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.sm,
  },
});
