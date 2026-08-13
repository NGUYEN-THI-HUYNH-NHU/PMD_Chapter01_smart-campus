export const colors = {
  primary: "#176B9A",
  primaryDark: "#17324D",
  secondary: "#b5e0f9",
  accent: "#168A8A",
  background: "#F4F7F9",
  surface: "#FFFFFF",
  text: "#202A33",
  muted: "#667784",
  border: "#D8E0E5",
  danger: "#B42318",
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
} as const;

export const radius = {
  sm: 8,
  md: 12,
  lg: 18,
  round: 999,
} as const;

export const typography = {
  title: { fontSize: 28, fontWeight: "700" as const },
  heading: { fontSize: 20, fontWeight: "700" as const },
  body: { fontSize: 16, fontWeight: "400" as const },
  label: { fontSize: 13, fontWeight: "600" as const },
} as const;
