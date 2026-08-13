export interface Announcement {
  id: string;
  title: string;
  summary: string;
  category: "academic" | "event" | "service";
  publishedAt: string;
}
