import React from "react";
import { useParams } from 'react-router-dom';
import './ChatPage.css';
import Sidebar from "../../Components/SideBar/SideBar";
import Chat from "../../Components/Chat/Chat";
import { useContext } from "react";
import AppContext from "../../Context/AppContext";
import ChatEmpty from "../../Components/ChatEmpty/ChatEmpty";

function ChatPage() {
  const {currentChat}  = useContext(AppContext);
  const { id } = useParams();
    return (
      <div className="ChatPage">
        <Sidebar/>
        {currentChat === null ? <ChatEmpty/> : <Chat/>}
      </div>
    );
}

export default ChatPage