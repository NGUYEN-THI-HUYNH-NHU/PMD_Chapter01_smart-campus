import { Course } from "./types";

export const courses: Course[] = [
  {
    id: "course-1",
    code: "RN-201",
    title: "React Native & Modern Mobile Development",
    instructor: "Dr. Johnathan",
    progress: 75,
    thumbnailUrl:
      // Ảnh Remote hợp lệ đóng vai trò informative - cần mô tả cho Screen Reader
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=400",
    imageRole: "informative",
    imageLabel: "Giao diện dòng code React Native trên màn hình máy tính",
  },
  {
    id: "course-2",
    code: "UX-102",
    title: "Mobile Interface Design & Ergonomics",
    instructor: "Prof. Sarah Lee",
    progress: 40,
    // Không truyền thumbnailUrl để ép buộc dùng Ảnh Local mặc định (Local Fallback)
    imageRole: "decorative",
  },
  {
    id: "course-3",
    code: "JS-101",
    title: "Advanced JavaScript & Async Programming",
    instructor: "Alex Mercer",
    progress: 100,
    // Truyền một đường link ảnh lỗi để kiểm thử trạng thái Failed (Error Fallback)
    thumbnailUrl:
      "https://images.unsplash.com/photo-1516116211223-5c359a36298a?q=80&w=400",
    imageRole: "informative",
    imageLabel: "Sơ đồ luồng xử lý bất đồng bộ JavaScript",
  },
  {
    id: "course-4",
    code: "TS-301",
    title: "TypeScript for Production Systems",
    instructor: "Emily Watson",
    progress: 15,
    // Ảnh Remote hợp lệ đóng vai trò Decorative - Không cần mô tả cho Screen Reader
    thumbnailUrl:
      "https://images.viblo.asia/675e5c02-b36d-474c-8ddf-20be4f421d5a.png",
    imageRole: "decorative",
  },
];
