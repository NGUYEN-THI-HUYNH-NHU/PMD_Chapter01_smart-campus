import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { Announcement } from "./types";

interface AnnouncementRowProps {
  announcement: Announcement;
  onPress: (id: string) => void;
}

const AnnouncementRow = ({ announcement, onPress }: AnnouncementRowProps) => {
  return (
    <Pressable
      onPress={() => onPress(announcement.id)}
      style={({ pressed }) => [styles.row, pressed && styles.rowPressed]}
      accessibilityRole="button"
      accessibilityHint="Opens the announcement details"
    >
      <View style={styles.rowText}>
        <Text style={styles.category}>{announcement.category}</Text>
        <Text style={styles.title}>{announcement.title}</Text>
        <Text numberOfLines={2} style={styles.summary}>
          {announcement.summary}
        </Text>
      </View>
      <Text style={styles.date}>{announcement.publishedAt}</Text>
    </Pressable>
  );
};

export default AnnouncementRow;

const styles = StyleSheet.create({
  row: {},
  rowPressed: {},
  rowText: {},
  category: {},
  title: {},
  summary: {},
  date: {},
});
