import React from "react";
import propTypes from "prop-types";
import { useContext } from "react";
import AppContext from "../../Context/AppContext";
import ChatHeader from "../ChatHeader/ChatHeader";
import "./Chat.css";
import ChatInputMessage from "../ChatInputMessage/ChatInputMessage";
import ChatBody from "../ChatBody/ChatBody";
function Chat({data}) {
    const {currentChat}  = useContext(AppContext);
    
    return (
      <div className="Chat">
        <ChatHeader data={data} />
        <ChatBody/>
        <ChatInputMessage/>
      </div>
    );
}

export default Chat;

Chat.propTypes = {
    data : propTypes.shape({}),
}.isRequired;

