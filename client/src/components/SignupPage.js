import { Navigate, useNavigate } from "react-router-dom";
import '../components/signuppage.css'

export default function SignupPage () {
    const navigate = useNavigate();
    return (
        <>
        <div className= "signupPage">
        <img src="/assets/images/icons/em-logo.png" alt="Evil Monday Logo" />
        <h1 className="headerInfo" >Sign up, and take over the world! ...accordingly.</h1>
        <form method="" action="">
            <div className="SignupLabelinput">
                <label >Villain Name:</label>
                <input className="infobar"type= "text" placeholder='enter villian name'/>
                <label className="text">(don't worry. your evil identity is safe with us)</label>
                </div>
                <div className="SignupLabelinput">
                <label >Email:</label>
                <input className="infobar"type= "email" placeholder='enter email'/>
                </div>
                    <div className="SignupLabelinput">
                        <label>Password:</label>
                        <input className="infobar" type="password" placeholder="enter password" />
                        <label className="text">(dont forget this. if not, evil plans will be lost)</label>
                        </div>
                        </form>  
                        <div>
                            <a href='/'/>
                            <button className='signupButtons'>Sign me up!</button>
                            <a href='/task'/>
                            <button className='signupButtons' onClick={() => navigate('/')}>Main Page</button>
                            </div>
                            </div>  
                            </>
                            )
                        }