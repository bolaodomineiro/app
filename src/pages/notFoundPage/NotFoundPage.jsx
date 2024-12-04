import { Link } from "react-router-dom"
import Btn from "../../components/button/Btn"
import { ContainerNotFound } from ".//NotFoundStyles"
import Logo from "../../assets/images/logotipo.png"

const NotFoundPage = () => {
    return (
        <ContainerNotFound>
            <div className="notFound">
                <div className="notFoundText">
                    <h3>404</h3>
                    <p>Pagina não Encontrada !</p>
                    <Link to="/">
                        <Btn text="Voltar" />
                    </Link>
                </div>
                <img src={Logo} alt="Logo Bolao do Mineiro" />
            </div>
        </ContainerNotFound>
    )
}

export default NotFoundPage