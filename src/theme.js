// src/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0f9e99", // Main color (used for buttons, icons, etc.)
      dark: "#0c8b87", // Darker shade (used on hover)
      contrastText: "#ffffff", // White text for contrast on primary.main
    },
    secondary: {
      main: "#ff6f61", // Complementary color (used for accents)
      dark: "#e65a50", // Darker shade for secondary
      contrastText: "#ffffff", // White text for contrast on secondary.main
    },
    error: {
      main: "#d32f2f", // Error color (used for error messages, alerts)
      contrastText: "#ffffff", // White text for contrast on error.main
    },
    warning: {
      main: "#ffa726", // Warning color (used for warnings, alerts)
      contrastText: "#000000", // Black text for contrast on warning.main
    },
    info: {
      main: "#29b6f6", // Info color (used for informational messages)
      contrastText: "#000000", // Black text for contrast on info.main
    },
    success: {
      main: "#66bb6a", // Success color (used for success messages, alerts)
      contrastText: "#000000", // Black text for contrast on success.main
    },
    background: {
      default: "white", // Default background color
      paper: "#ffffff", // Background color for paper-based components (e.g., cards)
      dark: "rgba(246, 241, 233, 0.2)", // Background color for AppBar or other areas
    },
    text: {
      primary: "#2d2d2d", // Primary text color (dark gray for readability)
      secondary: "#555555", // Secondary text color (lighter gray for less emphasis)
      disabled: "#bdbdbd", // Disabled text color (light gray)
    },
    action: {
      active: "#0f9e99", // Active state color (matches primary.main)
      hover: "rgba(15, 158, 153, 0.08)", // Hover state with transparency
      selected: "rgba(15, 158, 153, 0.16)", // Selected state with transparency
      disabled: "#bdbdbd", // Disabled state color
    },
  },
  typography: {
    fontFamily: "Sansation, Arial, sans-serif", // Custom font if needed
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
      color: "#2d2d2d", // Matches text.primary
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
      color: "#2d2d2d", // Matches text.primary
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 600,
      color: "#2d2d2d", // Matches text.primary
    },
    body1: {
      fontSize: "1rem",
      color: "#2d2d2d", // Matches text.primary
    },
    body2: {
      fontSize: "0.875rem",
      color: "#555555", // Matches text.secondary
    },
  },
});

export default theme;