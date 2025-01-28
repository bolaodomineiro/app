import {setPersistence, browserLocalPersistence, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from 'firebase/firestore'; // Para acessar o Firestore
import { getFirestore } from "firebase/firestore"; 
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAxejO0T_asVRfIETOB8FIK8HJ1J09jCDc",
  authDomain: "bolaomineiro-bd92d.firebaseapp.com",
  projectId: "bolaomineiro-bd92d",
  storageBucket: "bolaomineiro-bd92d.firebasestorage.app",
  messagingSenderId: "216084526672",
  appId: "1:216084526672:web:03c16ea415ae6bbea34355",
  measurementId: "G-T62C0FZD7Q",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export async function signInUser(email, password) {
  
  try {
     // Configura a persistência do estado de autenticação
    await setPersistence(auth, browserLocalPersistence);

    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    localStorage.setItem("token", JSON.stringify(user.accessToken));

    // Buscando informações do usuário no Firestore pelo UID
    const userRef = doc(firestore, "users", user.uid); // Supondo que a coleção seja "users"
    const userDoc = await getDoc(userRef);

    if (userDoc.exists()) {
      // Se o documento existir, vamos pegar os dados do usuário
      const userData = userDoc.data();
      localStorage.setItem("userName", JSON.stringify(userData.name));
      // localStorage.setItem("userPhoto", JSON.stringify(userData.photo));
      localStorage.setItem("userId", JSON.stringify(user.uid)); // Armazenando o UID também

      // Retornando os dados do usuário
      return { success: true, user, userData };
    } else {
      console.error("Usuário não encontrado no banco de dados.");
      return { success: false, message: "Usuário não encontrado." };
    }
  } catch (error) {
    console.error("Erro ao realizar login:", error.message);
    return { success: false, message: error.message };
  }
}
