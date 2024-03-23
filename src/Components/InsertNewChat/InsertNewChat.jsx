import React from "react";
import "./InsertNewChat.css";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import propTypes from "prop-types";
import EmailInput from "../EmailInput/EmailInput";
import { validate } from 'email-validator'; // Importe a função validate do email-validator
import { auth } from "../../Services/Firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../Services/Firebase";
import { addChatToFirestore } from "../../Services/FirebaseChatFunctions";

function InsertNewChat({ data }) {
  const { openDialog, handleCloseDialog, newEmail, setNewEmail } = data;

  const refChat = db.collection("chats").where("users", "array-contains", auth.currentUser?.email);

  const chatExists = (emailChat) => {
      return !!chatsSnapshot?.docs.find(
          (chat) => chat.data().users.find((user) => user === emailChat)?.length > 0
      );
   };

  const [chatsSnapshot] = useCollection(refChat);



  const handleSubmit = () => {
    if (validate(newEmail) || newEmail !=='') { // Valide o email antes de submeter
        if(newEmail === auth.currentUser?.email) {
          alert('Email inválido. Por favor, insira um email diferente.');
        }
        else if(chatExists(newEmail)){
          alert(`Chat ja existe para ${newEmail}`);
        }
        else{
          addChatToFirestore({ users: [auth.currentUser?.email, newEmail] });
          alert(`Novo chat criado para ${newEmail}`);
        }
        handleCloseDialog();
    } else {
      alert('Email inválido. Por favor, insira um email válido.');
    }
  }

  return (
    <Dialog open={openDialog} onClose={handleCloseDialog}>
      <DialogTitle>Insira o email do usuário</DialogTitle>
      <DialogContent sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '10px',
      }}>
        <EmailInput data={{ email: newEmail, setEmail: setNewEmail }} />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseDialog}>Fechar</Button>
        <Button onClick={handleSubmit}>Enviar</Button>
      </DialogActions>
    </Dialog>
  );
}

InsertNewChat.propTypes = {
  data: propTypes.shape({})
}.isRequired;

export default InsertNewChat;
