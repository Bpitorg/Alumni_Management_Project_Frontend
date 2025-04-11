// components/StatsCardGrid.jsx
import StatsCard from "./StatsCard";
import { useTheme } from "@mui/material";

const StatsCardGrid = () => {
  const theme = useTheme();

  return (
    <div className="flex justify-center gap-10 m-2 p-3">
      {/* Card 1 - BPIT Community */}
      <StatsCard
        to="/community"
        title="BPIT Community"
        subtitle="Active Members"
        value="300"
        statusText="Growing"
        gradient={theme.palette.primary.gradient}
        textColor="text-white"
        valueColor="text-white"
        statusColor="text-white/80"
      />

      {/* Card 2 - Open Opportunities */}
      <StatsCard
        to="/opportunities"
        title="Open Opportunities"
        subtitle="Available now"
        value="20"
        statusText="New positions"
      />

      {/* Card 3 - Active Mentorship Programs */}
      <StatsCard
        to="/mentorship"
        title="Active Mentorship"
        subtitle="Ongoing"
        value="12"
        statusText="Programs running"
      />

      {/* Card 4 - Upcoming Events */}
      <StatsCard
        to="/events"
        title="Upcoming Events"
        subtitle="This month"
        value="4"
        statusText="Scheduled"
      />
    </div>
  );
};

export default StatsCardGrid;