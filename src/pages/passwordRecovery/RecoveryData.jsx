
import { initializeApp } from 'firebase/app';
import { getAuth, sendSignInLinkToEmail, fetchSignInMethodsForEmail } from 'firebase/auth';

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
        const signInMethods = await fetchSignInMethodsForEmail(auth, email);
        console.log("Métodos de login encontrados:", signInMethods);
    
        if (signInMethods.length > 0) {
        console.log("Email registrado. Enviando código.");
    
        // Configuração do link de autenticação por e-mail
        const actionCodeSettings = {
            url: `https://your-app-url.com/finishSignUp?email=${encodeURIComponent(email)}`,
            handleCodeInApp: true,
        };
    
        // Envia o link de autenticação por e-mail
        await sendSignInLinkToEmail(auth, email, actionCodeSettings);
        console.log("Código enviado para o e-mail:", email);
        // Armazena o e-mail localmente para ser usado posteriormente
        window.localStorage.setItem("emailForSignIn", email);
        return { success: true, message: "Código enviado com sucesso." };

        } else {
            console.log("E-mail não registrado.");
            return { success: false, message: "E-mail não registrado. Por favor, cadastre-se primeiro." };
        }
    } catch (error) {
        console.error("Erro ao verificar ou enviar código:", error.message);
        return { success: false, message: error.message };
    }
    }
    
    export { verifyAndSendCode };