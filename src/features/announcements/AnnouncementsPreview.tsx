import React from "react";
import { announcements } from "./announcementData";
import AnnouncementRow from "./AnnouncementRow";

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
          <AnnouncementRow
            key={item.id}
            announcement={item}
            showSummary={false}
            onPress={onPress}
          />
        ))}
    </>
  );
};

export default AnnouncementsPreview;
