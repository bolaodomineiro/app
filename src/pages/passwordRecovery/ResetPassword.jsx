import React, { useState } from "react";
import  { ContainerResetPassword } from "./PasswordRecoveryStyles";
import Btn from "../../components/button/Btn";
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { PasswordReset } from "./RecoveryData";
import { recoverySchema } from "../../schemas/fieldSchemas"

const ResetPassword = () => {

    const [visibileNewPassword, setVisibileNewPassword] = useState(false);
    const [visibileNewPasswordRepeat, setVisibileNewPasswordRepeat] = useState(false);

    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const oobCode = searchParams.get("oobCode");

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const password = form.senha.value.trim();
        const passwordRepeat = form.senhaRepeat.value.trim();

        if (!oobCode) {
            alert("Código de redefinição inválido ou ausente.");
            return;
        }

        const passwordValidation =  recoverySchema.safeParse( password, passwordRepeat ); 

        if (!passwordValidation.success) {
            alert(passwordValidation.error.issues[0].message);
            console.log(passwordValidation.error.issues[0].message);
            console.log(passwordValidation.error.issues[0].message);
            return
        } 

        if (password !== passwordRepeat) {
            alert("As senhas digitadas são diferentes");
            return;
        }

        const result = await PasswordReset(password, oobCode);

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
                        <input 
                            id="senha" 
                            name="senha" 
                            type={visibileNewPassword ? 'text' : 'password'}
                            placeholder="Digite a nova senha" 
                            required 
                        />
                        {visibileNewPassword  ? 
                            <FontAwesomeIcon 
                                icon={faEye} 
                                className="eye-icon"
                                onClick={() => setVisibileNewPassword(!visibileNewPassword)} 
                            /> :
                            <FontAwesomeIcon 
                                icon={faEyeSlash} 
                                className="eye-icon"
                                onClick={() => setVisibileNewPassword(!visibileNewPassword)} 
                            />
                        }
                    </div>
                </div>
                <div>
                    <label>Repita a Senha <span className="asterisk">*</span></label>
                    <div className="password-container">
                        <input 
                            id="senhaRepeat" 
                            name="senhaRepeat" 
                            type={visibileNewPasswordRepeat ? 'text' : 'password' }
                            placeholder="Digite a senha novamente" 
                            required 
                        />
                        {visibileNewPasswordRepeat ? 
                            <FontAwesomeIcon icon={faEye} 
                                className="eye-icon" 
                                onClick={() => setVisibileNewPasswordRepeat(!visibileNewPasswordRepeat)} 
                            /> :
                            <FontAwesomeIcon icon={faEyeSlash} 
                                className="eye-icon" 
                                onClick={() => setVisibileNewPasswordRepeat(!visibileNewPasswordRepeat)} 
                            />
                        }
                    </div>
                </div>
                <div>
                    <Btn text="Atualizar Senha" type="submit" />
                </div>
            </form>
        </ContainerResetPassword>
    );
};

export default ResetPassword;