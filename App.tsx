import { StyleSheet, Text, View } from "react-native";
import InfoRow from "./src/components/InfoRow";
import StudentCard from "./src/components/StudentCard";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <InfoRow label="Project" value="Chapter 01 - smart-campus" />
      </View>
      <StudentCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
});
