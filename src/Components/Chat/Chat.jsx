import React from "react";
import propTypes from "prop-types";
import { useContext } from "react";
import AppContext from "../../Context/AppContext";
function Chat({data}) {
    const {currentChat, setCurrentChat}  = useContext(AppContext);
    
    return (
      <div className="Chat">
        Chat
      </div>
    );
}

export default Chat;

Chat.propTypes = {
    data : propTypes.shape({}),
}.isRequired;

