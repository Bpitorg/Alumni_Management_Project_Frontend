import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

const JobCard = ({ job, onSelect }) => {
  return (
    <Card
      sx={{
        mb: 2,
        cursor: "pointer",
        "&:hover": { boxShadow: 6, transform: "scale(1.02)" },
        transition: "all 0.2s ease-in-out",
      }}
      onClick={() => onSelect(job)} // Set selected job on click
    >
      <CardContent>
        {/* Job Title */}
        <Typography variant="h6" fontWeight="bold">
          {job.title}
        </Typography>
        {/* Company Name & Location */}
        <Typography variant="subtitle1" color="text.secondary">
          {job.company} • {job.location}
        </Typography>
        {/* Salary & Job Type */}
        <Box display="flex" justifyContent="space-between" mt={1}>
          <Typography variant="body2" color="green">
            💰 {job.salary}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            📌 {job.type}
          </Typography>
        </Box>
        {/* Posted Time */}
        <Typography variant="caption" color="text.secondary" mt={1} display="block">
          🕒 {job.posted}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default JobCard;
