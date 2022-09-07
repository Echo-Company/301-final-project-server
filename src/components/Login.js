import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
// import loginBG from '../img/loginBG.png'
import './LoginSplashScreen.css';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="loginSplashScreen" onClick={() => loginWithRedirect()}>
    </div>
  );
};

export default LoginButton;