import React from "react";
import {MenuContainer } from "./MenuStyles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Menu = ({ toggleMenu, setMenu }) => {

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
                <li onClick={() => setMenu(!toggleMenu)}>Bolões</li>
            </ul>
        </MenuContainer>
    );
};

export default Menu;