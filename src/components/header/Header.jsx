import React, { useState } from 'react';
import Logo from '../../assets/images/logotipo.png';
import { HeaderContainer,Search_area } from './HeaderStyles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCartShopping, faBars, faSquareXmark} from '@fortawesome/free-solid-svg-icons';
import Menu from '../navigation/Menu';


const Header = () => {

    const [menu, setMenu] = React.useState(true);

    return (
        <HeaderContainer>
            <div className='header_top_area'>
                <img className='logo' src={Logo} alt="logo" />
                <div className='header_top_area_right'>
                  
                    <Search_area>
                        <input type="text" placeholder="Buscar aposta"/>
                        <FontAwesomeIcon className='search_icone' icon={faMagnifyingGlass} />
                    </Search_area>
                    <div>
                        <a href="#">Acessar conta</a>
                        <a href="#">Registrar</a>
                    </div>
                  
                    <div className='cart_area'>
                        <FontAwesomeIcon className='cart_icone' icon={faCartShopping} />
                        <div className='cart_info' >
                            <p>Saldo: R$ 0,00</p>
                            <button>Adicionar saldo</button>
                        </div>
                    </div>
                </div>
            </div>
            <section 
                className='header_footer_area'
            >
                <Menu toggleMenu={menu} />

                {   
                    menu ? <FontAwesomeIcon 
                        className='menu_icone' 
                        icon={faBars} 
                        onClick={() => setMenu(!menu)}
                    /> :
                    <FontAwesomeIcon 
                        className='menu_icone' 
                        icon={faSquareXmark} 
                        onClick={() => setMenu(!menu)}
                    />
                }
                
            </section>
        </HeaderContainer>
    );
};

export default Header;
