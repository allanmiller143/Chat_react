import { db } from "./Firebase";

export const addChatToFirestore = async (chat) => {
    try {
        await db.collection("chats").add(chat);
    } catch (error) {
        console.error("Error adding chat to Firestore: ", error);
    }
}


export const findUserChats = async (userEmail) => {
    try {
        const chats = await db.collection("chats").where("users", "array-contains", userEmail).get();
        return chats;
    } catch (error) {
        console.error("Error finding user chats: ", error);
    }
}

export const sendMessage = async (chatId, messageContent) => {
    try {
        // Adicionar uma nova mensagem à subcoleção "messages" dentro do documento "chatId"
        await db.collection("chats").doc(chatId).collection("messages").add({
            content: messageContent,
        });
        
        await db.collection("chats").doc(chatId).set({
            lastMessageTimeStamp: messageContent.timestamp,
            sender: messageContent.sender,
            lastMessageContent: messageContent.content,
        }, { merge: true });
        
        alert("Mensagem enviada com sucesso");
    } catch (error) {
        alert("Erro ao enviar mensagem: " + error);
    }
}
