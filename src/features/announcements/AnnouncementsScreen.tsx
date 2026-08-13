// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   FlatList,
//   StyleSheet,
//   useWindowDimensions,
// } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import SearchField from "../../components/SearchField";
// import  FeedState, FeedStateProps from "../../components/FeedState";
// import  AnnouncementRow  from "./AnnouncementRow";
// import { announcements as mockData } from "./announcementData";
// import { Announcement } from "./types";
// import { colors, spacing, typography } from "../../theme";

// export function AnnouncementsScreen() {
//   const { width } = useWindowDimensions();
//   const [query, setQuery] = useState("");
//   const [status, setStatus] = useState<FeedStateProps["status"]>("loading");
//   const [data, setData] = useState<Announcement[]>([]);

//   useEffect(() => {
//     // Giả lập độ trễ tải dữ liệu (Exercise 5)
//     const timer = setTimeout(() => {
//       setData(mockData);
//       setStatus("ready");
//     }, 1200);
//     return () => clearTimeout(timer);
//   }, []);

//   const filtered = data.filter((item) =>
//     `${item.title} ${item.summary} ${item.category}`
//       .toLowerCase()
//       .includes(query.trim().toLowerCase()),
//   );

//   const handleRetry = () => {
//     setStatus("loading");
//     setTimeout(() => {
//       setData(mockData);
//       setStatus("ready");
//     }, 1000);
//   };

//   const contentWidth = Math.min(width, 760);

//   return (
//     <SafeAreaView style={styles.screen} edges={["top", "left", "right"]}>
//       <View style={[styles.centered, { maxWidth: contentWidth }]}>
//         <View style={styles.header}>
//           <Text accessibilityRole="header" style={styles.screenTitle}>
//             Bản Tin Campus
//           </Text>
//           <SearchField value={query} onChangeText={setQuery} />
//         </View>

//         {status === "loading" ? (
//           <FeedState status="loading" label="Đang cập nhật thông báo mới..." />
//         ) : filtered.length === 0 ? (
//           <FeedState
//             status="empty"
//             message={
//               query
//                 ? `Không tìm thấy thông báo khớp với: "${query}"`
//                 : "Hiện tại chưa có thông báo nào."
//             }
//           />
//         ) : (
//           <FlatList
//             data={filtered}
//             keyExtractor={(item) => item.id}
//             renderItem={({ item }) => (
//               <AnnouncementRow
//                 announcement={item}
//                 onPress={(id) => console.log("Mở", id)}
//               />
//             )}
//             contentContainerStyle={styles.listContent}
//             keyboardShouldPersistTaps="handled"
//           />
//         )}
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   screen: { flex: 1, backgroundColor: colors.background },
//   centered: { flex: 1, width: "100%", alignSelf: "center" },
//   header: {
//     padding: spacing.md,
//     backgroundColor: colors.surface,
//     borderBottomWidth: 1,
//     borderColor: colors.border,
//   },
//   screenTitle: {
//     ...typography.title,
//     color: colors.primaryDark,
//     marginBottom: spacing.xs,
//   },
//   listContent: { padding: spacing.md, pb: spacing.xl },
// });
