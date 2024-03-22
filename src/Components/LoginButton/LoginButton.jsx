import React from "react";
import './LoginButton.css';
function LoginButton() {
    const handleLogin = () => {
        alert('Login');
    }
    
    return (
      <button className="LoginButton" type="submit" onClick={handleLogin}>
        <p className="LoginButton__text">Entrar</p>
      </button>);
}

export default LoginButton;;