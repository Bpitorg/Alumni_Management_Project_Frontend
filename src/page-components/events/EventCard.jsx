import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const EventCard = ({ event }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/event/${event.id}`);
  };

  return (
    <Card className="shadow-lg rounded-lg">
      <CardMedia
        component="img"
        height="140"
        image={event.image}
        alt={event.name}
      />
      <CardContent>
        <Typography variant="h6">{event.name}</Typography>
        <Typography variant="subtitle1" color="textSecondary">
          {event.date} 
        </Typography>
        <Typography variant="body2" className="mt-2">
          {event.description}
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

export default EventCard;