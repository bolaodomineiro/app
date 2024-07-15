import React from "react";
import {MenuContainer } from "./MenuStyles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Menu = ({ toggleMenu }) => {
    return (
        <MenuContainer >
            <ul style={{ right: toggleMenu ? "-300px" : "0" }} >
                <li>Quina</li>
                <li>Mega-Sena</li>
                <li>
                    Mais Loterias
                    <FontAwesomeIcon className="chevron_icone" icon={faChevronDown} />
                    <ul className="dropdown">
                        <li>Quina</li>
                        <li>Mega-Sena</li>
                        <li>Lotofacil</li>
                        <li>Lotomania</li>
                    </ul>
                </li>
                <li>Ofertas</li>
                <li>Raspadinhas</li>
                <li>Bolões</li>
            </ul>
        </MenuContainer>
    );
};

export default Menu;