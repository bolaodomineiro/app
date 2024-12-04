import { ContainerLogin } from "./LoginStyles";
import Btn from "../../components/button/Btn";
import { Link } from "react-router-dom";
import GoogleBtn from "../../components/button/GoogleBtn";
import { useAuthContext } from "../../context/AuthContext"
import { useNavigate} from "react-router-dom";

const Login = () => {

    const { setAuthenticated, Authenticated } = useAuthContext();
    const navigate = useNavigate();

    const hendleSubmit = () => {
        event.preventDefault();
        setAuthenticated(!Authenticated);
        navigate('/')
        localStorage.setItem('token', 'true');
    }

    return (
        <ContainerLogin>
            <form action="#">
                <div>
                    <label htmlFor="email">E-mail</label>
                    <input id="email" type="text" placeholder="Exemplo@gmail.com" />
                </div>
                <div>
                    <label htmlFor="password">Senha</label>
                    <input id="password" type="password" placeholder="Insira sua senha" />
                </div>
                <Btn
                    text="Entrar"
                    onClick={() => hendleSubmit()}
                />
                <GoogleBtn text="Entrar com Google" />
                <div className="forgot">
                    <Link className="forgot_link">Esqueceu sua senha?</Link>
                </div>
                <Link 
                    className="register_link" 
                    to="/register">
                        Criar conta
                </Link>
            </form>

        </ContainerLogin>
    )
}

export default Login;