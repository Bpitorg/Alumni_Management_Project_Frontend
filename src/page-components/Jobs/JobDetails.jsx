import React from "react";
import { Paper, Typography, Box, List, Button, ListItem } from "@mui/material";

const JobDetails = ({ job }) => {
  if (!job) return null; // If no job is selected, don't render anything

  return (
    <Paper sx={{ p: 2, display: "flex", flexDirection: "column", height: "100%" }}>
      {/* Job Title */}
      <Typography variant="h5" fontWeight="bold">
        {job.title}
      </Typography>

      {/* Company and Location */}
      <Typography variant="subtitle1" color="text.secondary">
        {job.company} - {job.location}
      </Typography>

      {/* Salary */}
      <Typography variant="body1" fontWeight="bold" mt={1}>
        Salary: {job.salary}
      </Typography>

      {/* Job Type */}
      <Typography variant="body1">
        Type: {job.type}
      </Typography>

      {/* Posted Date */}
      <Typography variant="body2" color="text.secondary">
        Posted: {job.posted}
      </Typography>

      {/* Job Description */}
      <Box mt={2}>
        <Typography variant="h6" fontWeight="bold">
          Job Description
        </Typography>
        <Typography variant="body1">{job.description}</Typography>
      </Box>

      {/* Requirements */}
      <Box mt={2}>
        <Typography variant="h6" fontWeight="bold">
          Requirements
        </Typography>
        <List>
          {job.requirements.map((req, index) => (
            <ListItem key={index} sx={{ pl: 0 }}>
              - {req}
            </ListItem>
          ))}
        </List>
      </Box>
      <Button 
        variant="contained" 
        color="primary" 
        sx={{ mt: 2 }} 
        onClick={() => alert(`Applying for ${job.title} at ${job.company}`)}
      >
        Apply For Job
      </Button>
    </Paper>
  );
};

export default JobDetails;
