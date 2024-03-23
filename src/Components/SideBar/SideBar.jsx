import React from "react";
import SidebarHeader from "../SidebarHeader/SidebarHeader";
import SidebarChats from "../SidebarChats/SidebarChats";
import "./SideBar.css";
import SidebarChatItem from "../SidebarChatItem/SidebarChatItem";
import {auth} from "../../Services/Firebase";

function Sidebar() {

  //const {photoURL,displayName,lastMessage} = data;

    return (
      <div className="Sidebar">
        <SidebarHeader/>
        <SidebarChats/>
  
      </div>
    );
}

export default Sidebar;
