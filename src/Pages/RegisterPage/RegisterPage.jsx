/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import EmailInput from "../../Components/EmailInput/EmailInput";
import PasswordInput from "../../Components/PasswordInput/PasswordInput";
import {useContext} from "react";
import AppContext from "../../Context/AppContext";
import { auth } from "../../Services/Firebase";
import {useNavigate } from "react-router-dom";
import "./RegisterPage.css";
import addUserToFirestore from "../../Services/FireBaseLogin";
function RegisterPage() {

  const {email,setEmail,password,setPassword,confirmPassword,setConfirmPassword} = useContext(AppContext);
  const navigate = useNavigate();
  const handleRegister = async () => {
      if((email !== "" && password !== "" && confirmPassword !== "") && (password === confirmPassword)){ 
        try {
          const response = await auth.createUserWithEmailAndPassword(email, password);
          if(response){
            const { uid, email } = response.user;
            addUserToFirestore(uid, "User", email, "https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png");
          }
          navigate(`/chatPage/${encodeURIComponent(auth.currentUser.uid)}`);
          setEmail("");
          setPassword("");
          setConfirmPassword("");
        } catch (error) {
          // Caso o usuário não exista ou ocorra algum erro no login
          alert("Erro ao efetuar o login");
        }

      }else{
        alert("Preencha todos os campos");
      }
  }

  useEffect(() => {
      setConfirmPassword('');
      setPassword('');
      setEmail('');
  },[])


  return (
        <div className="login__page">
          <div className="login__image">
            
          </div>
          <div className="login__form">
            <div className="login__content">
              <div className="login__title">
                <h2 className="login__text__1">
                  Vamos criar uma nova conta?
                </h2>
                <p className="login__text__2">
                  Preencha os campos necessários
                </p>
              </div>
              <EmailInput data = {{email,setEmail }}/>
              <PasswordInput data = {{password: password, setPassword: setPassword,hint:"Senha"}}/>
              <PasswordInput data = {{password: confirmPassword, setPassword: setConfirmPassword,hint:"Confirme sua senha"}}/>
              <button className="LoginButton" type="submit" onClick={handleRegister} >
                Cadastrar
              </button>
              <p className="login__title login__text__2">Após criar o chat será aberto</p>
              
            </div>
          </div>
        </div>

  );
}

export default RegisterPage;
