import React from "react";
import {
  Text,
  Pressable,
  StyleSheet,
  ActivityIndicator,
  View,
} from "react-native";
import { colors, radius, spacing, typography } from "../theme";
import { BaseButtonProps } from "./types/buttonTypes";

export function SecondaryButton({
  title,
  loading = false,
  disabled = false,
  leftIcon,
  rightIcon,
  style,
  textStyle,
  onPress,
  ...rest
}: BaseButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <Pressable
      onPress={onPress}
      disabled={isDisabled}
      accessibilityRole="button"
      accessibilityState={{ disabled: isDisabled, busy: loading }}
      style={({ pressed }) => [
        styles.container,
        pressed && !isDisabled && styles.pressed,
        isDisabled && styles.disabled,
        style,
      ]}
      {...rest}
    >
      <View style={styles.touchTargetWrapper}>
        {loading ? (
          <ActivityIndicator size="small" color={colors.primary} />
        ) : (
          <View style={styles.contentContainer}>
            {leftIcon && <View style={styles.iconLeft}>{leftIcon}</View>}
            <Text style={[styles.text, textStyle]}>{title}</Text>
            {rightIcon && <View style={styles.iconRight}>{rightIcon}</View>}
          </View>
        )}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1.5,
    borderColor: colors.primary,
    borderRadius: radius.md,
  },
  touchTargetWrapper: {
    minHeight: 48,
    minWidth: 48,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    ...typography.label,
    color: colors.primary,
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  iconLeft: {
    marginRight: spacing.sm,
  },
  iconRight: {
    marginLeft: spacing.sm,
  },
  pressed: {
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    transform: [{ scale: 0.98 }],
  },
  disabled: {
    borderColor: colors.border,
    backgroundColor: "transparent",
    opacity: 0.5,
  },
});
