import { Navigate, useNavigate } from "react-router-dom";
import "../components/signuppage.css";
import { useState } from "react";


export default function SignupPage() {
  const navigate = useNavigate();

  const [user, SetUser] = useState({
    villainName: '',
    email: '',
    password: ''
  })

async function handleSubmit(e) {
  e.preventDefault()

  try {
    const response = await fetch('http://localhost:5000/SignupPage', {
      method: 'POST',
      headers: {
        Accept: "application/json",
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });

    if (response.ok) {
      navigate('/welcome');
    } else {
      console.error('Signup failed');
    }
  } catch (error) {
    console.error('Error during signup:', error);
  }
    navigate('/')
}

  return (
    <>
      <div className="signupPage">
        <img src="/assets/images/icons/em.png" alt="Evil Monday Logo" />
        <h1 className="headerInfo">
          Sign up, and take over the world! ...accordingly.
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="SignupLabelinput">
            <label>Villain Name:</label>
            <input
            required
              value={user.villainName}
              onChange={e => SetUser({ ...user, villainName: e.target.value})}
              className="infobar"
              type="text"
              placeholder="enter villain name"
              id= 'villainName'
              name= 'villainName'
            />
            <label className="text">
              (don't worry. your evil identity is safe with us)
            </label>
          </div>
          <div className="SignupLabelinput">
            <label>Email:</label>
            <input
            required 
              value= {user.email}
              onChange= {e => SetUser({ ...user, email: e.target.value})}
              className="infobar" 
              type="email" 
              placeholder="enter email" 
              id= 'email'
              name= 'email' />
          </div>
          <div className="SignupLabelinput">
            <label>Password:</label>
            <input
            required
              value= {user.password}
              onChange={e => SetUser({ ...user, password: e.target.value})}
              className="infobar"
              type="password"
              placeholder="enter password"
              id= 'password'
              name= 'password'
            />
            <label className="text">
              (dont forget this. if not, evil plans will be lost)
            </label>
          </div>
        
        <div>
          <button className="signupButtons" type='submit' value='Sign up'>Sign me up!</button>
          <button className="signupButtons" onClick={() => navigate("/")}>
            Main Page
          </button>
        </div>
        </form>
      </div>
    </>
  );
}
