import React from "react";
import { useNavigate } from "react-router-dom";
import "../components/signuplogin.css";

export default function SignupLogin() {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        const loginNotAdded = true;

        if (loginNotAdded) {
            navigate("./components/Error404");
        } else {
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
