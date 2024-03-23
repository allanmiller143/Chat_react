import React, { useContext, useState } from "react";
import './ChatInputMessage.css';
import { IoMdSend } from "react-icons/io";
import { sendMessage } from "../../Services/FirebaseChatFunctions";
import { auth } from "../../Services/Firebase";
import AppContext from "../../Context/AppContext";

function ChatInputMessage() {
    const [newMessage, setNewMessage] = useState("");
    const { currentChat } = useContext(AppContext);

    const handleSubmit = async (e) => {
     
        const newMessageContent = {
            content: newMessage,
            timestamp: new Date(),
            sender: auth.currentUser.email
        };
        await sendMessage(currentChat, newMessageContent);
        setNewMessage(""); // Limpa o campo de mensagem após enviar
    }

    return (
        <div className="ChatInputMessage">
            <input
                type="text"
                placeholder="Escreva uma mensagem..."
                className="ChatInputMessageInput"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
            />
            <button type="button" className="ChatInputMessageButton" onClick={handleSubmit}>
                <IoMdSend />
            </button>
        </div>
    )
}

export default ChatInputMessage;
