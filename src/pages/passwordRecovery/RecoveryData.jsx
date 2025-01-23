import { initializeApp } from 'firebase/app';
import { getAuth, sendPasswordResetEmail, confirmPasswordReset } from 'firebase/auth';

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
        const signInMethods = await sendPasswordResetEmail(auth, email, {
            url: 'https://www.bolaodomineiro.com.br/ResetPasswor',
            handleCodeInApp: true 
        });
        return { success: true, message: "Email de verificação enviado com sucesso" };
    
    } catch (error) {
        console.error("Erro ao verificar ou enviar código:", error.message);
        return { success: false, message: error.message };
    }
}

async function ResetPasswor(password , oobCode) {
    try {
        // Confirma a redefinição de senha
        await confirmPasswordReset(auth, oobCode, password);
        alert("Senha redefinida com sucesso! Faça login com a nova senha.");
        // Redireciona para a página de login ou home
        window.location.href = "/login";
    } catch (error) {
        console.error(error);
        alert("Ocorreu um erro ao redefinir a senha. Por favor, tente novamente.");
    }
}
    
export { verifyAndSendCode, ResetPasswor };