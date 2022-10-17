import React from "react";
import backgroundImage from "./background.jpg"

const backgroundStyle = {
  backgroundImage: `url(${backgroundImage})`,
  height: "100vh",
  backgroundPosition: "center",
  backgroundRepeat: "noRepeat",
  backgroundSize: "cover",
}

const titleStyle = {
  width: "299px",
  height: "116px",
  left: "108px",
  top: "227px",
  fontFamily: 'Inter',
  fontStyle: "italic",
  fontWeight: "600",
  fontSize: "96px",
  lineHeight: "116px",
  color: "#000000"
}

const loginButton = {
  position: "absolute",
  width: "180px",
  height: "50px",
  left: "1069px",
  top: "60px",
  fontSize: "18px",
  display: "inline-block",
  padding: "0.5em 1em 0.3em",
  border: "none",
  borderRadius: "5px",
  backgroundImage: "linear-gradient(#0ba6ee 0%, #539ccc 100%)",
  cursor: "pointer"
}

const registerButton = {
  position: "absolute",
  width: "180px",
  height: "50px",
  left: "1069px",
  top: "140px",
  fontSize: "18px",
  display: "inline-block",
  padding: "0.5em 1em 0.3em",
  border: "none",
  borderRadius: "5px",
  backgroundImage: "linear-gradient(#0ba6ee 0%, #539ccc 100%)",
  cursor: "pointer"
}

function Title() {
  return (
      <div id = "title" style={titleStyle}>
          ChillChill 
          YOGAFIRE
      </div>   
  )
}

function TopPage() {
  return (
    <div className='top-page' style={backgroundStyle}>
      <Title />
      <div className="top-buttons">
        <button className="login-button" style={loginButton}>ログイン</button>
        <button className="register-button" style={registerButton}>会員登録</button>
      </div>
    </div>
  )
}

export default TopPage;
