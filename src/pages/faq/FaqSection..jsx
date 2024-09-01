import { FaqSectionContainer } from "./FaqStyles";
import TextBox from "../../components/textContent/TextBox";
import FaqCard from "../../components/cards/faqCard/FaqCard";

const FaqSection = () => {

    return (
        <FaqSectionContainer>
            <TextBox title="Perguntas Frequentes"/>
            <FaqCard title={"1. COMO FUNCIONA O BOLÃO DO MINEIRO?"} description={"Escolha 10 dezenas, Entre as dezenas de 00 até a dezena 99. E monte seu jogo com suas 10 dezenas melhores dezenas."}/>
        </FaqSectionContainer>
    )
}

export default FaqSection;