const recentRecruitersData = [
  {
    id: 1,
    company: "Microsoft",
    role: "Software Engineering Intern",
    logo: "https://via.placeholder.com/150", // URL to company logo
    yearsOnCampus: [2020, 2021, 2022, 2023],
    studentsHired: 25,
    minPackage: 12,
    maxPackage: 30,
    jobRoles: [
      "Software Engineer",
      "Data Scientist",
      "Product Manager",
      "Cloud Engineer",
    ],
    eligibility: {
      gpa: 7.5,
      branches: ["CSE", "IT", "ECE", "EEE"],
      skills: ["Python", "Java", "SQL", "Data Structures"],
    },
    interviewProcess: [
      "Online Coding Test",
      "Technical Interview (2 rounds)",
      "HR Interview",
    ],
    testimonials: [
      {
        quote: "Microsoft's interview process was challenging but fair. The interviewers were very supportive.",
        author: "Jane Doe, CSE 2022",
      },
      {
        quote: "I loved the focus on problem-solving and system design during the interviews.",
        author: "John Smith, IT 2021",
      },
    ],
    website: "https://careers.microsoft.com",
  },
  {
    id: 2,
    company: "Amazon",
    role: "Product Manager",
    logo: "https://via.placeholder.com/150", // URL to company logo
    yearsOnCampus: [2019, 2020, 2021, 2022, 2023],
    studentsHired: 40,
    minPackage: 15,
    maxPackage: 35,
    jobRoles: [
      "Product Manager",
      "Software Development Engineer",
      "Data Analyst",
      "UX Designer",
    ],
    eligibility: {
      gpa: 7.0,
      branches: ["CSE", "IT", "ECE", "Mechanical"],
      skills: ["Problem Solving", "Leadership", "Communication"],
    },
    interviewProcess: [
      "Online Assessment",
      "Case Study Round",
      "Behavioral Interview",
    ],
    testimonials: [
      {
        quote: "Amazon's case study round was intense but a great learning experience.",
        author: "Sarah Lee, ECE 2023",
      },
      {
        quote: "The interviewers were very professional and focused on real-world scenarios.",
        author: "Alex Johnson, Mechanical 2022",
      },
    ],
    website: "https://www.amazon.jobs",
  },
  {
    id: 3,
    company: "Google",
    role: "Senior Engineer",
    logo: "https://via.placeholder.com/150", // URL to company logo
    yearsOnCampus: [2018, 2019, 2020, 2021, 2022, 2023],
    studentsHired: 50,
    minPackage: 20,
    maxPackage: 50,
    jobRoles: [
      "Software Engineer",
      "Machine Learning Engineer",
      "DevOps Engineer",
      "Technical Program Manager",
    ],
    eligibility: {
      gpa: 8.0,
      branches: ["CSE", "IT", "ECE"],
      skills: ["Algorithms", "System Design", "Python", "Go"],
    },
    interviewProcess: [
      "Online Coding Test",
      "Technical Interviews (3 rounds)",
      "Googleyness and Leadership Interview",
    ],
    testimonials: [
      {
        quote: "Google's interview process was rigorous but rewarding. The focus on algorithms and system design was intense.",
        author: "Michael Chen, CSE 2021",
      },
      {
        quote: "I loved the emphasis on creativity and problem-solving during the interviews.",
        author: "Emily Brown, IT 2020",
      },
    ],
    website: "https://careers.google.com",
  },
  {
    id: 4,
    company: "Meta",
    role: "Data Scientist",
    logo: "https://via.placeholder.com/150", // URL to company logo
    yearsOnCampus: [2019, 2020, 2021, 2022, 2023],
    studentsHired: 30,
    minPackage: 18,
    maxPackage: 40,
    jobRoles: [
      "Data Scientist",
      "Software Engineer",
      "Research Scientist",
      "Product Analyst",
    ],
    eligibility: {
      gpa: 7.5,
      branches: ["CSE", "IT", "ECE", "Mathematics"],
      skills: ["Python", "R", "Machine Learning", "Statistics"],
    },
    interviewProcess: [
      "Online Coding Test",
      "Technical Interview (2 rounds)",
      "Behavioral Interview",
    ],
    testimonials: [
      {
        quote: "Meta's interview process was very structured and focused on both technical and behavioral skills.",
        author: "Rachel Green, CSE 2022",
      },
      {
        quote: "The interviewers were very knowledgeable and asked insightful questions.",
        author: "David Wilson, Mathematics 2021",
      },
    ],
    website: "https://www.metacareers.com",
  },
  {
    id: 5,
    company: "Apple",
    role: "UX Designer",
    logo: "https://via.placeholder.com/150", // URL to company logo
    yearsOnCampus: [2020, 2021, 2022, 2023],
    studentsHired: 20,
    minPackage: 22,
    maxPackage: 45,
    jobRoles: [
      "UX Designer",
      "UI Developer",
      "Product Designer",
      "Interaction Designer",
    ],
    eligibility: {
      gpa: 7.0,
      branches: ["CSE", "IT", "Design"],
      skills: ["Figma", "Sketch", "User Research", "Prototyping"],
    },
    interviewProcess: [
      "Portfolio Review",
      "Design Challenge",
      "Behavioral Interview",
    ],
    testimonials: [
      {
        quote: "Apple's design challenge was one of the most creative interviews I've ever experienced.",
        author: "Sophia Martinez, Design 2023",
      },
      {
        quote: "The interviewers were very supportive and provided great feedback on my portfolio.",
        author: "Daniel Kim, CSE 2022",
      },
    ],
    website: "https://www.apple.com/careers",
  },
];

export default recentRecruitersData;