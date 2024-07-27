import { ResultContainer } from "./ResultStyles";
import ResultCard from "../cards/resultCard/ResultCard";
import TextBox from "../textContent/TextBox";
import Btn from "../button/Btn";

const ResultSection = () => {
    return (
        <ResultContainer>
            <section className="textContent">
                <TextBox title="RESULTADOS" text="dos sorteios" />
            </section>
            <section className="results">
               <ResultCard />
               <ResultCard />
               <ResultCard />
            </section>
            <div className="btnResults">
                <Btn text="Ver mais resultados" />
            </div>
        </ResultContainer>
    )
}

export default ResultSection