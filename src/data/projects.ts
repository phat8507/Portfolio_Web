export type ProjectCategory = "research" | "event" | "leadership";

export interface ProjectLink {
  label: string;
  url: string;
}

export interface ProjectData {
  id: string;
  category: ProjectCategory;
  type: string;
  medal: string | null;
  title: string;
  role: string;
  highlights?: string[];
  overview: string;
  responsibilities: string[];
  outcomes: string;
  tags: string[];
  links?: ProjectLink[];
  cardTags: string[];
  cardDesc: string;
}

export const projectsData: ProjectData[] = [
  {
    id: "scrum-managed-macroeconomics",
    category: "research",
    type: "Academic Research",
    medal: null,
    title: "Scrum-Managed Group Research Project - Macroeconomics",
    role: "Team Lead - Scrum Master - Group 1A - Ho Chi Minh University of Banking",
    highlights: ["8 members", "3 offline sprints", "Google Sheets dashboard", "9/10 score"],
    overview: "Applied Agile/Scrum workflows to coordinate an 8-member macroeconomics research team from planning to final delivery. Managed research backlog, role-based task ownership, milestone tracking, and deliverable deadlines while using Management by Objectives (MBO) to connect individual responsibilities with project goals.",
    responsibilities: [
      "Coordinated an 8-member team across 3 offline sprint sessions, including planning, check-ins, review logistics, and final delivery.",
      "Managed the research backlog, role-based task ownership, milestone tracking, and deliverable deadlines.",
      "Built an Excel and Google Sheets project dashboard for tracking responsibilities, progress status, and team alignment.",
      "Applied Management by Objectives (MBO) to connect individual responsibilities with project objectives.",
      "Coordinated final deliverables, including a data analysis workbook, structured debate document, and project microsite.",
      "Integrated 2020-2025 evidence and Vietnam-focused case examples into the research storyline."
    ],
    outcomes: "Received a faculty evaluation score of 9/10 based on research quality, presentation delivery, and teamwork. Delivered a data analysis workbook, structured debate document, project dashboard, and project microsite while keeping team responsibilities and deadlines visible.",
    tags: ["Agile/Scrum", "Sprint Planning", "MBO", "Backlog Tracking", "Milestone Tracking", "Google Sheets", "Research Coordination", "Deliverable Management"],
    links: [
      { label: "Scrum/MBO Management Sheet", url: "https://docs.google.com/spreadsheets/d/1J7qV3jRL2DzsedPfVXcWpT1usXZqI-f6/edit?usp=sharing&ouid=115062449513822083905&rtpof=true&sd=true" },
      { label: "Interactive Project Website", url: "https://phat8507.github.io/MacroEco_N4_MarketFailure/" }
    ],
    cardTags: ["Agile/Scrum", "MBO", "Google Sheets", "Milestones"],
    cardDesc: "Coordinated an 8-member macroeconomics research team using Agile/Scrum, 3 offline sprint sessions, MBO, and a Google Sheets dashboard. Earned a 9/10 faculty score."
  },
  {
    id: "volleyball-club",
    category: "leadership",
    type: "Club Operations",
    medal: "Bronze Medal",
    title: "Club Operations Lead - Volleyball Club",
    role: "Head of Media & Technical Division - Duong Van Thi High School - Nov 2023 - Jun 2025",
    highlights: ["50 members", "15 selected from 37", "VND 3,000,000 budget", "85% active participation"],
    overview: "Oversaw weekly operations for a 50-member student athletics club, covering facility bookings, resource allocation, internal communications, member intake, media coordination, and inter-school tournament logistics.",
    responsibilities: [
      "Coordinated facility bookings, resource allocation, weekly operations, and internal communications for club activities.",
      "Managed budget approval through coach and school leadership, securing VND 3,000,000 in approved funding.",
      "Led a structured member intake project for 15 selected members from 37 submissions.",
      "Managed timeline planning, task coordination, review logistics, preparation materials, 4 practice sessions, and post-intake progress tracking.",
      "Organized an inter-school tournament involving 15 teams from 15 institutions.",
      "Managed a one-month preparation timeline covering venue approval, match scheduling, logistics, and communication with head coaches.",
      "Led the club's technical team as team captain during school-level competitions."
    ],
    outcomes: "Maintained 85% active participation after intake, coordinated tournament logistics across 15 teams from 15 institutions, secured VND 3,000,000 in approved funding, and contributed to the team winning a Bronze Medal at the HCMC Student Sports Championship.",
    tags: ["Operations Support", "Timeline Planning", "Budget Approval", "Resource Allocation", "Member Intake", "Stakeholder Communication", "Tournament Logistics", "Progress Tracking"],
    cardTags: ["Operations", "Budget", "Logistics", "Member Intake"],
    cardDesc: "Oversaw operations for a 50-member athletics club, secured VND 3,000,000 in approved funding, organized tournament logistics across 15 institutions, and maintained 85% active participation."
  },
  {
    id: "youth-for-chance",
    category: "event",
    type: "Event Support",
    medal: null,
    title: "Youth for Chance Club - \"Shared to Lead\" Talkshow",
    role: "External Relations & Event Communications",
    highlights: ["Event logistics", "Partnership outreach", "Communication planning"],
    overview: "Supported operations, external relations, and event communications for Youth for Chance, a student organization focused on leadership development and social impact.",
    responsibilities: [
      "Supported event logistics planning, timeline drafting, task allocation, and on-ground coordination across teams.",
      "Drafted partnership outreach communications and assisted external relations with partner organizations and speakers.",
      "Coordinated internal communication between club divisions to keep messaging and task follow-through consistent.",
      "Supported on-ground execution during the talkshow, including logistics checks and attendee flow.",
      "Documented event outcomes and lessons learned for post-event review."
    ],
    outcomes: "Supported successful execution of the leadership-focused student talkshow while building practical experience in event logistics, partnership outreach, communication planning, and on-ground coordination.",
    tags: ["Event Logistics", "External Relations", "Partnership Outreach", "Communication Planning", "On-ground Coordination"],
    cardTags: ["Event Logistics", "Partnerships", "Communication"],
    cardDesc: "Supported event logistics, partnership outreach, communication planning, and on-ground coordination for a leadership-focused student talkshow."
  }
];
