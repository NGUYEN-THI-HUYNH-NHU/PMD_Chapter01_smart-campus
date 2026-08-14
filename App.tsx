import HomeScreen from "./src/features/HomeScreen";
import AnnouncementsScreen from "./src/features/announcements/AnnouncementsScreen";
import { StatusBar } from "expo-status-bar";
import CoursesScreen from "./src/features/courses/CoursesScreen";
import ProfileFormScreen from "./src/features/profile/ProfileFormScreen";

export default function App() {
  return (
    <>
      {/* <HomeScreen /> */}

      {/* Test trang Announcements*/}
      {/* <AnnouncementsScreen /> */}

      {/* Test trang Courses */}
      {/* <CoursesScreen /> */}

      {/* Test trang Profile */}
      <ProfileFormScreen />
    </>
  );
}
