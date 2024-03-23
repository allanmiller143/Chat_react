import React from "react";
import { useContext } from "react";
import { IoIosSearch } from "react-icons/io";
import { SlOptionsVertical } from "react-icons/sl";
import "./ChatHeader.css";
import AppContext from "../../Context/AppContext";
function ChatHeader() {
    const {currentChatInfo} = useContext(AppContext);
    return (
      <div className="ChatHeader">
        <div className="ChatUserInfo">
          <img className="ChatHeaderUserPhoto" src={currentChatInfo.photoURL} alt={currentChatInfo.name} />
          <h1 className="ChatUserName">{currentChatInfo.name}</h1>
        </div>
        <div className="ChatOptions">
          <IoIosSearch className="chatButton" onClick={() => alert("Funcionalidade de pesquisa em desenvolvimento")}/>
          <SlOptionsVertical className="chatButton" onClick={() => alert("Funcionalidade de opções em desenvolvimento")}/>
        </div>
        
      </div>
    );
}

export default ChatHeader;

