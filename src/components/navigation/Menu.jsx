import {MenuContainer } from "./MenuStyles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const Menu = ({ toggleMenu, setMenu, hendleScroll }) => {
    
    return (
        <MenuContainer >
            <ul style={{ right: toggleMenu ? "-300px" : "0" }} >
                <li onClick={() => setMenu(!toggleMenu)}>Quina</li>
                <li onClick={() => setMenu(!toggleMenu)}>Mega-Sena</li>
                <li>
                    Mais Loterias
                    <FontAwesomeIcon className="chevron_icone" icon={faChevronDown} />
                    <ul className="dropdown">
                        <li onClick={() => setMenu(!toggleMenu)}>Quina</li>
                        <li onClick={() => setMenu(!toggleMenu)}>Mega-Sena</li>
                        <li onClick={() => setMenu(!toggleMenu)}>Lotofacil</li>
                        <li onClick={() => setMenu(!toggleMenu)}>Lotomania</li>
                    </ul>
                </li>
                <li onClick={() => setMenu(!toggleMenu)}>Ofertas</li>
                <li onClick={() => setMenu(!toggleMenu)}>Raspadinhas</li>
                <li>
                    Saiba Mais 
                    <FontAwesomeIcon className="chevron_icone" icon={faChevronDown} />
                    <ul className="dropdown">
                        <Link className="link" to="/Rule"><li onClick={() => setMenu(!toggleMenu)}>Regulamento</li></Link>
                        <Link className="link" to="/FaqSection"><li onClick={() => setMenu(!toggleMenu)}>Perguntas Frequentes</li></Link>
                    </ul>
                </li>
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