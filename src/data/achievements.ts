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
    context: "ECS Hackathon / Competition, VIT-AP University",
    description: "Competed and shortlisted among the top 47 teams across the university for technical solution design and rapid prototyping.",
    badge: "University Finalist",
  },
  {
    type: "leadership",
    title: "Events Team Member",
    context: "Android Club, VIT-AP",
    description: "Organized developer workshops, hackathons, and technical talk sessions promoting mobile and software engineering across the campus community.",
    badge: "Active Contributor",
  },
  {
    type: "co-curricular",
    title: "Debate & Structured Discussion",
    context: "Communication & Analytical Discourse",
    description: "Participated in technical debates and structured forum discussions, developing strong verbal articulation and active listening capabilities.",
  },
  {
    type: "interest",
    title: "Sports & Creative Pursuits",
    context: "Well-Rounded Personal Balance",
    description: "Competitive Cricket, Volleyball, analytical Gaming, Reading software & engineering literature, and contributing to personal codebases.",
  },
];
