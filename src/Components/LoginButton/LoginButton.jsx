import React, { useContext } from "react";
import './LoginButton.css';
import AppContext from "../../Context/AppContext";
import { auth } from "../../Services/Firebase";
import { useNavigate } from "react-router-dom";

function LoginButton() {
  const { email, setEmail, password, setPassword } = useContext(AppContext);
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (email !== "" && password !== "") {
      try {
        const response = await auth.signInWithEmailAndPassword(email, password);

        if (response) {
        
          navigate(`/chatPage/${encodeURIComponent(response.user.uid)}`);
        }

      } catch (error) {
        // Caso o usuário não exista ou ocorra algum erro no login
        alert("Erro ao efetuar o login");
      }

      setEmail("");
      setPassword("");
    } else {
      alert("Preencha todos os campos");
    }
  }

  return (
    <button className="LoginButton" type="submit" onClick={handleLogin}>
      <p className="LoginButton__text">Entrar</p>
    </button>
  );
}

export default LoginButton;
