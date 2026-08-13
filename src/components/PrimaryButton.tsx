import { Text, Pressable } from "react-native";
import React from "react";

interface PrimaryButtonProps {
  label: string;
  onPress: () => void;
}

const PrimaryButton = ({ label, onPress }: PrimaryButtonProps) => {
  return (
    <Pressable onPress={onPress}>
      <Text>{label}</Text>
    </Pressable>
  );
};

export default PrimaryButton;
