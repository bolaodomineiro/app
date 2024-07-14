import React from 'react';
import Logo from '../../assets/images/logotipo.png';
import { HeaderContainer } from './HeaderStyles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCartShopping} from '@fortawesome/free-solid-svg-icons';


const Header = () => {
    return (
        <HeaderContainer>
            
                <div className='reader_top_area'>
                    <img className='logo' src={Logo} alt="logo" />
                    <div className='reader_top_area_right'>
                        <div>
                            <FontAwesomeIcon className='search_icone' icon={faMagnifyingGlass} />
                        </div>
                        <div>
                            <a href="#">Acessar conta</a>
                            <a href="#">Registrar</a>
                        </div>
                        <div className='cart_area'>
                            <FontAwesomeIcon className='cart_icone' icon={faCartShopping} />
                            <div >
                                <p>Saldo: R$ 0,00</p>
                                <button>Adicionar saldo</button>
                            </div>
                        </div>
                    </div>
                </div>
           
            <section className='header_footer_area'>

            </section>
        </HeaderContainer>
    );
};

export default Header;
