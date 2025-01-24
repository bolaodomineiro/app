import { MenuContainer } from "./MenuStyles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const Menu = ({ toggleMenu, setMenu, hendleScroll }) => {

    return (
        <MenuContainer >
            <ul style={{ right: toggleMenu ? "-300px" : "0" }} >
                <li onClick={() => setMenu(!toggleMenu)}>Concursos</li>

                <li onClick={() => setMenu(!toggleMenu)}>Ofertas</li>

                <Link className="link" to="/Rule"><li onClick={() => setMenu(!toggleMenu)}>Regulamento</li></Link>

                <Link className="link" to="/FaqSection"><li onClick={() => setMenu(!toggleMenu)}>Perguntas Frequentes</li></Link>

                <Link
                    to="/"
                    className="link-bolao"
                    onClick={(e) => { hendleScroll(450) }}
                >
                    <li > Bolões</li>
                </Link>
            </ul>
        </MenuContainer>
    );
};

export default Menu;