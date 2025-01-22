import { ContainerRegister } from "./RegisterStyles";
import Btn from "../../components/button/Btn";
import { useAuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { registerUser } from "./RegisterData"; // Importando a função de cadastro
import { useState } from "react";

const Register = () => {
  const { setAuthenticated, Authenticated } = useAuthContext();
  const navigate = useNavigate();
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const city = form.city.value;
    const password = form.password.value;
    const code = form.code.value;

    const result = await registerUser(name, email, phone, city, password, code);

    if (result.success) {
      alert("Usuário cadastrado com sucesso!");
      setAuthenticated(!Authenticated);
      localStorage.setItem("token", "true");
      navigate("/");
    } else {
      alert(`Erro ao cadastrar seu usuário: ${result.message}`);
    }
  };

  return (
    <ContainerRegister>
      <form id="registerForm" onSubmit={handleSubmit}>
        <div>
          <label>Nome Completo <span className="asterisk">*</span></label>
          <input id="name" name="name" type="text" placeholder="Nome e Sobrenome" required />
        </div>

        <div>
          <label>E-mail <span className="asterisk">*</span></label>
          <input id="email" name="email" type="email" placeholder="Seu melhor E-mail" required />
        </div>

        <div>
          <label>Celular / WhatsApp <span className="asterisk">*</span></label>
          <input id="phone" name="phone" type="text" placeholder="(00) 0 0000-0000" required />
        </div>

        <div>
          <label>Sua Cidade <span className="asterisk">*</span></label>
          <input id="city" name="city" type="text" placeholder="Digite sua cidade" required />
        </div>

        <div>
          <label>Senha <span className="asterisk">*</span></label>
          <input id="password" name="password" type="password" placeholder="Digite uma senha" required />
        </div>

        <div>
          <label>Código de Indicação</label>
          <input id="code" name="code" type="text" placeholder="Campo opcional" />
        </div>

        <div className="terms-container">
          <input id="checkbox" type="checkbox" className="checkbox" required />
          <span className="terms-text">
            Tenho mais de 18 anos, li e concordo com os <span className="boldtext">Termos e Condições de Uso do site.</span>
          </span>
        </div>

        <Btn text="Criar Conta" type="submit" />
      </form>
      {statusMessage && <p>{statusMessage}</p>}
    </ContainerRegister>
  );
};

export default Register;
