import React, { useState } from "react";

import {
  Paper,
  List,
  ListItem,
  ListItemText,
  FormControl,
  FormControlLabel,
  Checkbox,
  RadioGroup,
  Radio,
  Button,
  Divider,
  Typography,
  Box,
  Slider,
} from "@mui/material";

const JobSidebar = () => {
  const [filters, setFilters] = useState({
    jobType: "",
    experience: "",
    remote: false,
  });

  const handleFilterChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFilters({
      ...filters,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  const salaryMarks = [
    { value: 0, label: "$0" },
    { value: 50000, label: "$50K" },
    { value: 100000, label: "$100K" },
    { value: 150000, label: "$150K+" },
  ];

  return (
    <>
      <Typography variant="h5" gutterBottom>
        Filter Jobs
      </Typography>
      <Divider />
      <Typography
        variant="h6"
      >
        Job Posted
      </Typography>
      <FormControl component="fieldset">
        <RadioGroup
          name="jobPosted"
          value={filters.jobPosted}
          onChange={handleFilterChange}
        >
          <FormControlLabel value="today" control={<Radio />} label="Today" />
          <FormControlLabel
            value="3days"
            control={<Radio />}
            label="Last 3 Days"
          />
          <FormControlLabel
            value="7days"
            control={<Radio />}
            label="Last 7 Days"
          />
          <FormControlLabel
            value="30days"
            control={<Radio />}
            label="Last 30 Days"
          />
          <FormControlLabel
            value="anytime"
            control={<Radio />}
            label="Any Time"
          />
        </RadioGroup>
      </FormControl>
      <Divider />
      {/* Job Type Filter */}
      <List>
        <Typography variant="h6">Job Type</Typography>
        <FormControl component="fieldset">
          <List>
            {["full-time", "part-time", "Internship"].map((type) => (
              <ListItem key={type} disablePadding>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={filters.jobType.includes(type)}
                      onChange={(event) => {
                        const { checked } = event.target;
                        setFilters((prevFilters) => ({
                          ...prevFilters,
                          jobType: checked
                            ? [...prevFilters.jobType, type]
                            : prevFilters.jobType.filter((t) => t !== type),
                        }));
                      }}
                    />
                  }
                  label={type.replace("-", " ").toUpperCase()}
                />
              </ListItem>
            ))}
          </List>
        </FormControl>
      </List>

      <Divider />

      <Typography variant="h6">Experience Level</Typography>
      <FormControl component="fieldset">
        <List>
          {["entry", "mid", "senior"].map((level) => (
            <ListItem key={level} disablePadding>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filters.experience.includes(level)}
                    onChange={(event) => {
                      const { checked } = event.target;
                      setFilters((prevFilters) => ({
                        ...prevFilters,
                        experience: checked
                          ? [...prevFilters.experience, level]
                          : prevFilters.experience.filter(
                              (exp) => exp !== level
                            ),
                      }));
                    }}
                  />
                }
                label={
                  level === "entry"
                    ? "Entry Level"
                    : level === "mid"
                    ? "Mid Level"
                    : "Senior Level"
                }
              />
            </ListItem>
          ))}
        </List>
      </FormControl>
      <Divider />
      <List>
        <Typography variant="h6">Salary Range</Typography>
        <Box sx={{ width: "90%" }}>
          {" "}
          {/* Restricting width */}
          <Slider
            value={filters.salary}
            onChange={(event, newValue) =>
              setFilters({ ...filters, salary: newValue })
            }
            valueLabelDisplay="auto"
            step={1000}
            marks={salaryMarks}
            min={0}
            max={150000}
            sx={{ width: "100%" }} // Ensuring it stays within the Box
          />
        </Box>
      </List>

      <Divider />
    </>
  );
};

export default JobSidebar;
