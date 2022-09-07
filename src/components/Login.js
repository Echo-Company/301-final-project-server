import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import loginBG from '../img/loginBG.png'

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();


  return (
    <img onClick={() => loginWithRedirect()} src={loginBG} alt="background for login button" style={{cursor: 'pointer', }}/>
  );
};

export default LoginButton;