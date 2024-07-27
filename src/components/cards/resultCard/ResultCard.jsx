import { Container } from "./ResultCardStyles";


const ResultCard = () => {
    return (
        <Container>
            <div className="headerResult">
                <p>Resultado do Jogo do Bicho</p>
                <p>Quarta-Feira, 24/07/2024</p>
            </div>
            <div className="mainResult">
                <ol>
                    <li>1º  62.47</li>
                    <li>2º  07.51</li>
                    <li>3º  46.82</li>
                    <li>4º  40.44</li>
                    <li>5º  47.34</li>
                </ol>
                <div className="orderResult">
                    <p>07.34.40.44.46.47.47.51.62.82.</p>
                    <p>Em ordem crescente.</p>
                </div>
            </div>
            <div className="footerResult">
                <p>Cadastrado às 19:12h</p>
            </div>
        </Container>
    )
}

export default ResultCard