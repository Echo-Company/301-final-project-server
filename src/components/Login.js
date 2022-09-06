import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()} style={{marginTop: '25%', boxShadow: "0px 10px 14px -7px #3e7327", background: "linear-gradient(to bottom, #77b55a 5%, #72b352 100%)", backgroundColor: "#77b55a", borderRadius: "4px", border: "1px solid #4b8f29", display: "inline-block", cursor: "pointer", color: "#ffffff", fontFamily: "Arial", fontSize: "20px", fontWeight: "bold", padding: "20px 48px", textDecoration: "none", textShadow: "0px 1px 0px #5b8a3c"}}>Log In</button>;
};

export default LoginButton;