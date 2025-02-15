import React, { useState } from "react";
import { TextField, Menu, MenuItem, Button } from "@mui/material";
import {SortRounded } from "@mui/icons-material";
import { InputAdornment,  Pagination , Card, CardContent, CardMedia, Typography,  Grid2, Paper, Box } from "@mui/material";
import { achievements } from "../../constants/dummyData";
import { Add, Search } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const SearchSort = ({ onSearch, onSort }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [sortOption, setSortOption] = useState("Newest first");
  const [search, setSearch] = useState("");

  const navigate = useNavigate()

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (option) => {
    if (option) {
      setSortOption(option);
      if (onSort) onSort(option);
    }
    setAnchorEl(null);
  };

  const handleNavigate = () =>{
    navigate("/add-achievement")
  }

  return (    
    <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md mt-3">
      <Box sx={{ flexGrow: 1 }}>
        <Grid2 container spacing={2} display={"flex"} justifyContent={"center"}>
          <Grid2 xs={12} md={8} >
          <TextField
            label="Search"
            id="achievement-search"
            size="small"
            sx={{width: {sm:'40%' , md:'90%'} , borderRadius:'50px',marginLeft:{sm:'10px',md:'50px'}}}
            slotProps={{
              input: {
                startAdornment: <InputAdornment position="start"><Search/></InputAdornment>,
                style: { borderRadius: "30px" },
              },
            }}
            variant="outlined"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          </Grid2>

          <Grid2 xs={6} md={2}>
             <Button  onClick={handleMenuOpen} variant="contained" startIcon={<SortRounded/>} size="medium" 
               sx={{marginTop:'3px' , alignSelf:{sm:'start' , md:'end'},marginLeft:{sm:'5px',md:'30px'}}}
                >
               Sort 
             </Button>

        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => handleMenuClose(null)}>
          <MenuItem onClick={() => handleMenuClose("Newest first")}>Newest first</MenuItem>
          <MenuItem onClick={() => handleMenuClose("Oldest first")}>Oldest first</MenuItem>
        </Menu>
          </Grid2>

          <Grid2 xs={6} md={2}>
          <Button variant="contained" startIcon={<Add/>} size="medium" 
                 onClick={handleNavigate}
                 sx={{marginTop:'3px' , alignSelf:{sm:'start' , md:'end'},marginLeft:{sm:'15px',md:'80px'}}}>
                 Add 
              </Button>
          </Grid2>
         </Grid2> 
         </Box>    
    </div>
  );
};

export default SearchSort;
