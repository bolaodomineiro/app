import React, { useState, useRef } from "react";
import Logo from "../../assets/images/logotipo.png";
import { HeaderContainer, Search_area } from "./HeaderStyles";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faCartShopping, faBars, faSquareXmark } from "@fortawesome/free-solid-svg-icons";
import Menu from "../navigation/Menu";
import Btn from "../button/Btn";
import LogoutBtn from "../button/logoutBtn";
import { useAuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Header = () => {

    const getUseName = JSON.parse(localStorage.getItem("userName"));
    const getUsePhoto = JSON.parse(localStorage.getItem("userPhoto"));
    const getToken = localStorage.getItem("token");

    const [menu, setMenu] = useState(true);
    const { Authenticated } = useAuthContext();

    const headerRef = useRef(null);
    const handleClickOutside = (event) => {
        if (headerRef.current && !headerRef.current.contains(event.target)) {
            setMenu(true);
        }
    };
    document.addEventListener("click", handleClickOutside);

    return (
        <HeaderContainer ref={headerRef}>
            <div className="header_top_area">
                <Link to="/">
                    <img className="logo" src={Logo} alt="logo" />
                </Link>
                <div className="header_top_area_right">
                    <Search_area>
                        <input type="text" placeholder="Buscar aposta" />
                        <FontAwesomeIcon className="search_icone" icon={faMagnifyingGlass} />
                    </Search_area>
                    <div>
                        {Authenticated || getToken  ? (
                            <div className="user_area">
                                <div>
                                    Bem vindo, 
                                    <span className="userName"> {getUseName ? getUseName : "usuário"}</span>
                                </div>
                                {/* <img src={getUsePhoto ? getUsePhoto : "https://cdn-icons-png.flaticon.com/512/149/149071.png"} alt="" /> */}
                                <LogoutBtn />
                            </div>
                        ) : (
                            <>
                                <Link className="link" to="/login">
                                    Acessar conta
                                </Link>
                                <Link className="link" to="/register">
                                    Registrar
                                </Link>
                            </>
                        )}
                    </div>

                    <div className="cart_area" style={{ display: Authenticated || getToken ? "flex" : "none" }}>
                        <FontAwesomeIcon className="cart_icone" icon={faCartShopping} />
                        <div className="cart_info">
                            <p>Saldo: R$ 0,00</p>
                            <Btn text={"Adicionar saldo"} />
                        </div>
                    </div>
                </div>
            </div>
            <section className="header_footer_area">
                <Menu toggleMenu={menu} setMenu={setMenu} />

                {menu ? (
                    <FontAwesomeIcon className="menu_icone" icon={faBars} onClick={() => setMenu(!menu)} />
                ) : (
                    <FontAwesomeIcon className="menu_icone" icon={faSquareXmark} onClick={() => setMenu(!menu)} />
                )}
            </section>
        </HeaderContainer>
    );
};

export default Header;
