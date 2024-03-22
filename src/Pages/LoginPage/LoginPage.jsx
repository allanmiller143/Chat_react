import React from "react";
import EmailInput from "../../Components/EmailInput/EmailInput";
import "./LoginPage.css";
import PasswordInput from "../../Components/PasswordInput/PasswordInput";
import LoginButton from "../../Components/LoginButton/LoginButton";
import SignInButton from "../../Components/SignInButton/SignInButton";
import { auth, provider } from "../../Services/Firebase";
function LoginPage() {


    const HandleGoogleLogin = async () => {
      try {
          await auth.signInWithPopup(provider);
      } catch (error) {
          console.error("Error signing in with Google:", error);
      }
  };

    const HandleFacebookLogin = () => {
      alert("Facebook Login");
    };

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
            <EmailInput/>
            <PasswordInput/>
            <LoginButton/>
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