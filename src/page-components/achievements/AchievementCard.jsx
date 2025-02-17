import React from 'react'
import { TextField,InputAdornment, MenuItem, Pagination , Card, CardContent, CardMedia, Typography, Button, Grid2, Paper, Box } from "@mui/material";
import { useNavigate } from 'react-router-dom';

const AchievementCard = (achievement) => {
  //  console.log("in achivement card ",achievement.achievement)
  const navigate = useNavigate()

  const handleNavigate = () =>{
       navigate(`/achievement/${achievement.id}`,{state : achievement})
  }

  achievement=achievement.achievement

    return (
        <div>
            <Card key={achievement.id} className="shadow-lg rounded-lg">
                <CardMedia
                    component="img"
                    height="140"
                    image={achievement.image}
                    alt={achievement.title}
                />
                <CardContent >
                    <Typography variant="h6">{achievement.title}</Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        {achievement.name} - {achievement.batch}
                    </Typography>
                    <Typography variant="body2" className="mt-2">
                        {achievement.description.length > 50 ? achievement.description.slice(0,100):achievement.description}
                    </Typography>
                    <Button sx={{ mt: 2 , borderColor:'orange' , color:'orange' }} variant="outlined" onClick={handleNavigate}>
                        Know More
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}

export default AchievementCard