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