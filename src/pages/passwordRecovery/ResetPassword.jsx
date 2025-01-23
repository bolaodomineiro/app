import  { ContainerResetPassword } from "./PasswordRecoveryStyles";
import Btn from "../../components/button/Btn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { ResetPasswor } from "./RecoveryData";

const ResetPassword = () => {
    const navigate = useNavigate();

    const [searchParams] = useSearchParams();
    const oobCode = searchParams.get("oobCode");

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const senha = form.senha.value.trim().toLowerCase();
        const senhaRepeat = form.senhaRepeat.value.trim().toLowerCase();

        if (senha !== senhaRepeat) {
            alert("As senhas digitadas são diferentes");
            return;
        }

        if (!oobCode) {
            alert("Código de redefinição inválido ou ausente.");
            return;
        }

        const result = await ResetPasswor(senha, oobCode);

        if (result.success) {
            alert("Senha redefinida com sucesso! Faça login com a nova senha.");
            navigate("/");
        }else {
            alert("Ocorreu um erro ao redefinir a senha. Por favor, tente novamente.");
        }

        
    }


    return (
        <ContainerResetPassword>
            <form id="reset-password" onSubmit={handleSubmit}>
                <h3>Alterar Senha</h3>
                <div>
                    <label>Nova Senha <span className="asterisk">*</span></label>
                    <div className="password-container">
                        <input id="senha" name="senha" type="password" placeholder="Digite a nova senha" required />
                        {true  ? 
                            <FontAwesomeIcon icon={faEye} className="eye-icon" /> :
                            <FontAwesomeIcon icon={faEyeSlash} className="eye-icon" />
                        }
                    </div>
                </div>
                <div>
                    <label>Repita a Senha <span className="asterisk">*</span></label>
                    <div className="password-container">
                        <input id="senhaRepeat" name="senhaRepeat" type="password" placeholder="Digite a senha novamente" required />
                        {true  ? 
                            <FontAwesomeIcon icon={faEye} className="eye-icon" /> :
                            <FontAwesomeIcon icon={faEyeSlash} className="eye-icon" />
                        }
                    </div>
                </div>
                <div>
                    <Btn text="Alterar Senha" type="submit" />
                </div>
            </form>
        </ContainerResetPassword>
    );
};

export default ResetPassword;