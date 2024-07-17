import React, { useState } from 'react';
import Logo from '../../assets/images/logotipo.png';
import { HeaderContainer,Search_area } from './HeaderStyles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCartShopping, faBars, faSquareXmark} from '@fortawesome/free-solid-svg-icons';
import Menu from '../navigation/Menu';
import Btn from '../button/Btn';



const Header = () => {

    const [menu, setMenu] = useState(true);
    const [Authenticated, setAuthenticated] = useState(false);// trocar valor pelo token de autenticação

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
                        {Authenticated ? (
                                <a href="#"
                                    >Bem vindo, 
                                    <span className='userName'>
                                        usuário
                                    </span>
                                </a>
                            ):(
                                <>
                                    <a  href="#"
                                        onClick={() => setAuthenticated(!Authenticated)}
                                    >
                                        Acessar conta
                                    </a>
                                    <a href="#">Registrar</a>
                                </>
                            )
                        }
                    </div>
                  
                    <div className='cart_area' style={{display: Authenticated ? "flex" : "none"}}>
                        <FontAwesomeIcon className='cart_icone' icon={faCartShopping} />
                        <div className='cart_info' >
                            <p>Saldo: R$ 0,00</p>
                            <Btn text={"Adicionar saldo"}/>
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
