export const events = [
  {
    id: 1,
    title: "Networking Mixer",
    start: new Date(2025, 2, 5, 17, 0), // March 5, 2025, 5:00 PM
    end: new Date(2025, 2, 5, 19, 0), // March 5, 2025, 7:00 PM
    type: "networking",
    description: "Join us for a networking mixer to connect with industry professionals and alumni.",
    audience: "Students, Alumni, Professionals",
    mentor: "John Doe (Senior Software Engineer at Google)",
    organizer: "Alumni Association",
    certification: true,
    registrationDeadline: new Date(2025, 2, 3, 23, 59), // March 3, 2025, 11:59 PM
    benefits: [
      "Expand your professional network.",
      "Learn from industry experts.",
      "Discover new career opportunities.",
    ],
    agenda: [
      "5:00 PM - Welcome and Introductions",
      "5:30 PM - Networking Session",
      "6:30 PM - Panel Discussion",
      "7:00 PM - Closing Remarks",
    ],
    participated: true, // User has participated in this event
  },
  {
    id: 2,
    title: "Career Fair",
    start: new Date(2025, 2, 10, 10, 0), // March 10, 2025, 10:00 AM
    end: new Date(2025, 2, 10, 16, 0), // March 10, 2025, 4:00 PM
    type: "career-fair",
    description: "Explore job opportunities and meet recruiters from top companies.",
    audience: "Students and Recent Graduates",
    mentor: "Jane Smith (HR Manager at Microsoft)",
    organizer: "Career Services",
    certification: false,
    registrationDeadline: new Date(2025, 2, 8, 23, 59), // March 8, 2025, 11:59 PM
    benefits: [
      "Connect with top employers.",
      "Learn about job openings and internships.",
      "Get resume feedback from recruiters.",
    ],
    agenda: [
      "10:00 AM - Opening Ceremony",
      "11:00 AM - Company Booths Open",
      "1:00 PM - Resume Review Sessions",
      "3:00 PM - Closing Remarks",
    ],
    participated: false, // User has not participated in this event
  },
  {
    id: 3,
    title: "Resume Workshop",
    start: new Date(2025, 2, 15, 14, 0), // March 15, 2025, 2:00 PM
    end: new Date(2025, 2, 15, 16, 0), // March 15, 2025, 4:00 PM
    type: "webinar",
    description: "Learn how to craft a winning resume and stand out to employers.",
    audience: "Students and Job Seekers",
    mentor: "Alice Johnson (Career Coach)",
    organizer: "Career Development Center",
    certification: true,
    registrationDeadline: new Date(2025, 2, 13, 23, 59), // March 13, 2025, 11:59 PM
    benefits: [
      "Improve your resume writing skills.",
      "Get personalized feedback on your resume.",
      "Learn tips for tailoring your resume to specific jobs.",
    ],
    agenda: [
      "2:00 PM - Introduction to Resume Writing",
      "2:30 PM - Hands-On Resume Building",
      "3:30 PM - One-on-One Feedback Sessions",
      "4:00 PM - Closing Remarks",
    ],
    participated: true, // User has participated in this event
  },
];