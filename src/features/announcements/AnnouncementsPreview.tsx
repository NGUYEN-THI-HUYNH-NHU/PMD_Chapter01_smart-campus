import React from "react";
import { announcements } from "./announcementData";
import AnnouncementRow from "./AnnouncementRow";
import { StyleSheet, View } from "react-native";
import { colors, radius } from "../../theme";

interface AnnouncementsPreviewProps {
  numOfAnnouncements?: number;
  onPress: (id: string) => void;
}

const AnnouncementsPreview = ({
  numOfAnnouncements = 3,
  onPress,
}: AnnouncementsPreviewProps) => {
  return (
    <>
      {announcements
        .slice(0, numOfAnnouncements > 0 ? numOfAnnouncements : 3)
        .map((item) => (
          <View key={item.id} style={styles.announcementRow}>
            <AnnouncementRow
              announcement={item}
              showSummary={false}
              onPress={onPress}
            />
          </View>
        ))}
    </>
  );
};

export default AnnouncementsPreview;

const styles = StyleSheet.create({
  announcementRow: {
    borderBottomWidth: 1,
    borderColor: colors.border,
  },
});
