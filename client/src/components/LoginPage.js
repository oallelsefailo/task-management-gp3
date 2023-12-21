import "../components/loginpage.css"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function LoginPage({ onLogin }) {
  const navigate = useNavigate();
  
  const [ userCredentials, setUserCredentials ] = useState({
    email: '',
    password: ''
  })

  async function handleSubmit(e) {
    e.preventDefault()

    await fetch('http://localhost:3000/LoginPage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }, 
    body: JSON.stringify(userCredentials)
    })
    navigate('/task')
  }

  return (
    <>
      <div className="logInPage">
        <img src="/assets/images/icons/em.png" alt="Evil Monday Logo" />
        <form onSubmit={handleSubmit}>
          <div className="labelInput">
            <label>Villain Email:</label>
            <input
            required
              value={userCredentials.email}
              onChange={e => setUserCredentials({ ...userCredentials, email: e.target.value})}
              className="inputbar"
              type="email"
              placeholder="enter email"
              id='email'
              name='email'
            />
          </div>
          <br />
          <div className="labelInput">
            <label>Secret Password:</label>
            <input
            required
              value={userCredentials.password}
              onChange={e => setUserCredentials({ ...userCredentials, password: e.target.value})}
              className="inputbar"
              type="password"
              placeholder="password"
              id= 'password'
              name= 'password'
            />
            <label className="rightsidetext">
              (enter correctly to get into lair)
            </label>
          </div>
        
        <div>
          <button className="loginButton" type='submit' Value='logged in '>
            Enter the Evil Lair
          </button>
          <a href="/" />
          <button className="loginButton" onClick={() => navigate("/")}>
            Return to sign up{" "}
          </button>
        </div>
        </form>
      </div>
    </>
  );
}