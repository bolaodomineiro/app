import { MenuContainer } from "./MenuStyles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
//hooks
import  useScroll  from "../../hooks/scroll";

const Menu = ({ toggleMenu, setMenu}) => {

    const { hendleScroll } = useScroll();

    return (
        <MenuContainer >
            <ul style={{ right: toggleMenu ? "-300px" : "0" }} >
                <Link 
                    className="link" 
                    to="/">
                    <li onClick={() => {setMenu(!toggleMenu),  hendleScroll(0) }}>Concursos</li>
                </Link>
                
                <Link 
                    className="link" 
                    to="/">
                <li onClick={() =>{ setMenu(!toggleMenu), hendleScroll(0)}}>Ofertas</li>
                </Link>
                
                <Link 
                    className="link" 
                    to="/Rule">
                    <li onClick={() => { setMenu(!toggleMenu),  hendleScroll(0) }}>Regulamento</li>
                </Link>
                
                <Link 
                    className="link" 
                    to="/FaqSection"
                >   <li onClick={() => { setMenu(!toggleMenu),  hendleScroll(0) }}>Perguntas Frequentes</li>
                </Link>
                
                <Link
                    to="/"
                    className="link-bolao"
                    onClick={() => { setMenu(!toggleMenu), hendleScroll(450) }}
                >   <li > Bolões</li>
                </Link>
            </ul>
        </MenuContainer>
    );
};

export default Menu;