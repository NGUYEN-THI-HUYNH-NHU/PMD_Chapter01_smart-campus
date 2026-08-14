import { Announcement, AnnouncementSection } from "./types";

export const announcements: Announcement[] = [
  {
    id: "ann-1",
    title: "Official Summer Semester Exam Schedule for 2025 - 2026",
    summary:
      "The Academic Affairs Office has announced the detailed exam schedule for all summer semester courses. Students are reminded to check their personal portal for exam schedules and bring their student ID cards before entering the examination room.",
    category: "academic",
    publishedAt: "2026-08-14",
  },
  {
    id: "ann-2",
    title: "Campus Cup 2026 Football Tournament Kicks Off This Week",
    summary:
      "The Campus Cup officially returns with the participation of 16 teams from various faculties. The opening ceremony and the first match will take place at 17:00 this Friday at the central stadium.",
    category: "event",
    publishedAt: "2026-08-14",
  },
  {
    id: "ann-3",
    title: "Wi-Fi System Maintenance Across Main Lecture Hall Areas",
    summary:
      "The IT Center will perform routine upgrades to the Wi-Fi network infrastructure in Lecture Halls A and B from 22:00 tonight to 04:00 tomorrow morning. Network connectivity may be disrupted during this period.",
    category: "service",
    publishedAt: "2026-08-12",
  },
  {
    id: "ann-4",
    title: "Late Major Specialization Registration for Cohort 2024",
    summary:
      "The deadline for submitting specialization preference forms for Information Technology students in Cohort 2024 has been extended to August 15. The system will automatically close registration after this deadline.",
    category: "academic",
    publishedAt: "2026-08-07",
  },
  {
    id: "ann-5",
    title: "Scientific Workshop: AI Applications in Mobile Development",
    summary:
      "An opportunity to network with leading experts from Silicon Valley discussing AI Agent trends and next-generation React Native. Register early to receive a certificate of participation from the organizers.",
    category: "event",
    publishedAt: "2026-08-06",
  },
  {
    id: "ann-6",
    title: "Extended Operating Hours at the Central Library",
    summary:
      "To support final exam preparations, the university library will extend its opening hours until 22:00 daily, effective from August 12 through August 25. Night-study areas will remain open 24/7.",
    category: "service",
    publishedAt: "2026-08-05",
  },
  {
    id: "ann-7",
    title:
      "Notice on Submitting Applications for Tuition Fee Exemption Renewal (Semester I)",
    summary:
      "Eligible students under policy categories should prepare and submit all notarized documents to renew their tuition fee exemption applications for the new semester. Document drop-off is at the One-Stop Office, Room 102.",
    category: "academic",
    publishedAt: "2026-08-04",
  },
  {
    id: "ann-8",
    title: "Registration Open for Campus First Aid Training Workshop",
    summary:
      "The campus medical station, in collaboration with the Red Cross, is organizing a free basic first aid training course exclusively for students. Participants will practice treating injuries and performing CPR.",
    category: "event",
    publishedAt: "2026-08-03",
  },
  {
    id: "ann-9",
    title: "Annual International Student Cultural Exchange Festival",
    summary:
      "Experience traditional food, music, and art performances hosted by international student associations from over 20 countries. Join us at the main quadrangle this coming Saturday afternoon.",
    category: "event",
    publishedAt: "2026-08-02",
  },
  {
    id: "ann-10",
    title: "Dormitory Room Allocation Results for the Upcoming Academic Year",
    summary:
      "The Student Housing Department has published the official list of approved dormitory applications. Successful applicants must complete their check-in procedures and fee payments before August 20.",
    category: "service",
    publishedAt: "2026-08-01",
  },
  {
    id: "ann-11",
    title: "Guideline on Graduation Thesis Formatting and Submissions",
    summary:
      "Final-year students preparing to defend their graduation theses must follow the newly updated formatting guidelines published on the institutional repository. Late submissions will not be reviewed by the defense council.",
    category: "academic",
    publishedAt: "2026-07-30",
  },
  {
    id: "ann-12",
    title: "Career Fair 2026: Over 50 Tech and Corporate Partners",
    summary:
      "Connect directly with recruiters from top multinational corporations and local startups. Bring multiple copies of your resume and dress in business formal attire for on-the-spot interviews.",
    category: "event",
    publishedAt: "2026-07-28",
  },
  {
    id: "ann-13",
    title: "Campus Parking Lot B Temporary Closure for Resurfacing",
    summary:
      "Parking Lot B near the sports complex will be closed for asphalt resurfacing and line painting from August 18 to August 20. Faculty members and students are advised to use Parking Lot A instead.",
    category: "service",
    publishedAt: "2026-07-27",
  },
  {
    id: "ann-14",
    title: "Scholarship Grant Announcement from Global Tech Foundation",
    summary:
      "Applications are now open for high-achieving undergraduate students majoring in STEM fields. Selected scholars will receive full tuition coverage and mentorship opportunities with industry leaders.",
    category: "academic",
    publishedAt: "2026-07-25",
  },
];

export function groupAnnouncements(
  list: Announcement[],
): AnnouncementSection[] {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const dayOfWeek = today.getDay();
  const distanceToMonday = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - distanceToMonday);

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const todayStr = `${year}-${month}-${day}`;

  const groupToday: Announcement[] = [];
  const groupThisWeek: Announcement[] = [];
  const groupEarlier: Announcement[] = [];

  list.forEach((item) => {
    const itemDate = new Date(item.publishedAt);

    if (item.publishedAt === todayStr) {
      groupToday.push(item);
    } else if (itemDate >= startOfWeek && itemDate < today) {
      groupThisWeek.push(item);
    } else {
      groupEarlier.push(item);
    }
  });

  const sections: AnnouncementSection[] = [];

  if (groupToday.length > 0) {
    sections.push({ title: "Today", data: groupToday });
  }
  if (groupThisWeek.length > 0) {
    sections.push({ title: "This week", data: groupThisWeek });
  }
  if (groupEarlier.length > 0) {
    sections.push({ title: "Earlier", data: groupEarlier });
  }

  return sections;
}
