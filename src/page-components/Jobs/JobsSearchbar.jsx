import React, { useState } from "react";
import { TextField, Button, MenuItem, Box } from "@mui/material";


const JobsSearchbar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  

  const handleSearch = () => {
    onSearch({ jobTitle: searchQuery, location });
  };

  return (
    <Box display="flex" padding={2} gap={2} alignItems="center" width="100%">
      {/* Job Title Search */}
      <TextField
        label="Search Jobs"
        variant="outlined"
        size="small"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        sx={{ flex: 2, minWidth: "200px" }} // Ensures proper width
      />

      {/* Location Search */}
      
      {/* Search Button */}
      <Button
        variant="contained"
        color="primary"
        onClick={handleSearch}
        sx={{
          px: 3, // Horizontal padding
          py: 1, // Vertical padding
          borderRadius: "8px", // Rounded corners
          fontWeight: "bold",
          textTransform: "none", // Prevents uppercase transformation
          boxShadow: 2, // Adds subtle shadow
          "&:hover": {
            backgroundColor: "primary.dark", // Darker shade on hover
          },
        }}
      >
        Search
      </Button>
    </Box>
  );
};

export default JobsSearchbar;
