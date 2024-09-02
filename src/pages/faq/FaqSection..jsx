import { FaqSectionContainer } from "./FaqStyles";
import TextBox from "../../components/textContent/TextBox";
import FaqCard from "../../components/cards/faqCard/FaqCard";
import Btn from "../../components/button/Btn";
import { Link } from "react-router-dom";


const FaqSection = () => {

    return (
        <FaqSectionContainer>
            <TextBox title="Perguntas Frequentes"/>
            <div className="faq_section">
                <FaqCard />
            </div>
            <Link to="/"><Btn text="Voltar"/></Link>
        </FaqSectionContainer>
    )
}

export default FaqSection;