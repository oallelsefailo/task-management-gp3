import { useNavigate } from "react-router-dom"
import "../components/signuplogin.css"

export default function SignupLogin () {
    const navigate = useNavigate();
    return (
        <>
        <div className= "logInPage">
                <img src="/assets/images/icons/em-logo.png" alt="Evil Monday Logo" />
                <div className="h1quote"> 
                    <h1>Welcome to EvilMonday, where you plot your takeover.</h1>
                    </div>
                <div class= "loginSignupButton">
                    <a href='/signup'/>
                        <button className="buttonlog" onClick={() => navigate('/signup')}>Sign up</button> 
                </div>
                <h2 className="loginSignupButton">OR</h2>
                <div class= "loginSignupButton">
                    <button className="buttonlog" onClick={() => navigate('/login')}>Log In</button>
                </div>
        </div>
        </>
    )
}