import { StyleSheet, Text, View } from "react-native";

interface InfoRowProps {
  label: string;
  value: string;
  emphasized?: boolean;
}

const InfoRow = ({ label, value, emphasized }: InfoRowProps) => {
  return (
    <View style={styles.container}>
      <Text>{label}</Text>
      <Text>{value}</Text>
    </View>
  );
};

export default InfoRow;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
});
