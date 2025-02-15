import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const InterviewCard = ({ interview }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/interview/${interview.id}`);
  };

  return (
    <Card className="shadow-lg rounded-lg">
      <CardMedia
        component="img"
        height="140"
        image={interview.image}
        alt={interview.title}
      />
      <CardContent>
        <Typography variant="h6">{interview.title}</Typography>
        <Typography variant="subtitle1" color="textSecondary">
          {interview.name} - {interview.batch}
        </Typography>
        <Typography variant="body2" className="mt-2">
          {interview.description}
        </Typography>
        <Button
          sx={{ mt: 2, borderColor: "orange", color: "orange" }}
          variant="outlined"
          onClick={handleNavigate}
        >
          Know More
        </Button>
      </CardContent>
    </Card>
  );
};

export default InterviewCard;

