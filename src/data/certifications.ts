export interface Certification {
  id: string;
  title: string;
  issuer: string;
  category: "cloud" | "programming" | "database" | "algorithms";
  score?: string;
  status: string;
  verified: boolean;
  highlight?: boolean;
  skillsCovered: string[];
  credentialId?: string;
}

export const certifications: Certification[] = [
  {
    id: "oracle-oci-foundations",
    title: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
    issuer: "Oracle",
    category: "cloud",
    score: "98% Score",
    status: "Certified Associate",
    verified: true,
    highlight: true,
    skillsCovered: ["OCI Architecture", "IAM & Security", "VCN Networking", "Autonomous DB", "Storage Tiers"],
    credentialId: "OCI-2025-FOUNDATIONS-ASSOC",
  },
  {
    id: "aws-cloud-architecting",
    title: "AWS Academy Graduate — Cloud Architecting",
    issuer: "Amazon Web Services (AWS)",
    category: "cloud",
    status: "Completed & Verified",
    verified: true,
    highlight: true,
    skillsCovered: ["VPC Peering", "EC2 & Auto Scaling", "S3 & DynamoDB", "IAM Policies", "Serverless Lambda"],
    credentialId: "AWS-ACADEMY-ARCHITECTING",
  },
  {
    id: "aws-cloud-foundations",
    title: "AWS Academy Graduate — Cloud Foundations",
    issuer: "Amazon Web Services (AWS)",
    category: "cloud",
    status: "Completed & Verified",
    verified: true,
    skillsCovered: ["Cloud Economics", "Global Infrastructure", "Security & Compliance", "Core Services"],
    credentialId: "AWS-ACADEMY-FOUNDATIONS",
  },
  {
    id: "java-foundations-associate",
    title: "Java Certified Foundations Associate",
    issuer: "Oracle",
    category: "programming",
    status: "Certified Associate",
    verified: true,
    highlight: true,
    skillsCovered: ["Core Java", "OOP Design Patterns", "Inheritance & Polymorphism", "Exception Handling", "Collections"],
    credentialId: "ORACLE-JAVA-FOUNDATIONS",
  },
  {
    id: "mysql-heatwave",
    title: "MySQL HeatWave Implementation Certified Associate Rel 1",
    issuer: "Oracle",
    category: "database",
    status: "Certified Associate",
    verified: true,
    skillsCovered: ["In-Memory Acceleration", "OLAP & OLTP Workloads", "Cluster Scaling", "SQL Query Tuning"],
    credentialId: "MYSQL-HEATWAVE-REL1",
  },
  {
    id: "leetcode-sql-50",
    title: "LeetCode SQL 50 Study Plan",
    issuer: "LeetCode",
    category: "database",
    status: "Completed",
    verified: true,
    skillsCovered: ["Advanced Joins", "Window Functions", "Aggregate Grouping", "Subqueries", "Index Optimization"],
    credentialId: "LEETCODE-SQL-50-VERIFIED",
  },
  {
    id: "nptel-graph-theory",
    title: "Algorithmic Graph Theory and Data Structures",
    issuer: "NPTEL (IIT/IISc)",
    category: "algorithms",
    status: "Completed",
    verified: true,
    skillsCovered: ["Graph Algorithms (BFS/DFS)", "Shortest Paths (Dijkstra)", "Spanning Trees", "Complexity Theory"],
    credentialId: "NPTEL-GRAPH-ALGO-VERIFIED",
  },
  {
    id: "udemy-java-master",
    title: "Learn Java Programming: Beginner to Master",
    issuer: "Udemy",
    category: "programming",
    status: "Completed",
    verified: true,
    skillsCovered: ["Concurrency & Threads", "JVM Memory Model", "Generics", "Streams & Lambdas", "File I/O"],
    credentialId: "UDEMY-JAVA-MASTERCLASS",
  },
];
