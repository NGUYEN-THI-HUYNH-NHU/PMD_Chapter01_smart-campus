import { StyleSheet, Text, View } from "react-native";
import InfoRow from "./src/components/InfoRow";

export default function App() {
  return (
    <View style={styles.container}>
      <InfoRow label="Project" value="Chapter 01 - smart-campus" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
