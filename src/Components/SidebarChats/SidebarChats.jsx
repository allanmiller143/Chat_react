import React from "react";
import "./SidebarChats.css";
import SidebarChatItem from "../SidebarChatItem/SidebarChatItem";
import { useCollection } from "react-firebase-hooks/firestore";
import { auth, db } from "../../Services/Firebase";

function SidebarChats() {
  const findAll = db
    .collection("chats")
    .where("users", "array-contains", auth.currentUser?.email);
  const [chatsSnapshot] = useCollection(findAll);

  return (
    <div className="SidebarChats">
      {chatsSnapshot?.docs.map((chat) => (
        <SidebarChatItem
          key={chat.id}
          data={chat.data()}
          chatId={chat.id} // Passando o ID do chat como propriedade
        />
      ))}
    </div>
  );
}

export default SidebarChats;
