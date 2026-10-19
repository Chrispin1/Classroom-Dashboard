import { Subject } from "@/types";

export const MOCK_SUBJECTS: Subject[] = [
  {
    id: 1,
    code: "MATH101",
    name: "Mathematics",
    department: "Science",
    description:
      "Introduction to algebra, geometry, and basic calculus concepts.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    code: "ENG101",
    name: "English Literature",
    department: "Humanities",
    description:
      "Study of classic and contemporary literary works, reading comprehension, and essay writing.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 3,
    code: "BIO101",
    name: "Biology",
    department: "Science",
    description:
      "Fundamentals of living organisms, cell structure, genetics, and ecosystems.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 4,
    code: "HIS101",
    name: "History",
    department: "Humanities",
    description:
      "Exploration of major world events, civilizations, and their impact on modern society.",
    createdAt: new Date().toISOString(),
  },
];
