import {
  View,
  Text,
  useWindowDimensions,
  StyleSheet,
  ScrollView,
} from "react-native";
import { courses } from "./courseData";
import { CourseCard } from "./CourseCard";
import { commonStyles } from "../../styles";
import { colors, spacing } from "../../theme";

const CoursesScreen = () => {
  const { width } = useWindowDimensions();

  const handleCoursePress = (id: string) => console.log(`Click course ${id}`);

  return (
    <View style={styles.container}>
      <View style={commonStyles.header}>
        <Text accessibilityRole="header" style={commonStyles.headerTitle}>
          My Courses
        </Text>
        <Text style={commonStyles.headerSubtitle}>
          Track your study progress and manage your courses for the semester
        </Text>
      </View>
      <ScrollView
        contentContainerStyle={[
          styles.scrollContent,
          width > 720 && styles.scrollContentWide,
        ]}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.grid}>
          {courses.map((item) => (
            <View key={item.id} style={styles.gridItem}>
              <CourseCard course={item} onPress={handleCoursePress} />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default CoursesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingVertical: 46,
  },
  scrollContent: {
    padding: spacing.md,
  },
  //tablet
  scrollContentWide: {
    alignSelf: "center",
    width: "100%",
    maxWidth: 960,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.md,
  },
  gridItem: {
    flexGrow: 1,
    flexBasis: 260,
    minWidth: 240,
    maxWidth: 420,
  },
});
