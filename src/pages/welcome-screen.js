import React from "react";
import { Link } from "react-router-dom";
export { WelcomeScreen };

const WelcomeScreen = () => {

  return (
    <div className="placeholder-card content-view">
        <img src="./images/uprate_logo.svg"/>
        <h1 className="ts-2">Welcome</h1>
        <p>Adipisicing aliqua dolor id non et do ipsum. Excepteur ea laborum culpa sit cillum Lorem in Lorem id aliquip ipsum.</p>
        <Link className="btn" to="/alljobs">Lets Get Started</Link>
    </div>
  )
}