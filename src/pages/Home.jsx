import { useTheme } from "@mui/material";
import React from "react";

const Home = () => {
  // Dummy data for demonstration
  const userName = "John Doe"; // Replace with dynamic user name
  const yourCourses = [
    { id: 1, title: "React Masterclass", progress: 75 },
    { id: 2, title: "Advanced JavaScript", progress: 50 },
  ];

  const yourMentors = [
    {
      id: 1,
      name: "John Doe",
      expertise: "Frontend Development",
      image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Jane Smith",
      expertise: "Data Science",
      image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "Alice Johnson",
      expertise: "UI/UX Design",
      image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      name: "Bob Brown",
      expertise: "Backend Development",
      image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const newsletter = {
    title: "Monthly Newsletter",
    content: "Subscribe to stay updated with the latest trends and news.",
    image: "https://via.placeholder.com/300",
  };

  const streak = {
    days: 5,
    description: "Daily login streak",
    achievements: ["5-day streak", "Consistent learner"],
    goal: 7, // Add a goal for the progress bar
    nextMilestone: "7-day streak", // Add the next milestone
  };

  const recommendedMentors = [
    {
      id: 1,
      name: "Alice Johnson",
      expertise: "UI/UX Design",
      image: "https://via.placeholder.com/100",
    },
    {
      id: 2,
      name: "Bob Brown",
      expertise: "Backend Development",
      image: "https://via.placeholder.com/100",
    },
    {
      id: 3,
      name: "Charlie Davis",
      expertise: "DevOps",
      image: "https://via.placeholder.com/100",
    },
  ];

  const recommendedCourses = [
    {
      id: 1,
      title: "Node.js Bootcamp",
      category: "Backend",
      image: "https://img.freepik.com/premium-vector/courses-logo-icon-brand-identity-sign-symbol-template_880781-2160.jpg",
    },
    {
      id: 2,
      title: "Python for Data Science",
      category: "Data Science",
      image: "https://img.freepik.com/premium-vector/courses-logo-icon-brand-identity-sign-symbol-template_880781-2160.jpg",
    },
    {
      id: 3,
      title: "React Native Fundamentals",
      category: "Mobile Development",
      image: "https://img.freepik.com/premium-vector/courses-logo-icon-brand-identity-sign-symbol-template_880781-2160.jpg",
    },
  ];

  const quickActions = [
    {
      id: 1,
      title: "Start New Course",
      icon: "📚",
      action: () => alert("Start New Course"),
    },
    {
      id: 2,
      title: "Message Mentor",
      icon: "💬",
      action: () => alert("Message Mentor"),
    },
    {
      id: 3,
      title: "View Notifications",
      icon: "🔔",
      action: () => alert("View Notifications"),
    },
  ];

  const recentActivities = [
    {
      id: 1,
      title: "Completed React Masterclass Lesson 5",
      time: "2 hours ago",
    },
    { id: 2, title: "Received a message from Jane Smith", time: "5 hours ago" },
    { id: 3, title: "Achieved 5-day streak", time: "1 day ago" },
  ];

  const statistics = [
    { id: 1, title: "Total Courses Completed", value: 12 },
    { id: 2, title: "Hours Spent Learning", value: 120 },
    { id: 3, title: "Certifications Earned", value: 5 },
  ];

  const notifications = [
    {
      id: 1,
      title: "New Course Available",
      content: "Node.js Bootcamp is now available.",
      time: "1 hour ago",
    },
    {
      id: 2,
      title: "Webinar Reminder",
      content: "Join the live webinar on Data Science tomorrow.",
      time: "3 hours ago",
    },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Live Webinar: Advanced JavaScript",
      date: "2023-10-15",
      time: "10:00 AM",
    },
    {
      id: 2,
      title: "Deadline: React Masterclass Assignment",
      date: "2023-10-20",
      time: "11:59 PM",
    },
  ];

  const progressOverview = {
    totalCourses: 15,
    completedCourses: 8,
    inProgressCourses: 4,
  };

  const communityEngagement = {
    forumPosts: 12,
    comments: 45,
    likes: 120,
  };

  // Theme colors
  const theme = useTheme();
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Greeting Section */}
      <div className="mb-8">
        <h1
          className="text-5xl font-bold"
          style={{ color: theme.palette.primary.main }}
        >
          Hello, {userName}
        </h1>
        <p className="text-xl font-semibold text-gray-500">Welcome back to your dashboard</p>
      </div>

      {/* Grid Layout for Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Quick Actions Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2
              className="text-xl font-semibold mb-4"
              style={{ color: theme.palette.primary.main }}
            >
              Quick Actions
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {quickActions.map((action) => (
                <button
                  key={action.id}
                  onClick={action.action}
                  className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <span className="text-2xl mb-2">{action.icon}</span>
                  <p className="text-gray-700 font-medium">{action.title}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Your Courses Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2
              className="text-xl font-semibold mb-4"
              style={{ color: theme.palette.primary.main }}
            >
              Your Courses
            </h2>
            {yourCourses.map((course) => (
              <div key={course.id} className="mb-4">
                <p className="text-gray-700">{course.title}</p>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Recent Activity Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2
              className="text-xl font-semibold mb-4"
              style={{ color: theme.palette.primary.main }}
            >
              Recent Activity
            </h2>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full"></div>
                  <div>
                    <p className="text-gray-700">{activity.title}</p>
                    <p className="text-gray-500 text-sm">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Statistics Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2
              className="text-xl font-semibold mb-4"
              style={{ color: theme.palette.primary.main }}
            >
              Statistics
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {statistics.map((stat) => (
                <div
                  key={stat.id}
                  className="p-4 bg-gray-100 rounded-lg text-center"
                >
                  <p className="text-gray-700 font-medium">{stat.title}</p>
                  <p
                    className="text-2xl font-bold"
                    style={{ color: theme.palette.primary.main }}
                  >
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Your Mentors Card (Full Width, Horizontal Scroll) */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2
              className="text-xl font-semibold mb-4"
              style={{ color: theme.palette.primary.main }}
            >
              Your Mentors
            </h2>
            <div className="flex overflow-x-auto space-x-4 pb-4">
              {yourMentors.map((mentor) => (
                <div
                  key={mentor.id}
                  className="flex-shrink-0 w-48 p-4 bg-gray-100 rounded-lg text-center"
                >
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="w-16 h-16 object-cover rounded-full mx-auto mb-2"
                  />
                  <p className="text-gray-700 font-medium">{mentor.name}</p>
                  <p className="text-gray-500 text-sm">{mentor.expertise}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Streak Card (Enhanced) */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2
              className="text-xl font-semibold mb-4"
              style={{ color: theme.palette.primary.main }}
            >
              Streak
            </h2>
            <div className="flex items-center space-x-4">
              {/* Streak Counter with Animation */}
              <div className="relative">
                <p className="text-gray-700 text-4xl font-bold animate-pulse">
                  {streak.days} 🔥
                </p>
                {/* Tooltip */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                  Keep it up! Login daily to maintain your streak.
                </div>
              </div>
              <div>
                <p className="text-gray-500 text-sm">{streak.description}</p>
                <ul className="list-disc list-inside text-gray-500 text-sm">
                  {streak.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <span>✅</span> {/* Icon for achievements */}
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Progress Bar */}
            <div className="mt-4">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: `${(streak.days / 7) * 100}%` }} // Assuming a 7-day goal
                ></div>
              </div>
              <p className="text-gray-500 text-sm mt-2">
                {streak.days}/7 days to next milestone
              </p>
            </div>
          </div>

          {/* Recommended Mentors Card (Full Width, Horizontal Scroll) */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2
              className="text-xl font-semibold mb-4"
              style={{ color: theme.palette.primary.main }}
            >
              Recommended Mentors
            </h2>
            <div className="flex overflow-x-auto space-x-4 pb-4">
              {recommendedMentors.map((mentor) => (
                <div
                  key={mentor.id}
                  className="flex-shrink-0 w-48 p-4 bg-gray-100 rounded-lg text-center"
                >
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="w-16 h-16 rounded-full mx-auto mb-2"
                  />
                  <p className="text-gray-700 font-medium">{mentor.name}</p>
                  <p className="text-gray-500 text-sm">{mentor.expertise}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended Courses Card (Full Width, Horizontal Scroll) */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2
              className="text-xl font-semibold mb-4"
              style={{ color: theme.palette.primary.main }}
            >
              Recommended Courses
            </h2>
            <div className="flex overflow-x-auto space-x-4 pb-4">
              {recommendedCourses.map((course) => (
                <div
                  key={course.id}
                  className="flex-shrink-0 w-64 p-4 bg-gray-100 rounded-lg"
                >
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-32 object-cover rounded-lg mb-2"
                  />
                  <p className="text-gray-700 font-medium">{course.title}</p>
                  <p className="text-gray-500 text-sm">{course.category}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-1 space-y-6">
          {/* Newsletter Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2
              className="text-xl font-semibold mb-4"
              style={{ color: theme.palette.primary.main }}
            >
              {newsletter.title}
            </h2>
            <img
              src={newsletter.image}
              alt="Newsletter"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-700 mb-4">{newsletter.content}</p>
            <button
              className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              style={{ backgroundColor: theme.palette.primary.main }}
            >
              Subscribe
            </button>
          </div>

          {/* Notifications Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2
              className="text-xl font-semibold mb-4"
              style={{ color: theme.palette.primary.main }}
            >
              Notifications
            </h2>
            <div className="space-y-4">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className="flex items-center space-x-4"
                >
                  <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full"></div>
                  <div>
                    <p className="text-gray-700">{notification.title}</p>
                    <p className="text-gray-500 text-sm">
                      {notification.content}
                    </p>
                    <p className="text-gray-500 text-sm">{notification.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Events Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2
              className="text-xl font-semibold mb-4"
              style={{ color: theme.palette.primary.main }}
            >
              Upcoming Events
            </h2>
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full"></div>
                  <div>
                    <p className="text-gray-700">{event.title}</p>
                    <p className="text-gray-500 text-sm">
                      {event.date} at {event.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Progress Overview Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2
              className="text-xl font-semibold mb-4"
              style={{ color: theme.palette.primary.main }}
            >
              Progress Overview
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-gray-700">Total Courses</p>
                <p className="text-gray-700 font-bold">
                  {progressOverview.totalCourses}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-gray-700">Completed Courses</p>
                <p className="text-gray-700 font-bold">
                  {progressOverview.completedCourses}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-gray-700">In Progress Courses</p>
                <p className="text-gray-700 font-bold">
                  {progressOverview.inProgressCourses}
                </p>
              </div>
            </div>
          </div>

          {/* Community Engagement Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2
              className="text-xl font-semibold mb-4"
              style={{ color: theme.palette.primary.main }}
            >
              Community Engagement
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-gray-700">Forum Posts</p>
                <p className="text-gray-700 font-bold">
                  {communityEngagement.forumPosts}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-gray-700">Comments</p>
                <p className="text-gray-700 font-bold">
                  {communityEngagement.comments}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-gray-700">Likes</p>
                <p className="text-gray-700 font-bold">
                  {communityEngagement.likes}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
