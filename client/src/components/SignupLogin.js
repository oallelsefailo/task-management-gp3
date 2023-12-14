import { useNavigate } from "react-router-dom"
import "../components/signuplogin.css"

export default function SignupLogin () {
    const navigate = useNavigate();
    return (
        <>
        <div className= "logInPage">
                <img src="/assets/images/icons/em-logo.png" alt="Evil Monday Logo" />
                <h1>Welcome to EvilMonday, where you plot your takeover.</h1>
                <div>
                    <a href='/task'/>
                        <button>Sign up</button> 
                </div>
                <div>
                    <button>Log In</button>
                </div>
        </div>
        </>
    )
}