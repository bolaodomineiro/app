import { ContainerLogin } from "./LoginStyles";
import Btn from "../../components/button/Btn";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { signInUser } from "./LoginData";

const Login = () => {
    const { setAuthenticated, Authenticated } = useAuthContext();
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        const result = await signInUser(email, password);

        if (result.success) {
            alert("Login realizado com sucesso!");
            setAuthenticated(!Authenticated);
            localStorage.setItem("token", "true");
            navigate("/");
        } else {
            alert(`Erro ao realizar login: ${result.message}`);
        }
    };

    return (
        <ContainerLogin>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">E-mail</label>
                    <input id="email" name="email" type="text" placeholder="Exemplo@gmail.com" required />
                </div>
                <div>
                    <label htmlFor="password">Senha</label>
                    <input id="password" name="password" type="password" placeholder="Insira sua senha" required />
                </div>
                <Btn text="Entrar" type="submit" />
                <div className="forgot">
                    <Link className="forgot_link" to="/passwordRecovery">Esqueceu sua senha?</Link>
                </div>
                <Link className="register_link" to="/register">
                    Criar conta
                </Link>
            </form>
        </ContainerLogin>
    );
};

export default Login;
