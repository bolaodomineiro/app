import { setPersistence, browserLocalPersistence, getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAxejO0T_asVRfIETOB8FIK8HJ1J09jCDc",
  authDomain: "bolaomineiro-bd92d.firebaseapp.com",
  projectId: "bolaomineiro-bd92d",
  storageBucket: "bolaomineiro-bd92d.firebasestorage.app",
  messagingSenderId: "216084526672",
  appId: "1:216084526672:web:03c16ea415ae6bbea34355",
  measurementId: "G-T62C0FZD7Q",
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Função para realizar o login do usuário
export async function signInUser(email, password) {
  try {
    // Configura a persistência do estado de autenticação
    await setPersistence(auth, browserLocalPersistence);

    // Realiza o login com email e senha
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Obtém o token atualizado do Firebase
    const token = await user.getIdToken(); // Obtém o token mais recente

    // Armazena o token no localStorage
    localStorage.setItem("token", JSON.stringify(token));

    // Salva no Firestore
    const userRef = doc(db, "users", user.uid);
    await setDoc(userRef, { token }, { merge: true });

    // Busca os dados do usuário no Firestore
    const userDoc = await getDoc(userRef);
    if (userDoc.exists()) {
      const userData = userDoc.data();

      // Armazena os dados do usuário no localStorage
      localStorage.setItem("userName", JSON.stringify(userData.name));
      localStorage.setItem("userId", user.uid);
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

// Função para manter o token atualizado enquanto o usuário estiver autenticado
export function monitorAuthState() {
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const token = await user.getIdToken(); // Força a renovação do token
      localStorage.setItem("token", JSON.stringify(token));
    } else {
      // Caso o usuário deslogue, podemos limpar o localStorage ou realizar outras ações
      localStorage.removeItem("token");
      localStorage.removeItem("userName");
      localStorage.removeItem("userId");
      localStorage.removeItem("balance");
    }
  });
}
