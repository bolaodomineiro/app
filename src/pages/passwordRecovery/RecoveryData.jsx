import { initializeApp } from 'firebase/app';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

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

async function verifyAndSendCode(email) {
    try {
        // Verifica se o e-mail está registrado
        const signInMethods = await sendPasswordResetEmail(auth, email);
        return { success: true, message: "Email de verificação enviado com sucesso" };
    
    } catch (error) {
        console.error("Erro ao verificar ou enviar código:", error.message);
        return { success: false, message: error.message };
    }
    }
    
    export { verifyAndSendCode };