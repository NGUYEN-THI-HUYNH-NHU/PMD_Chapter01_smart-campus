import React from "react";
import { Pressable, StyleSheet, ActivityIndicator, View } from "react-native";
import { colors, radius } from "../theme";
import { IconButtonProps } from "./types/buttonTypes";

export function IconButton({
  icon,
  loading = false,
  disabled = false,
  accessibilityLabel,
  style,
  onPress,
  ...rest
}: IconButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <Pressable
      onPress={onPress}
      disabled={isDisabled}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      accessibilityState={{ disabled: isDisabled, busy: loading }}
      style={({ pressed }) => [
        styles.container,
        pressed && !isDisabled && styles.pressed,
        isDisabled && styles.disabled,
        style,
      ]}
      {...rest}
    >
      {/* Đảm bảo vùng chạm tối thiểu đạt chuẩn 48x48dp dù icon có nhỏ hơn */}
      <View style={styles.touchTargetWrapper}>
        {loading ? (
          <ActivityIndicator size="small" color={colors.primary} />
        ) : (
          icon
        )}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: radius.round,
    overflow: "hidden",
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
  },
  touchTargetWrapper: {
    width: 48,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  pressed: {
    backgroundColor: colors.border,
    transform: [{ scale: 0.95 }],
  },

  disabled: {
    opacity: 0.5,
    backgroundColor: colors.background,
  },
});
