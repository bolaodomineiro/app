import { ContainerRegister } from "./RegisterStyles";
import Btn from "../../components/button/Btn";
import { useAuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { registerUser } from "./RegisterData"; // Importando a função de cadastro
import { useState } from "react";
// schemas
import { registerSchema } from "../../schemas/fieldSchemas";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";


const Register = () => {
  const { setAuthenticated, Authenticated } = useAuthContext();
  const navigate = useNavigate();
  const [statusMessage, setStatusMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [visibilePassword, setVisibilePassword] = useState(false);

  const handlePhoneChange = (event) => {
    const { value } = event.target;
    const formattedPhone = formatPhoneNumber(value);
    setPhone(formattedPhone);
  };

function formatPhoneNumber(value) {
  // Remove qualquer caractere não numérico
  const cleanedValue = value.replace(/\D/g,'');
  // Se o valor estiver vazio, retorne uma string vazia
  if (cleanedValue.length === 0) {
    return '';
  }
  // Verifica a quantidade de números e aplica a formatação
  if (cleanedValue.length <= 2) {
    return `(${cleanedValue}`;
  } else if (cleanedValue.length <= 7) {
    return `(${cleanedValue.slice(0, 2)})${cleanedValue.slice(2)}`;
  } else {
    return `(${cleanedValue.slice(0, 2)})${cleanedValue.slice(2, 7)}-${cleanedValue.slice(7, 11)}`;
  }
}

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const city = form.city.value;
    const password = form.password.value;
    const isAdmin = false;
    const state = form.state.value;
    const isAge18 = form.checkbox.checked;

    
console.log("Dados do formulário antes da validação:", 
  name,
  email,
  phone,
  city,
  password,
  isAdmin,
  state,
  isAge18,
);

    const validation = registerSchema.safeParse({ name, email, phone, city, password, isAdmin, isAge18, state});

    if (!validation.success) {
      console.log(validation.error.issues[0].message);
      alert(validation.error.issues[0].message);
      return;
    }

    const result = await registerUser(name, email, phone, city, password, isAdmin, isAge18, state);

    if (result.success) {
      alert("Usuário cadastrado com sucesso!");
      setAuthenticated(!Authenticated);
      localStorage.setItem("token", "true");
      navigate("/");
    } else {
      alert(`Ops, Email  ja cadastrados!`);
    }
  };

  return (
    <ContainerRegister>
      <form id="registerForm" onSubmit={handleSubmit}>
        <h3>Cadastro</h3>
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
          <input 
              id="phone" 
              name="phone" 
              type="text" 
              placeholder="(00) 0 0000-0000" 
              required 
              value={phone}
              onChange={handlePhoneChange}
            />
        </div>

        <div>
          <label>Sua Cidade <span className="asterisk">*</span></label>
          <input id="city" name="city" type="text" placeholder="Digite sua cidade" required />
        </div>

        <div>
          <label>Seu Estado <span className="asterisk">*</span></label>
          <select name="state"  className="select">
            <option id="option" value="">Selecione um Estado</option>
            <option value="AC">Acre</option>
            <option value="AL">Alagoas</option>
            <option value="AP">Amapá</option>
            <option value="AM">Amazonas</option>
            <option value="BA">Bahia</option>
            <option value="CE">Ceará</option>
            <option value="DF">Distrito Federal</option>
            <option value="ES">Espírito Santo</option>
            <option value="GO">Goiás</option>
            <option value="MA">Maranhão</option>
            <option value="MT">Mato Grosso</option>
            <option value="MS">Mato Grosso do Sul</option>
            <option value="MG">Minas Gerais</option>
            <option value="PA">Pará</option>
            <option value="PB">Paraiba</option>
            <option value="PR">Paraná</option>
            <option value="PE">Pernambuco</option>
            <option value="PI">Piauí</option>
            <option value="RJ">Rio de Janeiro</option>
          </select>
        </div>

        <div>
          <label>Senha <span className="asterisk">*</span></label>
          <div className="password-container">
            <input 
              id="password" 
              name="password" 
              type={visibilePassword ? "text" : "password"} 
              placeholder="Digite uma senha" 
              required 
            />
            { visibilePassword ?
              <FontAwesomeIcon 
                  icon={faEye} 
                  className="eye-icon"
                  onClick={() => setVisibilePassword(!visibilePassword)} 
              />
              :
              <FontAwesomeIcon 
                  icon={faEyeSlash} 
                  className="eye-icon" 
                  onClick={() => setVisibilePassword(!visibilePassword)}
              /> 
            }
          </div>
        </div>

        {/* <div>
          <label>Código de Indicação</label>
          <input id="code" name="code" type="text" placeholder="Campo opcional" />
        </div> */}

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
