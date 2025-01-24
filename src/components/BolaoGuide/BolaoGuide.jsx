import { SectionContainer } from "./BolaoGuideStyles";
import TextBox from "../textContent/TextBox";
import GuidCard from "../cards/guidCard/GuidCard";

const BolaoGuide = () => {
    return (
        <SectionContainer>
            <section className="textContent">
                <TextBox title="Como jogar no Bolão do Mineiro" text="" />
            </section>
            <section className="guids">
                <GuidCard $title="Compre seu bilhete"  $text="É fácil! Compre seu bilhete no ponto de venda mais próximo de você, ou diretamente com o vendedor da sua preferência."/>
                <GuidCard $title="Escolha 10 Dezenas" $text="Escolha 10 Dezenas quaisquer entre as Dezenas de 00 até a dezena 99. O Bolão inicia na Quarta-Feira. Resultados Quarta: Federal e 21h BA. Continua na Quinta as 10h  BA, depois 12h BA… As Dezenas do  1º ao 5º Premio, Frente e Fundo.    São Sorteadas 10 Dezenas em cada Resultado." />
                <GuidCard $title="Agora só cruzar os dedos!" $text="Você só começa a marcar o seu Bolão a partir da Quarta-Feira no Resultado da FEDERAL. A Cada Dezena que você acerta, ela vai somando.            O Bolão só acaba quando houver um ganhador que acertar as 10 dezenas. Uma boa sorte!" />
            </section>
        </SectionContainer>
    )
}

export default BolaoGuide;