import React from "react";
import { BaseboardContainer } from "./BaseboardStyles";
import Logo from "../../assets/images/logotipo.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faSquareInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";


const Baseboard = () => {
    return (
        <BaseboardContainer  className="baseboard">
            <section className="socialMediaContainer">
                <div className="socialMedias">
                    <p>Siga nossas Redes Sociais e fique por dentro!</p>
                    <div className="socialIcons">
                        <a href="#">
                            <FontAwesomeIcon className="socialMediaIcon" icon={faFacebook} />
                        </a>
                        <a href="#">
                            <FontAwesomeIcon className="socialMediaIcon" icon={faSquareInstagram} />
                        </a>
                        <a href="#">
                            <FontAwesomeIcon className="socialMediaIcon" icon={faCirclePlay} />
                        </a>
                    </div>
                </div>
            </section>
            <section className="baseboarBoxInfor">
                <section className="baseboardMap">
                    <div className="baseboardLinks">
                        <h3>MAPA DO SITE</h3>
                        <Link className="link" to="/"><p>Quina</p></Link>
                        <Link className="link" to="/"><p>Mega Sena</p></Link>
                        <Link className="link" to="/"><p>Ofertas</p></Link>
                        <Link className="link" to="/"><p>Resultados</p></Link>
                        <Link className="link" to="/Rule"><p>Regulamento</p></Link>
                        <Link className="link" to="/FaqSection"><p>Perguntas Frequentes</p></Link>
                        <Link className="link" to="/"><p>Bolões</p></Link>
                    </div>
                </section>
                <section className="sobre">
                    <img src={Logo} alt="Logo Bolao do Mineiro" />
                    <div>
                        <h3>SOBRE NÓS</h3>
                        <p>Nossa empresa está no ramo de jogos de apostas desde o ano de 2019. Somos uma empresa séria e buscamos sempre trazer inovações para mudar o seu jeito de jogar, com isso, ampliamos ainda  mais as possibilidades de você ganhar!</p>
                    </div>
                </section>

                <a href="#">
                    <div className="whats-btn">
                        <FontAwesomeIcon className="whatsappIcon" icon={faWhatsapp} />
                    </div>
                    <div className="balloon">
                        <h4>Precisa de ajuda?</h4>
                        <p>Chama a gente no WhatsApp, e tire suas dúvidas conosco!</p>
                    </div>
                </a>

            </section>
            <div className="baseboardCopy">
                <p>Copyright © 2024 Bolão do Mineiro. Todos os direitos reservados.</p>
            </div>
        </BaseboardContainer>
    )
}

export default Baseboard