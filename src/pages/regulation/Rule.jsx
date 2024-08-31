import { Container } from "./RuleStyles";
import Btn from "../../components/button/Btn";
import TextBox from "../../components/textContent/TextBox";
import { Link } from "react-router-dom";

const Rule = () => {
    return (
        <Container>
            <TextBox title="Regulamento"/>
            <div className="rule">
                <p>
                    Temos  3 Regulamentos:  Um do Bolao de Segunda, Bolao de Quarta e outro do Bolao de Sabado.
                    Entre em nosso Grupo do WhatsApp e acompanhe tudo do nossos Bolões em tempo real e o regulamento antes do bolao começar.
                </p>
                <Link to="/"><Btn text="Voltar"/></Link>
            </div>
        </Container>
    )
}

export default Rule;