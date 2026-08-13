import { View, Text, ScrollView, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { colors, radius, spacing } from "../theme";
import Header from "../components/Header";
import Avatar from "../components/Avatar";
import { quickActions } from "./actions/actionData";
import CourseList from "./courses/CourseList";
import ActionList from "./actions/ActionList";
import { courses } from "./courses/courseData";
import SearchField from "../components/SearchField";
import { useState } from "react";
("lucide-react-native");
import { AnnouncementsFeed } from "./announcements/AnnouncementsFeed";
import { commonStyles } from "../styles";
import { announcements } from "./announcements/announcementData";

export interface StudentSummary {
  id: string;
  name: string;
  program: string;
  year: number;
  photoUrl?: string;
}

const HomeScreen = () => {
  const student: StudentSummary = {
    id: "23638921",
    name: "Nguyen Thi Huynh Nhu",
    program: "Software Engineering",
    year: 4,
    photoUrl:
      "https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/616569039_1399855241688107_8340148411748985445_n.jpg?stp=dst-jpg_tt6&cstp=mx828x828&ctp=s828x828&_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEFz6m8Dkabl_wxUqke08myguOrB2nsFAGC46sHaewUAcM62kkk-SQa9QJbkFDWL7AdnhQpiZAfItcvjMhm213X&_nc_ohc=e7QqnCoLp3EQ7kNvwEWvcm8&_nc_oc=AdpT1baX-QcijquCu-tCuDg4qKUmM9aX2-GSdIAePZt88Gb1fTUKhdvRU5xdFu58g_kdaLFFmQxz7QGieOLez283&_nc_zt=23&_nc_ht=scontent.fsgn19-1.fna&_nc_gid=4so6q-E7BUhKfgg8v18_bA&_nc_ss=7b2a8&oh=00_AQEtL6w-IqPp8mBeonGvuI9VrXxd_8YiP6LNwNV0t8w2Ow&oe=6A80B43D",
  };

  const [searchKey, setSearchKey] = useState<string>("");

  const handleSubmit = () => {
    console.log(`Search for ${searchKey}`);
  };

  return (
    <SafeAreaProvider>
      <ScrollView contentContainerStyle={styles.content}>
        <Header
          title="SmartCampus"
          subtitle="Everything you need, one campus away"
        />
        <View style={styles.welcomeCard}>
          <Avatar name={student.name} size={72} uri={student.photoUrl!} />
          <View style={styles.welcomeText}>
            <Text style={styles.eyebrow}>WELCOME!</Text>
            <Text style={styles.studentName}>{student.name}</Text>
            <Text style={styles.studentProgram}>{student.program}</Text>
          </View>
        </View>

        {/* <View style={styles.profileCard}>
          <Text style={commonStyles.sectionTitle}>Thông tin sinh viên</Text>
          <InfoRow label="Student ID" value={student.id} />
          <InfoRow label="Year" value={`Year ${student.year}`} />
        </View> */}

        <View>
          <Text style={commonStyles.sectionTitle}>My courses</Text>
          <CourseList courses={courses} />
        </View>

        <View>
          <Text style={commonStyles.sectionTitle}>Quick actions</Text>
          <ActionList actions={quickActions} />
        </View>

        <View>
          <Text style={commonStyles.sectionTitle}>Announcements</Text>
          <AnnouncementsFeed announcements={announcements} />
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: colors.background },
  content: {
    padding: spacing.md,
    gap: spacing.lg,
    paddingVertical: 46,
  },
  welcomeCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
    padding: spacing.lg,
    borderRadius: radius.lg,
    backgroundColor: colors.primaryDark,
  },
  welcomeText: { flex: 1 },
  eyebrow: {
    fontSize: 16,
    fontWeight: 600,
    color: colors.accent,
    letterSpacing: 1,
    marginBottom: 12,
  },
  studentName: {
    color: colors.surface,
  },
  studentProgram: {
    color: colors.muted,
    fontStyle: "italic",
  },
  profileCard: {
    backgroundColor: colors.background,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 12,
  },
});
