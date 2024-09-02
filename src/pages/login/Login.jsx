import  { ContainerLogin } from "./LoginStyles";
import Btn from "../../components/button/Btn";
import { Link } from "react-router-dom";
import Google from "../../assets/images/google.png";
import {useAuthContext} from "../../context/AuthContext"

const Login = () => {

    const {setAuthenticated } = useAuthContext();

    const hendleSetLimit = () => {
        event.preventDefault(); 
        setAuthenticated(true)
    }

    return (
        <ContainerLogin>
            <form action="#">
                <div>
                    <label htmlFor="email">E-mail</label>
                    <input id="email" type="text" placeholder="bolao@gmail.com" />
                </div>
                <div>
                    <label htmlFor="password">Senha</label>
                    <input id="password" type="password" placeholder="********" />
                </div>
                <Btn 
                    text="Entrar"
                    onClick={() => hendleSetLimit()}
                />
                <div className="forgot">
                    <Link className="forgot_link">Esqueceu sua senha?</Link>
                </div>
                <Link className="register_link" to="/register">Criar conta</Link>
                <img src={Google} alt="Google" />
            </form>

        </ContainerLogin>
    )
}

export default Login;