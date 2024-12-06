import { Container } from "./RuleStyles";
import Btn from "../../components/button/Btn";
import TextBox from "../../components/textContent/TextBox";
import { Link } from "react-router-dom";

const Rule = () => {
    return (
        <Container>
            <TextBox title="Regulamento"/>
            <div className="rule">
                <h3>Termos e Condições</h3>
                <h4>Data de Publicação: 25/06/2023</h4>

                <p>
                    1. Participação no Bolão
                </p>
                <p>
                    1.1. Os participantes devem ser maiores de 18 anos, conforme previsto em lei.
                </p>
                <p>
                    1.2. O valor da cota deve ser pago integralmente antes do prazo estabelecido para a participação no sorteio.
                </p>
                <p>
                    1.3. A participação no bolão é confirmada somente após o pagamento e a inclusão do nome na lista de cotistas.
                </p>
                <h4>
                    2. Regras dos Jogos
                </h4>
                <p>
                    2.1. Os bolões disponíveis seguem as regras oficiais das modalidades da loteria, como Mega-Sena, Quina, Lotofácil, entre outras, organizadas pela Caixa Econômica Federal.
                </p>
                <p>
                    2.2. A quantidade de números por aposta será definida de acordo com a modalidade escolhida e as regras do bolão específico.
                </p>
                <h4>
                    3. Premiações
                </h4>
                <p>
                    3.1. O valor do prêmio será dividido proporcionalmente entre os participantes de acordo com a quantidade de cotas adquiridas por cada um.
                </p>
                <p>
                    3.2. Prêmios inferiores a R$ 10.000,00 serão pagos diretamente aos participantes após a conferência dos resultados e dedução de taxas administrativas, se houver.
                </p>
                <p>
                    3.3. Prêmios acima de R$ 10.000,00 estarão sujeitos à retirada na instituição financeira responsável, mediante a apresentação dos documentos necessários.
                </p>
                <h4>
                    4. Responsabilidade do Administrador
                </h4>
                <p>
                    4.1. O administrador do bolão é responsável pela realização das apostas, armazenando os comprovantes em local seguro e compartilhando cópias com os participantes.
                </p>
                <p>
                    4.2. Em caso de apostas não realizadas por motivos técnicos ou operacionais, o valor das cotas será devolvido integralmente.
                </p>
                <h4>
                    6. Cancelamentos e Devoluções
                </h4>
                <p>
                    6.1. Caso o bolão seja cancelado por qualquer motivo, os valores das cotas serão devolvidos integralmente aos participantes.
                </p>
                <p>
                    6.2. Não haverá devolução em casos de desistência por parte do participante após o fechamento do bolão.
                </p>
                <h4>
                    7. Disposições Finais
                </h4>
                <p>
                    7.1. Ao participar do bolão, o participante concorda integralmente com os termos aqui descritos.
                </p>
                <p>
                    7.2. Dúvidas ou disputas serão resolvidas pelo administrador, com base na legislação vigente e nas regras oficiais das modalidades de jogos.
                </p>
                <Link to="/"><Btn text="Voltar"/></Link>
            </div>
        </Container>
    )
}

export default Rule;