import { StyleSheet, View } from "react-native";
import InfoRow from "./InfoRow";

const StudentCard = () => {
  return (
    <View style={styles.card}>
      <InfoRow label="SID" value="23638921" />
      <InfoRow label="Full name" value="Nguyen Thi Huynh Nhu" />
      <InfoRow label="Major" value="Software Engineering" />
      <InfoRow label="Academic year" value="2026-2027" />
      <InfoRow
        label="Introduction"
        value="A third-year Software Engineering student experienced in multi-platform software projects, specializing in Java for robust desktop systems and Next.js/React for full-stack web applications. Passionate about 
        architecting scalable systems, data analysis, and translating complex business requirements into high-performance software solutions. Proven capability through international academic exchange and high-achieving team projects."
      />
    </View>
  );
};

export default StudentCard;

const styles = StyleSheet.create({
  card: {
    width: "90%",
    backgroundColor: "#fafafa",
    padding: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 12,
  },
});
