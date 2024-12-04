import { ContainerLogin } from "./LoginStyles";
import Btn from "../../components/button/Btn";
import { Link } from "react-router-dom";
import GoogleBtn from "../../components/button/GoogleBtn";
import { useAuthContext } from "../../context/AuthContext"

const Login = () => {

    const { setAuthenticated } = useAuthContext();

    const hendleSetLimit = () => {
        event.preventDefault();
        setAuthenticated(true)
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
                    onClick={() => hendleSetLimit()}
                />
                <GoogleBtn text="Entrar com Google" />
                <div className="forgot">
                    <Link className="forgot_link">Esqueceu sua senha?</Link>
                </div>
                <Link className="register_link" to="/register">Criar conta</Link>
            </form>

        </ContainerLogin>
    )
}

export default Login;