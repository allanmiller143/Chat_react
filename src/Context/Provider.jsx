import React from 'react';
import propTypes from 'prop-types';
import AppContext from './AppContext';
import {useState} from 'react';

function Provider({children}){
  const [email, setEmail] = useState(""); // isso vai ser uma lista de produtos, o valor dentro do userState é o valor inicial 
  const [password, setPassword] = useState(""); // isso vai ser uma lista de produtos, o valor dentro do userState é o valor inicial 
  const [confirmPassword, setConfirmPassword] = useState(""); // isso vai ser uma lista de produtos, o valor dentro do userState é o valor inicial 
  const [newEmail, setNewEmail] = useState(""); // isso vai ser uma lista de produtos, o valor dentro do userState é o valor inicial 
  const [currentChat, setCurrentChat] = useState(null);
  const [currentChatInfo, setCurrentChatInfo] = useState(null);

  const value = {
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    newEmail,
    setNewEmail,
    currentChat,
    setCurrentChat,
    setCurrentChatInfo,
    currentChatInfo
    

  };

  return (
    <AppContext.Provider value = {value}>
      {children}
    </AppContext.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: propTypes.any,
}.isRequired;
