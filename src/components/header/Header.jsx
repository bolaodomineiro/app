import React from 'react';
import Logo from '../../assets/images/logotipo.png';



const Header = () => {
    return (
        <HeaderContainer>
            <section className='header_top'>
                <div className='reader_top_area'>
                    <img src={Logo} alt="logo" />
                </div>
            </section>
            <section className='header_bottom'>

            </section>
        </HeaderContainer>
    );
};

export default Header;