export interface Announcement {
  id: string;
  title: string;
  summary: string;
  category: "academic" | "event" | "service";
  publishedAt: string;
}

export interface AnnouncementSection {
  title: string;
  data: Announcement[];
}
