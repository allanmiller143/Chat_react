import { auth, db } from "./Firebase";

const createUserWithEmailAndPassword = async (email, password) => {
  try {
    // Criar o usuário no Firebase Auth
    const userCredential = await auth.createUserWithEmailAndPassword(email, password);
    alert(`user created ${userCredential.user.email} with id ${userCredential.user.uid}`);
    

    return userCredential.user;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};

export default createUserWithEmailAndPassword;
