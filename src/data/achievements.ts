export interface AchievementItem {
  type: "award" | "leadership" | "co-curricular" | "interest";
  title: string;
  context: string;
  description: string;
  badge?: string;
}

export const achievementsData: AchievementItem[] = [
  {
    type: "award",
    title: "Top 47 Shortlisted Team",
    context: "ECS, VIT-AP University",
    description: "Shortlisted among the top 47 teams in ECS at VIT-AP University for technical solution design and engineering execution.",
    badge: "Shortlisted Top 47",
  },
  {
    type: "leadership",
    title: "Android Club: Events Team Member",
    context: "VIT-AP University",
    description: "Active member of the Android Club events team, contributing to technical workshops, developer sessions, and campus tech initiatives.",
    badge: "Club Team Member",
  },
  {
    type: "co-curricular",
    title: "Debate & Discussion, Listening Skills",
    context: "Co-curricular Communication",
    description: "Active participant in debate forums and technical discussions, demonstrating structured verbal articulation and attentive listening skills.",
    badge: "Co-curricular",
  },
  {
    type: "interest",
    title: "Extracurriculars & Hobbies",
    context: "Cricket, Volleyball, Reading, Gaming, Coding",
    description: "Active in sports (Cricket, Volleyball) alongside personal hobbies in technical reading, strategy gaming, and hands-on coding.",
    badge: "Interests",
  },
];

