import React from "react";
import { View, StyleSheet, ViewStyle, StyleProp } from "react-native";
import { colors, radius, spacing } from "../theme";

interface CardProps {
  children: React.ReactNode;
  tone?: "default" | "accent";
  style?: StyleProp<ViewStyle>;
}

export function Card({ children, tone = "default", style }: CardProps) {
  return (
    <View style={[styles.card, tone === "accent" && styles.accent, style]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  accent: {
    backgroundColor: colors.primaryDark,
    borderColor: colors.primary,
  },
});
