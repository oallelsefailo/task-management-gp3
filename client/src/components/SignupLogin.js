import React from "react";
import { useNavigate } from "react-router-dom";
import "../components/signuplogin.css";

export default function SignupLogin() {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        // Simulate a condition where login is not added
        const loginNotAdded = true;

        if (loginNotAdded) {
            // If login is not added, navigate to the error page
            navigate("./components/Error404"); // Replace '/error' with the path of your error page
        } else {
            // If login is added, navigate to the login page
            navigate("./components/LoginPage");
        }
    };

    return (
        <>
            <div className="logInPage">
                <img src="/assets/images/icons/em-logo.png" alt="Evil Monday Logo" />
                <div className="h1quote">
                    <h1>Welcome to EvilMonday, where you plot your takeover.</h1>
                </div>
                <div className="loginSignupButton">
                    <button className="buttonlog" onClick={() => navigate('/signup')}>
                        Sign up
                    </button>
                </div>
                <h2 className="loginSignupButton">OR</h2>
                <div className="loginSignupButton">
                    <button className="buttonlog" onClick={handleLoginClick}>
                        Log In
                    </button>
                </div>
            </div>
        </>
    );
}
