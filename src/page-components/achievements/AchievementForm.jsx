import React, { useState } from "react";
import { TextField, MenuItem, Button, Card, CardContent } from "@mui/material";

const AchievementForm = ({ onSubmit }) => {
  const [achievement, setAchievement] = useState({
    title: "",
    name: "",
    batch: "",
    category: "",
    description: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAchievement({ ...achievement, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setAchievement({ ...achievement, image: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(achievement);
    console.log("Achievement Submitted:", achievement);
  };

  const styles = { mb:3 , width:'80%' , ml:'50px'}
  return (
    <Card className="shadow-lg rounded-lg w-full md:w-2/5  mx-auto mt-10">
      <CardContent>
        <h2 className="text-2xl font-semibold text-center mb-6">Add Your Achievement</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <TextField
            label="Achievement Title"
            name="title"
            value={achievement.title}
            onChange={handleChange}
            required
            sx={styles}
          />

          <TextField
            label="Your Name"
            name="name"
            value={achievement.name}
            onChange={handleChange}
            required
            sx={styles}
          />

          <TextField
            label="Batch"
            name="batch"
            select
            value={achievement.batch}
            onChange={handleChange}
            required
            sx={styles}
          >
            <MenuItem value="2023">2023</MenuItem>
            <MenuItem value="2024">2024</MenuItem>
            <MenuItem value="2025">2025</MenuItem>
          </TextField>

          <TextField
            label="Category"
            name="category"
            select
            value={achievement.category}
            onChange={handleChange}
            required
            sx={styles}
          >
            <MenuItem value="job">Job</MenuItem>
            <MenuItem value="internship">Internship</MenuItem>
            <MenuItem value="research-paper">Research Paper</MenuItem>
          </TextField>

          <TextField
            label="Description"
            name="description"
            multiline
            rows={3}
            value={achievement.description}
            onChange={handleChange}
            required
            sx={styles}
          />

          <div>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="block w-[310px] md:w-[460px] text-sm text-gray-500 ml-13 border border-gray-400 p-3 rounded"
              required
            />
          </div>

          <Button type="submit" variant="contained"  sx={{...styles  , backgroundColor:'orange' , color:'black' , mb:1}}>
            Submit
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default AchievementForm;
