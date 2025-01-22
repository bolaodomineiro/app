import React, { useState } from "react";
import { ContainerRecovery } from "./PasswordRecoveryStyles";
import Btn from "../../components/button/Btn";
import { verifyAndSendCode } from "./RecoveryData";

const PasswordRecovery = () => {

    const [resultApi, setResultApi] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value.trim().toLowerCase();

        const result = await verifyAndSendCode(email);

        if (result.success) {
            alert(result.message);
            setResultApi(true);
        } else {
            alert(`error em enviar email de verificação`);
            setResultApi(result.message);
        }
    }

    return (
        <ContainerRecovery>
            <form id="registerForm" onSubmit={handleSubmit}>
                <h3>Recuperar Senha</h3>
                <div>
                    <label>E-mail <span className="asterisk">*</span></label>
                    <input id="email" name="email" type="email" placeholder="Digite seu Email" required />
                    <Btn text="Enviar Codigo" type="submit" />
                </div>
                { resultApi !== "" &&
                <div>
                    <p className="success">{resultApi}</p>
                </div>
                }
            </form>
        </ContainerRecovery>
    );
};

export default PasswordRecovery