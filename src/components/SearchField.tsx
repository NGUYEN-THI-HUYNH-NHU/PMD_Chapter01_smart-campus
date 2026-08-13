import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import { colors, radius, spacing } from "../theme";
import { commonStyles } from "../styles";

interface SearchFieldProps {
  value: string;
  onChangeText: (value: string) => void;
  onSubmit?: () => void;
}

const SearchField = ({ value, onChangeText, onSubmit }: SearchFieldProps) => {
  return (
    <View>
      <Text
        nativeID="announcement-search-label"
        style={commonStyles.sectionTitle}
      >
        Tìm kiếm thông báo
      </Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmit}
        placeholder="Title, course, or service"
        returnKeyType="search"
        accessibilityRole="search"
        aria-labelledby="announcement-search-label"
        style={styles.input}
      />
    </View>
  );
};

export default SearchField;

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.surface,
    borderRadius: radius.round,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: "hidden",
    padding: spacing.md,
  },
});
