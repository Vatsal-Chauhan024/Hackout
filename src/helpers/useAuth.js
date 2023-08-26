import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the JWT token exists in sessionStorage
    const token = sessionStorage.getItem("token");

    if (!token) {
      // If the token doesn't exist, redirect the user to the login page
      navigate("/login");
    }
  }, [navigate]);

  return navigate; // Return the navigate function for use in components
};

export default useAuth;
