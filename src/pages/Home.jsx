// pages/Home.jsx
import { useState } from 'react';
import { useTheme } from "@mui/material";
import DashboardLayout from "../common-components/DashboardLayout";
import HighlightCard from "../common-components/HighlightCard";
import { TrendingUp, Calendar, Briefcase, Users, Star, Activity } from 'lucide-react';

const Home = () => {
  const theme = useTheme();
  const [selectedTab, setSelectedTab] = useState('highlights');
  
  // Stats for the overview section
  const stats = [
    { title: "Active Members", value: "2,846", change: "+12%", icon: <Users className="h-6 w-6 text-blue-500" /> },
    { title: "Placement Rate", value: "94%", change: "+5%", icon: <Star className="h-6 w-6 text-yellow-500" /> },
    { title: "Upcoming Events", value: "8", change: "This Month", icon: <Calendar className="h-6 w-6 text-purple-500" /> },
    { title: "Community Engagement", value: "86%", change: "+3%", icon: <Activity className="h-6 w-6 text-green-500" /> },
  ];

  // Sample data for upcoming events
  const upcomingEvents = [
    {
      title: "Resume Workshop",
      date: "Apr 15, 2025",
      time: "3:00 PM",
      attendees: 45,
      location: "Virtual"
    },
    {
      title: "Tech Interview Prep",
      date: "Apr 18, 2025",
      time: "5:30 PM",
      attendees: 89,
      location: "Main Campus, Room 302"
    },
    {
      title: "Networking Mixer",
      date: "Apr 22, 2025",
      time: "6:00 PM",
      attendees: 120,
      location: "Innovation Hub"
    }
  ];

  // Job opportunities data
  const jobListings = [
    {
      position: "Senior Frontend Developer",
      company: "Google",
      location: "Bangalore, India",
      salary: "₹28-35 LPA",
      posted: "2 days ago",
      logo: "google-logo",
      skills: ["React", "TypeScript", "Redux"],
      referral: true
    },
    {
      position: "DevOps Engineer",
      company: "Amazon",
      location: "Hyderabad, India (Remote)",
      salary: "₹20-25 LPA",
      posted: "1 week ago",
      logo: "amazon-logo",
      skills: ["AWS", "Kubernetes", "CI/CD"],
      referral: true
    },
    {
      position: "Data Scientist",
      company: "Microsoft",
      location: "Pune, India",
      salary: "₹18-24 LPA",
      posted: "3 days ago",
      logo: "microsoft-logo",
      skills: ["Python", "Machine Learning", "SQL"],
      referral: false
    },
    {
      position: "Product Manager",
      company: "Flipkart",
      location: "Bangalore, India",
      salary: "₹25-32 LPA",
      posted: "4 days ago",
      logo: "flipkart-logo",
      skills: ["Product Strategy", "Agile", "Analytics"],
      referral: true
    }
  ];

  return (
    <DashboardLayout>
      <div className="w-full px-4 py-6 bg-gray-50">
        {/* Welcome section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold" style={{
              color: theme.palette.primary.main,
            }}>Welcome back, Aditya!</h1>
            <p className="text-gray-600 mt-1">Here's what's happening in your community today</p>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-3">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              New Event
            </button>
            <button className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-lg flex items-center">
              <Briefcase className="h-5 w-5 mr-2" />
              Post Job
            </button>
          </div>
        </div>

        {/* Stats overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-10 border border-gray-100">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500 text-sm">{stat.title}</p>
                  <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                  <p className="text-green-500 text-sm mt-1 flex items-center">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    {stat.change}
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-gray-50">
                  {stat.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tab navigation */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="flex space-x-8">
            <button 
              onClick={() => setSelectedTab('highlights')}
              className={`py-3 px-1 font-medium text-sm ${selectedTab === 'highlights' 
                ? 'border-b-2 border-blue-500 text-blue-600' 
                : 'text-gray-500 hover:text-gray-700'}`}
            >
              Community Highlights
            </button>
            <button 
              onClick={() => setSelectedTab('jobs')}
              className={`py-3 px-1 font-medium text-sm ${selectedTab === 'jobs' 
                ? 'border-b-2 border-blue-500 text-blue-600' 
                : 'text-gray-500 hover:text-gray-700'}`}
            >
              Job Opportunities
            </button>
            <button 
              onClick={() => setSelectedTab('events')}
              className={`py-3 px-1 font-medium text-sm ${selectedTab === 'events' 
                ? 'border-b-2 border-blue-500 text-blue-600' 
                : 'text-gray-500 hover:text-gray-700'}`}
            >
              Upcoming Events
            </button>
          </nav>
        </div>

        {/* Tab content */}
        {selectedTab === 'highlights' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            <HighlightCard
              type="placed"
              icon="🏆"
              title="Recently Placed"
              items={[
                {
                  icon: "👩‍🎓",
                  bgColor: "bg-blue-100",
                  iconColor: "text-blue-600",
                  title: "Priya joined Google as SWE",
                  subtitle: "2 days ago"
                },
                {
                  icon: "👨‍🎓",
                  bgColor: "bg-green-100",
                  iconColor: "text-green-600",
                  title: "Rahul placed at Amazon",
                  subtitle: "1 week ago"
                },
                {
                  icon: "👩‍💻",
                  bgColor: "bg-purple-100",
                  iconColor: "text-purple-600",
                  title: "Sneha promoted to Team Lead at Adobe",
                  subtitle: "2 weeks ago"
                }
              ]}
              linkText="View all success stories"
              linkTo="/placements"
            />
            
            <HighlightCard
              type="members"
              icon="🆕"
              title="New Members"
              items={[
                { icon: "👩‍💼", bgColor: "bg-purple-100", name: "Nisha (Mentor)" },
                { icon: "👨‍💻", bgColor: "bg-amber-100", name: "Arjun (Alumni)" },
                { icon: "👩‍🎓", bgColor: "bg-teal-100", name: "Meena (Student)" }
              ]}
              additionalContent="12+ new members joined this week"
              linkText="Meet the community"
              linkTo="/new-members"
            />
            
            <HighlightCard
              type="event"
              icon="📣"
              title="Annual Alumni Meet 2025"
              items={[
                { bgColor: "bg-red-100", initials: "JD", textColor: "text-red-800" },
                { bgColor: "bg-blue-100", initials: "AM", textColor: "text-blue-800" },
                { bgColor: "bg-green-100", initials: "SK", textColor: "text-green-800" },
                { bgColor: "bg-yellow-100", initials: "+42", textColor: "text-yellow-800" }
              ]}
              additionalContent="Registration now open! Connect with 150+ alumni from top companies."
              linkText="Register Now"
              linkTo="/events/annual-meet-2025"
            />
          </div>
        )}

        {selectedTab === 'jobs' && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-5 border-b border-gray-100 flex justify-between items-center">
              <div>
                <h3 className="font-medium text-gray-900">Hot Job Opportunities</h3>
                <p className="text-sm text-gray-500 mt-1">Exclusive listings from our alumni network</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <select className="appearance-none bg-gray-50 border border-gray-200 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-blue-500 text-sm">
                    <option>All Locations</option>
                    <option>Remote</option>
                    <option>Bangalore</option>
                    <option>Hyderabad</option>
                    <option>Pune</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                    </svg>
                  </div>
                </div>
                <a href="/jobs" className="text-blue-600 text-sm hover:underline">View All Jobs</a>
              </div>
            </div>
            <div className="divide-y divide-gray-100">
              {jobListings.map((job, index) => (
                <div key={index} className="p-5 hover:bg-gray-50 transition-colors">
                  <div className="flex justify-between">
                    <div className="flex">
                      <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                        <span className="font-bold text-sm">{job.logo.split('-')[0].charAt(0).toUpperCase()}</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{job.position}</h4>
                        <div className="flex items-center mt-1">
                          <span className="text-sm text-gray-600">{job.company}</span>
                          <span className="mx-2 text-gray-300">•</span>
                          <span className="text-sm text-gray-600">{job.location}</span>
                        </div>
                        <div className="flex mt-2 space-x-2">
                          {job.skills.map((skill, i) => (
                            <span key={i} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-md">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end justify-between">
                      <span className="font-medium text-gray-900">{job.salary}</span>
                      <div className="flex items-center mt-2">
                        <span className="text-xs text-gray-500 mr-3">Posted {job.posted}</span>
                        {job.referral && (
                          <span className="bg-green-50 text-green-700 px-2 py-1 text-xs rounded-md">
                            Alumni Referral
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <button className="bg-white hover:bg-blue-50 text-blue-600 border border-blue-200 px-3 py-1 rounded-md text-sm mr-2">
                      Save
                    </button>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md text-sm">
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 bg-gray-50 text-center rounded-b-xl">
              <a href="/jobs/create" className="text-blue-600 text-sm font-medium hover:underline">+ Post a job opportunity</a>
            </div>
          </div>
        )}

        {selectedTab === 'events' && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-5 border-b border-gray-100 flex justify-between items-center">
              <h3 className="font-medium text-gray-900">Upcoming Events</h3>
              <a href="/events" className="text-blue-600 text-sm hover:underline">View Calendar</a>
            </div>
            <div className="divide-y divide-gray-100">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="p-5 hover:bg-gray-50 transition-colors">
                  <div className="flex justify-between items-start">
                    <div className="flex">
                      <div className="flex-shrink-0 bg-blue-50 rounded-lg w-12 h-12 flex flex-col items-center justify-center mr-4">
                        <span className="text-xs text-blue-700">{event.date.split(',')[0]}</span>
                        <span className="text-sm font-bold text-blue-700">{event.date.split(', ')[1]}</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{event.title}</h4>
                        <p className="text-sm text-gray-600 mt-1">{event.time} • {event.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="mr-4">
                        <span className="text-xs text-gray-500">Attendees</span>
                        <p className="font-medium">{event.attendees}</p>
                      </div>
                      <button className="bg-white hover:bg-blue-50 text-blue-600 border border-blue-200 px-3 py-1 rounded-md text-sm">
                        RSVP
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 bg-gray-50 text-center rounded-b-xl">
              <a href="/events/create" className="text-blue-600 text-sm font-medium hover:underline">+ Create an event</a>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Home;