import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from "./src/features/HomeScreen";
import AnnouncementsScreen from "./src/features/announcements/AnnouncementsScreen";
import { announcements } from "./src/features/announcements/announcementData";
import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />

      {/* <HomeScreen /> */}

      {/* Test trang Announcements*/}
      <AnnouncementsScreen announcements={announcements} />
    </SafeAreaProvider>
  );
}
