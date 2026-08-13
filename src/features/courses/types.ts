export interface Course {
  id: string;
  code: string;
  title: string;
  instructor: string;
  progress: number;
  thumbnailUrl?: string;
  imageRole: "informative" | "decorative";
  imageLabel?: string;
}
