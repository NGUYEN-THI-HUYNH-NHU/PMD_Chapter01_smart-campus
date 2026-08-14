import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { Course } from "./types";
import { colors, spacing, radius, typography } from "../../theme";

interface CourseCardProps {
  course: Course;
  onPress: (id: string) => void;
}

// Đường dẫn ảnh local làm fallback mặc định
const LOCAL_PLACEHOLDER = require("../../../assets/icon.png");

export function CourseCard({ course, onPress }: CourseCardProps) {
  const [imageStatus, setImageStatus] = useState<
    "loading" | "success" | "error"
  >("loading");

  // Xử lý thuộc tính tiếp cận
  const accessibilityProps =
    course.imageRole === "decorative"
      ? {
          accessibilityElementsHidden: true,
          importantForAccessibility: "no-hide-descendants" as const,
        }
      : {
          accessibilityLabel:
            course.imageLabel || `Illustration for the course ${course.title}`,
        };

  return (
    <Pressable
      onPress={() => onPress(course.id)}
      style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
      accessibilityRole="button"
      accessibilityHint="Click to see this course's details"
    >
      <View style={styles.imageContainer}>
        <Image
          source={
            !!course.thumbnailUrl
              ? { uri: course.thumbnailUrl }
              : LOCAL_PLACEHOLDER
          }
          style={styles.image}
          resizeMode="cover"
          onLoadStart={() => setImageStatus("loading")}
          onLoad={() => setImageStatus("success")}
          onError={() => setImageStatus("error")}
          {...accessibilityProps}
        />

        {imageStatus === "loading" && !!course.thumbnailUrl && (
          <View style={[styles.imageOverlay, styles.loadingBackground]}>
            <ActivityIndicator size="small" color={colors.primary} />
          </View>
        )}

        {imageStatus === "error" && (
          <View style={[styles.imageOverlay, styles.errorBackground]}>
            <Text style={styles.errorText}>Không thể tải ảnh</Text>
          </View>
        )}
      </View>

      <View style={styles.infoContainer}>
        <Text numberOfLines={2} style={styles.title}>
          {course.title}
        </Text>
        <Text style={styles.instructor}>Lecturer: {course.instructor}</Text>

        <View style={styles.progressSection}>
          <View style={styles.progressBarBg}>
            <View
              style={[styles.progressBarFill, { width: `${course.progress}%` }]}
            />
          </View>
          <Text style={styles.progressText}>{course.progress}%</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: "hidden",
  },
  cardPressed: {
    opacity: 0.85,
    borderColor: colors.primary,
  },
  imageContainer: {
    height: 80,
    width: "100%",
    backgroundColor: colors.border,
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingBackground: {
    backgroundColor: "rgba(244, 247, 249, 0.7)",
  },
  errorBackground: {
    backgroundColor: colors.border,
  },
  errorIcon: {
    fontSize: 20,
    marginBottom: spacing.xs,
  },
  errorText: {
    fontSize: 10,
    color: colors.muted,
    fontWeight: "600",
  },
  infoContainer: {
    padding: spacing.md,
    gap: spacing.xs,
  },
  title: {
    ...typography.heading,
    fontSize: 15,
    color: colors.text,
    minHeight: 36,
  },
  instructor: {
    ...typography.body,
    fontSize: 12,
    color: colors.muted,
  },
  progressSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    marginTop: spacing.xs,
  },
  progressBarBg: {
    flex: 1,
    height: 6,
    backgroundColor: colors.border,
    borderRadius: radius.round,
    overflow: "hidden",
  },
  progressBarFill: {
    height: "100%",
    backgroundColor: colors.accent,
  },
  progressText: {
    ...typography.label,
    fontSize: 11,
    color: colors.text,
    width: 28,
    textAlign: "right",
  },
});
