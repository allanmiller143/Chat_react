import React from "react";
import EmailInput from "../../Components/EmailInput/EmailInput";
import "./LoginPage.css";
import PasswordInput from "../../Components/PasswordInput/PasswordInput";
import LoginButton from "../../Components/LoginButton/LoginButton";
import SignInButton from "../../Components/SignInButton/SignInButton";
import { auth, provider } from "../../Services/Firebase";
import { Link, useNavigate } from "react-router-dom";
import addUserToFirestore from "../../Services/FireBaseLogin";
import {useContext,useEffect} from "react";
import AppContext from "../../Context/AppContext";
function LoginPage() {
  const navigate = useNavigate();
    useEffect(() => {

      setPassword('');
      setEmail('');
  },[])
  const HandleGoogleLogin = async () => {
    try {
      const response = await auth.signInWithPopup(provider);
      if (response) {
        const { uid, displayName, email, photoURL } = response.user;
        addUserToFirestore(uid, displayName, email, photoURL);
        navigate(`/chatPage/${encodeURIComponent(auth.currentUser.uid)}`);
      }
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };
  const HandleFacebookLogin = () => {
    alert(`Welcome ${auth.currentUser.displayName}`);
  };

  const {email,setEmail} = useContext(AppContext);
  const {password,setPassword} = useContext(AppContext);

  return (
    <div className="login__page">
      <div className="login__image">
          <img src="https://i.pinimg.com/564x/89/4a/86/894a868c809ed893ae5f5563bb805068.jpg" alt="imagem"  className="login__image_img"/>
      </div>
      <div className="login__form">
        <div className="login__content">
          <div className="login__title">
            <h2 className="login__text__1">
              Faça login na sua conta 
            </h2>
            <p className="login__text__2">
              Bem vindo de volta, sentimos a sua falta
            </p>
          </div>
          <EmailInput data = {{email ,setEmail}} />
          <PasswordInput data = {{password, setPassword,hint: "Password"}}/>
          <LoginButton/>
          <div className="login__register">
            <p>Não possui conta? </p>
            <Link to="/register">Registre-se</Link>
          </div>
          <p>Ou continue com </p>
          <div className="login__buttons">
            <SignInButton data = {{label: "Google", onClick: HandleGoogleLogin}}/>
            <SignInButton data = {{label: "Facebook", onClick: HandleFacebookLogin}}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
