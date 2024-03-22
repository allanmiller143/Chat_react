import React from "react";
import { useParams } from 'react-router-dom';
function ChatPage() {
  const { id } = useParams();
    return (
      <div>
        {`chats do usuario com id ${id}`}
      </div>
    );
}

export default ChatPage