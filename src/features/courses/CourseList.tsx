import { View, Text, Pressable, StyleSheet } from "react-native";
import { colors, radius, spacing } from "../../theme";
import { useState } from "react";
import { CourseCard } from "./CourseCard";
import { courses } from "./courseData";

const CourseList = () => {
  const [courseIndex, setCourseIndex] = useState<number>(0);

  const handleCoursePress = (id: string) => {
    console.log(`Bấm mở chi tiết môn học ${id}`);
  };

  const currentCourse = courses[courseIndex];

  const goToPreviousCourse = () => {
    setCourseIndex((prev) => (prev === 0 ? courses.length - 1 : prev - 1));
  };

  const goToNextCourse = () => {
    setCourseIndex((prev) => (prev === courses.length - 1 ? 0 : prev + 1));
  };
  return (
    <View style={styles.courseSection}>
      <View style={styles.navButtons}>
        <Pressable
          onPress={goToPreviousCourse}
          style={({ pressed }) => [
            styles.navButton,
            pressed && styles.navButtonPressed,
          ]}
          accessibilityRole="button"
          accessibilityLabel="Môn học trước"
        >
          <Text style={styles.navButtonText}>{"<"}</Text>
        </Pressable>
        <View style={styles.courseCarousel}>
          <CourseCard course={currentCourse} onPress={handleCoursePress} />
        </View>
        <Pressable
          onPress={goToNextCourse}
          style={({ pressed }) => [
            styles.navButton,
            pressed && styles.navButtonPressed,
          ]}
          accessibilityRole="button"
          accessibilityLabel="Môn học tiếp theo"
        >
          <Text style={styles.navButtonText}>{">"}</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CourseList;

const styles = StyleSheet.create({
  courseSection: {
    width: "100%",
  },
  courseHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: spacing.sm,
  },
  navButtons: {
    flexDirection: "row",
    gap: spacing.sm,
    alignItems: "center",
  },
  navButton: {
    width: 34,
    height: 34,
    borderRadius: radius.round,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  navButtonPressed: {
    opacity: 0.85,
    backgroundColor: colors.primaryDark,
  },
  navButtonText: {
    color: colors.surface,
    fontSize: 18,
    fontWeight: "700",
  },
  courseCarousel: {
    width: "80%",
    alignSelf: "center",
  },
});
