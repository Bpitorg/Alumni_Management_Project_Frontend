import { useState } from "react";
import { Link } from "react-router-dom";
const LoginComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className="mx-4">
      {isLoggedIn ? (
        <Link to="/student-portfolio" className="">
          Profile
        </Link>
      ) : (
        <Link to="/login" className="relative px-4 py-2 border-gray-400 font-medium text-lg ">
          Login
        </Link>
      )}
    </div>
  );
};

export default LoginComponent;
