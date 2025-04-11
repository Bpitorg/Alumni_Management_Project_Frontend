import React from "react";
import { TextField, InputAdornment, AppBar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from "@mui/material/styles";

const Searchbar = ({ searchPlaceholder, onSearch, className }) => {
  const theme = useTheme();

  const handleSearchChange = (event) => {
    const query = event.target.value; // Get the search query
    onSearch(query); // Pass the query to the parent component
  };

  return (
    <div className={`py-2 w-full px-3 ${className || ""}`}>
      <AppBar
        position=""
        
        sx={{
          border: "1px solid",
          borderColor: theme.palette.primary.main,
          backgroundColor: theme.palette.background.default,
          boxShadow: "0px 2px 3px rgba(0, 0, 0, 0.1)",
          borderRadius: 2,
        }}
      >
        <TextField
          fullWidth
          variant="outlined"
          placeholder={searchPlaceholder}
          size="small"
          onChange={handleSearchChange} // Add onChange handler
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </AppBar>
    </div>
  );
};

export default Searchbar;