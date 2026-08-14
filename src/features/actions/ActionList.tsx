import { View, StyleSheet } from "react-native";
import { spacing } from "../../theme";
import ActionButton from "./ActionButton";
import { quickActions } from "./actionData";

const ActionList = () => {
  const handleActionPress = (id: string) => {
    console.log(`Click action ${id}`);
  };

  return (
    <View style={styles.actions}>
      {quickActions.map((action) => (
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
