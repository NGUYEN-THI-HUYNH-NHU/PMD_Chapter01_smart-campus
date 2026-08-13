import { View, Text, StyleSheet } from "react-native";
import { spacing } from "../../theme";
import { QuickAction } from "./types";
import ActionButton from "./ActionButton";
import { commonStyles } from "../../styles";

interface ActionListProps {
  actions: QuickAction[];
}

const ActionList = ({ actions }: ActionListProps) => {
  const handleActionPress = (id: string) => {
    console.log(`Bấm chọn action ${id}`);
  };

  return (
    <View>
      <Text style={commonStyles.sectionTitle}>Thao tác</Text>
      <View style={styles.actions}>
        {actions.map((action) => (
          <ActionButton
            key={action.id}
            action={action}
            onPress={() => handleActionPress(action.id)}
          />
        ))}
      </View>
    </View>
  );
};

export default ActionList;

const styles = StyleSheet.create({
  actions: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.md,
  },
});
