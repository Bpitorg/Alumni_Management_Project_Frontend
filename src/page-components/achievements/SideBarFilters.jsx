import React, { useState } from "react";
import { Slider, Switch, TextField, MenuItem, Button } from "@mui/material";

const SidebarFilters = ({ onApply }) => {
  const [remote, setRemote] = useState(false);
  const [batch, setBatch] = useState("");
  const [category, setCategory] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("");

  const handleClearFilters = () =>{
     console.log("in handle filters ")
  }

  return (
    <div className="w-full md:w-80 bg-white p-4 rounded-lg shadow-md mt-10">
       <div className="flex align-center justify-between">
          <h4 className="font-bold">Apply Filter</h4>
          <button onClick={()=>handleClearFilters()} className="text-red-800 font-semibold">Clear</button>
       </div>
     
      <div className="my-4">
        <label className="font-semibold text-gray-700">Batch</label>
        <TextField
          select
          fullWidth
          size="small"
          value={batch}
          onChange={(e) => setBatch(e.target.value)}
        >
          <MenuItem value="2023">2023</MenuItem>
          <MenuItem value="2024">2024</MenuItem>
          <MenuItem value="2022">2022</MenuItem>
          <MenuItem value="2021">2021</MenuItem>
        </TextField>
      </div>

      <div className="mb-4">
        <label className="font-semibold text-gray-700">Experience Level</label>
        <TextField
          select
          fullWidth
          size="small"
          value={experienceLevel}
          onChange={(e) => setExperienceLevel(e.target.value)}
        >
          <MenuItem value="beginner">Beginner</MenuItem>
          <MenuItem value="intermediate">Intermediate</MenuItem>
          <MenuItem value="expert">Expert</MenuItem>
        </TextField>
      </div>

      <div className="mb-4">
        <label className="font-semibold text-gray-700">Category</label>
        <TextField
          select
          fullWidth
          size="small"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <MenuItem value="job">Job</MenuItem>
          <MenuItem value="internship">Intership</MenuItem>
          <MenuItem value="research-paper">Research Paper</MenuItem>
        </TextField>
      </div>

      <div className="flex justify-between items-center mb-4">
        <span className="font-semibold text-gray-700">Remote work</span>
        <Switch checked={remote} onChange={() => setRemote(!remote)} />
      </div>

      <Button
        variant="contained"
        fullWidth
        onClick={() => onApply({  remote, batch, experienceLevel })}

        sx={{color:'black' , backgroundColor:'orange'}}
      >
        Apply
      </Button>
    </div>
  );
};

export default SidebarFilters;
