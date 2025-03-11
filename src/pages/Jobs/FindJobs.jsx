import React, { useState } from "react";
import { Paper, IconButton, Box, TextField, MenuItem } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import JobSidebar from "../../page-components/Jobs/JobSidebar";
import JobDetails from "../../page-components/Jobs/JobDetails";
import JobCard from "../../page-components/Jobs/JobCard";
import jobsData from "../../page-components/Jobs/Jobs"; // Import jobs data

// Extract unique locations from jobsData
const locations = [...new Set(jobsData.map((job) => job.location))];

const FindJobs = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");

  // Filter jobs based on job title & location
  const filteredJobs = jobsData.filter(
    (job) =>
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (location === "" || job.location === location) // Match location if selected
  );

  return (
    <Box display="flex" gap={2} p={3}>
      {/* Sidebar */}
      <Paper
        elevation={4}
        sx={{
          width: 250,
          p: 2,
          height: "100vh",
          position: "sticky",
          top: 0,
          overflowY: "auto",
        }}
      >
        <JobSidebar />
      </Paper>

      {/* Main Job Listings */}
      <Box flex={1} display="flex" flexDirection="column" gap={2}>
        {/* Search Bar */}
        <Box display="flex" gap={2}>
          <TextField
            label="Search Jobs"
            variant="outlined"
            size="small"
            fullWidth
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <TextField
            label="Location"
            variant="outlined"
            size="small"
            select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            sx={{ minWidth: "150px" }}
          >
            {/* Default Option */}
            <MenuItem value="">All Locations</MenuItem>
            {locations.map((loc) => (
              <MenuItem key={loc} value={loc}>
                {loc}
              </MenuItem>
            ))}
          </TextField>
        </Box>

        {/* Job Listings */}
        <Box flex={1} overflow="auto">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => <JobCard key={job.id} job={job} onSelect={setSelectedJob} />)
          ) : (
            <p>No jobs found</p>
          )}
        </Box>
      </Box>

      {/* Job Details Sidebar */}
      {selectedJob && (
        <Paper
          elevation={4}
          sx={{
            width: 300,
            p: 2,
            height: "100vh",
         //   position: "sticky",
            top: 0,
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            position: "relative",
          }}
        >
          {/* Close Button */}
          <IconButton
            onClick={() => setSelectedJob(null)}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              backgroundColor: "white",
              "&:hover": {
                backgroundColor: "gray.200",
              },
            }}
          >
            <CloseIcon />
          </IconButton>

          {/* Job Details Component */}
          <JobDetails job={selectedJob} />
        </Paper>
      )}
    </Box>
  );
};

export default FindJobs;
