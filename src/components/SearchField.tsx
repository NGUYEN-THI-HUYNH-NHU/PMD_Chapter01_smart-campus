import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import React from "react";
import { colors, radius, spacing, typography } from "../theme";
import { X } from "lucide-react-native";

interface SearchFieldProps {
  value: string;
  placeholder?: string;
  onChangeText: (query: string) => void;
  onDeleteText: () => void;
  onSubmit?: () => void;
}

const SearchField = ({
  value,
  placeholder,
  onChangeText,
  onDeleteText,
  onSubmit,
}: SearchFieldProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmit}
        placeholder={placeholder}
        returnKeyType="search"
        accessibilityRole="search"
        clearButtonMode="while-editing"
        style={styles.searchInput}
      />
      {value && (
        <Pressable
          onPress={onDeleteText}
          style={styles.clearBtn}
          hitSlop={8}
          accessibilityRole="button"
          accessibilityLabel="Delete search keyword"
        >
          <Text style={styles.clearIcon}>
            <X />
          </Text>
        </Pressable>
      )}
    </View>
  );
};

export default SearchField;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.sm,
    paddingHorizontal: spacing.sm,
  },
  searchInput: {
    flex: 1,
    ...typography.body,
    fontSize: 14,
    color: colors.text,
  },
  clearBtn: {
    paddingHorizontal: spacing.xs,
    justifyContent: "center",
    alignItems: "center",
  },
  clearIcon: {
    fontSize: 20,
    color: colors.muted,
    fontWeight: "bold",
  },
});
