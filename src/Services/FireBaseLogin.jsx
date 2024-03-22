

import { db } from "./Firebase";

const addUserToFirestore = async (userId, name, email, photoURL) => {
    try {
      const usersRef = db.collection("users");
  
      // Verifique se o usuário já existe na coleção
      const userDoc = await usersRef.doc(userId).get();
      if (!userDoc.exists) {
        // Se o usuário não existir, insira os dados
        await usersRef.doc(userId).set({
          name,
          email,
          photoURL,
          userId
        });
        alert("Usuário adicionado com sucesso!");
      } else {
        alert("Erro ao adicionar usuário. Usuário ja existe.");
      }
    } catch (error) {
      alert("Erro ao adicionar usuário: " + error.message);
    }
  };

  export default addUserToFirestore;
  