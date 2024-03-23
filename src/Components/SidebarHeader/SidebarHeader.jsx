import React, { useState,useContext } from "react";
import "./SidebarHeader.css";
import { auth } from "../../Services/Firebase";
import { MdDonutLarge, MdChat, MdMoreVert } from "react-icons/md";
import InsertNewChat from "../InsertNewChat/InsertNewChat";
import AppContext from "../../Context/AppContext";
import { useNavigate } from "react-router-dom";
import { useCollection } from "react-firebase-hooks/firestore";

function SidebarHeader() {
  const navigate = useNavigate();
  const [openDialog, setOpenDialog] = useState(false); // Estado para controlar a abertura do diálogo

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
    setNewEmail("");
  };
  const handleSignOut = () => {
    auth.signOut();
    navigate("/");
  }

  const {newEmail,setNewEmail} = useContext(AppContext);

  return (
    <div className="SidebarHeader">
      <button className="SidebarHeaderAvatar" type="submit" onClick={handleSignOut}>
        <img className="SidebarHeaderAvatar" src={auth.currentUser?.photoURL} alt={auth.currentUser?.displayName} />
      </button>
      
      <div className="SidebarHeaderButtons">
        <MdDonutLarge className="SidebarHeaderButton" />
        <MdChat className="SidebarHeaderButton" />
        <MdMoreVert className="SidebarHeaderButton" onClick={handleOpenDialog} />
        <InsertNewChat data={{openDialog,handleCloseDialog,newEmail,setNewEmail}}/>


      </div>
    </div>
  );
}

export default SidebarHeader;
