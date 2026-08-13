import { View, Text, StyleSheet } from "react-native";
import { colors } from "../theme";

interface HeaderProps {
  title: string;
  subtitle?: string;
}

const Header = ({ title, subtitle }: HeaderProps) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
      {subtitle && <Text style={styles.headerSubtitle}>{subtitle}</Text>}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flex: 1,
    minWidth: 0,
    height: "auto",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.primaryDark,
  },
  headerSubtitle: {
    fontSize: 14,
    color: colors.primary,
  },
});
