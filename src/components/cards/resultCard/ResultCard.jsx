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
                    <li>1º<span>62.47</span></li>
                    <li>2º<span>07.51</span></li>
                    <li>3º<span>40.46</span></li>
                    <li>4º<span>44.82</span></li>
                    <li>5º<span>47.47</span></li>
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