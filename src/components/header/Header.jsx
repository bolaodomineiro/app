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
import CryptoJS from "crypto-js";

const Header = () => {
    // Chave de criptografia
    const secretKey = "sua-chave-secreta"; // Guarde isso em uma variável de ambiente

    const getUseName = JSON.parse(localStorage.getItem("userName"));
    const getaccessToken = localStorage.getItem("token");
    const getUseId = JSON.parse(localStorage.getItem("userId"));

    const [menu, setMenu] = useState(true);
    const { Authenticated } = useAuthContext();
    const lestName = getUseName ? getUseName.split(" ")[0] : "usuário";

    // Função para criptografar o UID
    function encryptUID(uid) {
        return CryptoJS.AES.encrypt(uid, secretKey).toString();
    }

    // Função para redirecionar para o painel
    const handleGoToPanel = () => {
        const encryptedUID = encryptUID(getUseId);// criptografa o UID
        window.location.href = `http://localhost:4001/dashboard?uid=${encodeURIComponent(encryptedUID)}`; // redireciona para o painel
    };

    const headerRef = useRef(null);
    const handleClickOutside = (event) => {
        if (headerRef.current && !headerRef.current.contains(event.target)) {
            setMenu(true);
        }
    };
    document.addEventListener("click", handleClickOutside);

    const hendleScroll = (number) => {
        window.scrollTo({
            top: number, // posição vertical
            left: 0, // posição horizontal
            behavior: 'smooth' // rolagem suave
        });
    }

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
                        {Authenticated || getaccessToken ? (
                            <div className="user_area">
                                <div>
                                    Bem vindo,
                                    <span className="userName">{lestName}</span>
                                </div>
                                {/* <img src={getUsePhoto ? getUsePhoto : "https://cdn-icons-png.flaticon.com/512/149/149071.png"} alt="" /> */}
                                <a 
                                    onClick={handleGoToPanel}
                                    className="LogoutBtn" 
                                >
                                    <Btn text="Panel" />
                                </a>
                                <LogoutBtn />
                            </div>
                        ) : (
                            <>
                                <Link className="link" to="/login"
                                    onClick={() => hendleScroll(0)}
                                >
                                    Acessar conta
                                </Link>
                                <Link className="link" to="/register"
                                    onClick={() => hendleScroll(0)}
                                >
                                    Registrar
                                </Link>
                            </>
                        )}
                    </div>

                    <div className="cart_area" style={{ display: Authenticated || getaccessToken ? "flex" : "none" }}>
                        <FontAwesomeIcon className="cart_icone" icon={faCartShopping} />
                        <div className="cart_info">
                            <p>Saldo: R$ 0,00</p>
                            <Btn text={"Adicionar saldo"} />
                        </div>
                    </div>
                </div>
            </div>
            <section className="header_footer_area">
                <Menu toggleMenu={menu} setMenu={setMenu} hendleScroll={hendleScroll} />

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
