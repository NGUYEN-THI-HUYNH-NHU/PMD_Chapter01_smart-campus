import { PressableProps, ViewStyle, TextStyle } from "react-native";

export interface BaseButtonProps extends Omit<PressableProps, "style"> {
  title?: string;
  loading?: boolean;
  disabled?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export interface IconButtonProps extends Omit<PressableProps, "style"> {
  icon: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
  accessibilityLabel: string;
  style?: ViewStyle;
  size?: number;
}
