export type Photo = {
  id: string;
  year: string;
  title: string;
  caption: string;
  colors: [string, string, string];
};

export const PHOTOS: Photo[] = [
  {
    id: "classroom-moment-2026",
    year: "2026",
    title: "Classroom Momentum",
    caption:
      "A placeholder from a focused classroom session, ready to be replaced with a real gallery photo.",
    colors: ["#172554", "#2563eb", "#67e8f9"],
  },
  {
    id: "student-workshop-2026",
    year: "2026",
    title: "Student Workshop",
    caption:
      "A placeholder for a workshop image highlighting hands-on learning and collaboration.",
    colors: ["#312e81", "#7c3aed", "#f0abfc"],
  },
  {
    id: "campus-visit-2025",
    year: "2025",
    title: "Campus Visit",
    caption:
      "A placeholder for a campus visit photo from a year of mentoring and academic planning.",
    colors: ["#064e3b", "#059669", "#a7f3d0"],
  },
  {
    id: "results-day-2025",
    year: "2025",
    title: "Results Day",
    caption:
      "A placeholder for a results-day photo celebrating steady progress and student confidence.",
    colors: ["#7c2d12", "#f97316", "#fed7aa"],
  },
  {
    id: "planning-session-2024",
    year: "2024",
    title: "Planning Session",
    caption:
      "A placeholder for a planning-session photo showing the structure behind strong outcomes.",
    colors: ["#1e1b4b", "#4f46e5", "#c7d2fe"],
  },
  {
    id: "foundation-batch-2024",
    year: "2024",
    title: "Foundation Batch",
    caption:
      "A placeholder for an early batch photo from a foundational year of the program.",
    colors: ["#4a044e", "#db2777", "#fbcfe8"],
  },
];

export const PHOTO_YEARS = Array.from(
  new Set(PHOTOS.map((photo) => photo.year)),
).sort((a, b) => Number(b) - Number(a));

export function getPhotosByYear(year: string) {
  return PHOTOS.filter((photo) => photo.year === year);
}

export function getPhotoById(id: string) {
  return PHOTOS.find((photo) => photo.id === id);
}
