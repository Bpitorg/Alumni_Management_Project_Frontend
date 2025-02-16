import { useState } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const LoginComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Mock authentication state

  return (
    <div>
      {isLoggedIn ? (
        <Button component={Link} to="/student-portfolio" variant="text" sx={{ color: "gray", "&:hover": { color: "orange" } }}>
          Profile
        </Button>
      ) : (
        <Button component={Link} to="/login" variant="outlined" sx={{ borderColor: "gray", color: "gray", "&:hover": { borderColor: "orange", backgroundColor: "rgba(255,165,0,0.1)" } }}>
          Login
        </Button>
      )}
    </div>
  );
};

export default LoginComponent;

