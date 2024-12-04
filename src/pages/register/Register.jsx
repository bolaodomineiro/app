import { ContainerRegister } from "./RegisterStyles";
import Btn from "../../components/button/Btn";
import GoogleBtn from "../../components/button/GoogleBtn";
import { useAuthContext } from "../../context/AuthContext"
import { useNavigate } from "react-router-dom";

const Register = () => {

  const { setAuthenticated, Authenticated } = useAuthContext();
  const navigate = useNavigate();

  const hendleSubmit = () => {
    event.preventDefault();
    setAuthenticated(!Authenticated);
    navigate('/');
    localStorage.setItem('token', 'true');
  }

  return (
    <ContainerRegister>
      <form action="#">
        <div>
          <label htmlFor="nome">Nome</label>
          <input id="nome" type="text" placeholder="Seu nome completo" />
        </div>
        <div>
          <label htmlFor="email">E-mail</label>
          <input id="email" type="text" placeholder="exemplo@gmail.com" />
        </div>
        <div>
          <label htmlFor="password">Senha</label>
          <input id="password" type="password" placeholder="Insira sua senha com 6 dígitos no mínimo" />
        </div>
        <div>
          <label htmlFor="password">Confirmação de Senha</label>
          <input id="password" type="password" placeholder="Repita a senha" />
        </div>
        <Btn
          text="Criar Conta"
          onClick={() => hendleSubmit()}
        />
        <GoogleBtn text="Registrar com Google" />
      </form>

    </ContainerRegister>
  )
}

export default Register;