import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";
import { colors, typography } from "../theme";

interface AvatarProps {
  uri?: string;
  name: string;
  size?: number;
}

const Avatar = ({ uri, name, size = 72 }: AvatarProps) => {
  if (!uri) {
    const initials = name
      .split(" ")
      .map((part) => part)
      .join("")
      .substring(0, 2)
      .toUpperCase();

    return (
      <View
        style={[
          styles.fallback,
          { width: size, height: size, borderRadius: size / 2 },
        ]}
      >
        <Text style={[styles.initials, { fontSize: size * 0.35 }]}>
          {initials}
        </Text>
      </View>
    );
  }

  return (
    <Image
      source={{ uri }}
      style={{ width: size, height: size, borderRadius: size / 2 }}
      accessibilityLabel={`Ảnh đại diện của ${name}`}
    />
  );
};

export default Avatar;

const styles = StyleSheet.create({
  fallback: {
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  initials: {
    color: colors.surface,
    fontWeight: "700",
  },
});
