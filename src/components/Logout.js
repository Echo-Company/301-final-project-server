import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button onClick={() => logout({ returnTo: window.location.origin })} 
    style={{
    boxShadow: '3px 4px 0px 0px #899599',
    background:'linear-gradient(to bottom, #ededed 5%, #bab1ba 100%)',
    backgroundColor: '#ededed',
    borderRadius:'15px',
    border:'1px solid #d6bcd6',
    cursor:'pointer',
    color:'#3a3c3d',
    textDecoration:'none',
    textShadow:'0px 1px 0px #e1e2ed',
    width: '100px'
    }}>
      logout
    </button>
  );
};

export default LogoutButton;