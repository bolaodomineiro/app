import { setPersistence, browserLocalPersistence, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
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
const db = getFirestore(app);

export async function signInUser(email, password) {

  try {
    // Configura a persistência do estado de autenticação
    await setPersistence(auth, browserLocalPersistence);

    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    // Armazena o token no localStorage e também em um cookie compartilhado
    const token = user.accessToken;
    localStorage.setItem("token", JSON.stringify(token));

    // Salvar no Firestore
    const userRef = doc(db, "users", user.uid);
    await setDoc(userRef, { token }, { merge: true }); // salva o token no Firestore no doc do user
    const userDoc = await getDoc(userRef); // busca o doc do user

    if (userDoc.exists()) {
      // Se o documento existir, armazena as informações do usuário
      const userData = userDoc.data();
      localStorage.setItem("userName", JSON.stringify(userData.name));
      localStorage.setItem("userId", JSON.stringify(user.uid));
      localStorage.setItem("balance", JSON.stringify(userData.balance));
      // Retorna os dados do usuário
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
