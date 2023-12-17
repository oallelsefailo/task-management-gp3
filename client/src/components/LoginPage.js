import "../components/loginpage.css"
import { useNavigate } from "react-router-dom";

export default function LoginPage({ onLogin }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="logInPage">
        <img src="/assets/images/icons/em-logo.png" alt="Evil Monday Logo" />
        <form method="" action="">
          <div className="labelInput">
            <label>Villain UserName:</label>
            <input
              className="inputbar"
              type="email"
              placeholder="enter email"
            />
          </div>
          <br />
          <div className="labelInput">
            <label>Secret Password:</label>
            <input
              className="inputbar"
              type="password"
              placeholder="password"
            />
            <label className="rightsidetext">
              (enter correctly to get into lair)
            </label>
          </div>
        </form>
        <div>
          <a href="/task" />
          <button className="loginButton" onClick={() => navigate("/task")}>
            Enter the Evil Lair
          </button>
          <a href="/" />
          <button className="loginButton" onClick={() => navigate("/")}>
            Return to sign up{" "}
          </button>
        </div>
      </div>
    </>
  );
}