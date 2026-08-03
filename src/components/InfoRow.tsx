import { StyleSheet, Text, View } from "react-native";

interface InfoRowProps {
  label: string;
  value: string;
  emphasized?: boolean;
}

const InfoRow = ({ label, value, emphasized }: InfoRowProps) => {
  return (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

export default InfoRow;

const styles = StyleSheet.create({
  row: {
    display: "flex",
    flexDirection: "row",
    gap: 14,
    width: "100%",
    marginBottom: 8,
  },
  label: {
    width: 100,
    fontWeight: "bold",
  },
  value: {
    flex: 1,
    color: "#333",
  },
});
