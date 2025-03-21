import achievement from "../assets/achievement.avif"
const achievements = [
  {
    id: 1,
    title: "Won the National Innovation Award",
    date: "October 2023",
    image: achievement, // Replace with actual image URL
    description:
      "Our team won the National Innovation Award for developing a groundbreaking AI solution that revolutionizes healthcare diagnostics. This achievement marks a significant milestone in our journey to innovate and impact lives.",
    highlights: [
      "Developed an AI-powered diagnostic tool with 95% accuracy.",
      "Collaborated with leading healthcare institutions.",
      "Received recognition from the Ministry of Health.",
    ],
    testimonials: [
      {
        quote: "This achievement is a testament to the team's hard work and dedication.",
        author: "John Doe, CEO",
      },
      {
        quote: "The innovation has the potential to transform healthcare globally.",
        author: "Jane Smith, Health Expert",
      },
    ],
    links: [
      {
        label: "Read the full article on our blog",
        url: "https://example.com/blog/national-innovation-award",
      },
      {
        label: "Watch the award ceremony",
        url: "https://example.com/video/award-ceremony",
      },
    ],
  },
  {
    id: 2,
    title: "Launched Eco-Friendly Product Line",
    date: "August 2023",
    image: achievement, // Replace with actual image URL
    description:
      "We successfully launched a new line of eco-friendly products, reducing our carbon footprint by 30%. This initiative aligns with our commitment to sustainability and environmental responsibility.",
    highlights: [
      "Reduced plastic usage by 50% in packaging.",
      "Partnered with eco-conscious suppliers.",
      "Received the Green Business Certification.",
    ],
    testimonials: [
      {
        quote: "This is a huge step forward in sustainable business practices.",
        author: "Emily Green, Environmentalist",
      },
      {
        quote: "Our customers love the new product line!",
        author: "Sarah Lee, Marketing Head",
      },
    ],
    links: [
      {
        label: "Learn more about our eco-friendly initiative",
        url: "https://example.com/blog/eco-friendly-launch",
      },
      {
        label: "Shop the new product line",
        url: "https://example.com/shop",
      },
    ],
  },
  {
    id: 3,
    title: "Achieved 1 Million Users on Our Platform",
    date: "June 2023",
    image: achievement, // Replace with actual image URL
    description:
      "Our platform reached a major milestone of 1 million active users. This achievement reflects the trust and loyalty of our users and the scalability of our technology.",
    highlights: [
      "Achieved 1 million active users in just 2 years.",
      "Expanded to 10 new countries.",
      "Improved user retention rate by 20%.",
    ],
    testimonials: [
      {
        quote: "This milestone is just the beginning of our journey.",
        author: "Michael Chen, CTO",
      },
      {
        quote: "Our platform has transformed the way we work.",
        author: "Alex Johnson, User",
      },
    ],
    links: [
      {
        label: "Read our user growth story",
        url: "https://example.com/blog/1-million-users",
      },
      {
        label: "Join our platform today",
        url: "https://example.com/signup",
      },
    ],
  },
  {
    id: 4,
    title: "Won Best Workplace Award",
    date: "May 2023",
    image: "https://via.placeholder.com/800x400", // Replace with actual image URL
    description:
      "We were recognized as one of the best workplaces in the industry, thanks to our inclusive culture, employee benefits, and focus on work-life balance.",
    highlights: [
      "Ranked #1 in employee satisfaction surveys.",
      "Introduced flexible work policies.",
      "Hosted over 50 team-building events this year.",
    ],
    testimonials: [
      {
        quote: "This award reflects our commitment to our employees.",
        author: "Laura Brown, HR Director",
      },
      {
        quote: "I love working here! The culture is amazing.",
        author: "David Wilson, Employee",
      },
    ],
    links: [
      {
        label: "Read about our workplace culture",
        url: "https://example.com/blog/best-workplace",
      },
      {
        label: "View our career opportunities",
        url: "https://example.com/careers",
      },
    ],
  },
  {
    id: 5,
    title: "Partnered with Leading Tech Giants",
    date: "March 2023",
    image: "https://via.placeholder.com/800x400", // Replace with actual image URL
    description:
      "We formed strategic partnerships with leading tech giants to enhance our product offerings and expand our market reach. This collaboration opens new opportunities for innovation and growth.",
    highlights: [
      "Signed partnerships with Google, Microsoft, and AWS.",
      "Integrated cutting-edge technologies into our products.",
      "Expanded our market presence in 15 new regions.",
    ],
    testimonials: [
      {
        quote: "This partnership is a game-changer for our industry.",
        author: "Chris Evans, Product Manager",
      },
      {
        quote: "We're excited to collaborate with such innovative companies.",
        author: "Rachel Adams, Business Development Head",
      },
    ],
    links: [
      {
        label: "Read the press release",
        url: "https://example.com/blog/tech-partnerships",
      },
      {
        label: "Explore our new product features",
        url: "https://example.com/products",
      },
    ],
  },
  {
    id: 6,
    title: "Completed 10,000 Volunteer Hours",
    date: "December 2022",
    image: "https://via.placeholder.com/800x400", // Replace with actual image URL
    description:
      "Our team completed 10,000 volunteer hours this year, contributing to various community projects and social causes. This achievement reflects our commitment to giving back to society.",
    highlights: [
      "Supported 20+ local charities and NGOs.",
      "Organized community clean-up drives.",
      "Donated over $100,000 to social causes.",
    ],
    testimonials: [
      {
        quote: "We're proud to make a difference in our community.",
        author: "Sophia Martinez, CSR Lead",
      },
      {
        quote: "Volunteering with the team has been a rewarding experience.",
        author: "Daniel Kim, Employee",
      },
    ],
    links: [
      {
        label: "Read about our CSR initiatives",
        url: "https://example.com/blog/volunteer-hours",
      },
      {
        label: "Join us in our next volunteer event",
        url: "https://example.com/volunteer",
      },
    ],
  },
];

export default achievements;