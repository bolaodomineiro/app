import React from "react";
import { BaseboardContainer } from "./BaseboardStyles";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faSquareInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
// hooks
import  useScroll  from "../../hooks/scroll";



const Baseboard = () => {

    const { hendleScroll } = useScroll();
    const userName = localStorage.getItem('userName');

    return (
        <BaseboardContainer className="baseboard">
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
                        <Link className="link" to="/"><p>Concursos</p></Link>
                        <Link className="link" to="/"><p>Ofertas</p></Link>
                        <Link className="link" to="/"><p>Resultados</p></Link>
                        <Link 
                            className="link" 
                            to="/Rule"><p onClick={() => hendleScroll(0)}>Regulamento</p>
                        </Link>
                        <Link 
                            className="link" 
                            to="/FaqSection">
                                <p onClick={() => hendleScroll(0) }>Perguntas Frequentes</p>
                        </Link>
                        <Link 
                            className="link" 
                            to="/">
                                <p onClick={() => hendleScroll(450) }>Bolões</p>
                        </Link>
                    </div>
                </section>
                <section className="sobre">
                    <div>
                        <h3>SOBRE NÓS</h3>
                        <p>Nossa empresa está no ramo de jogos de apostas desde 2019. Somos uma empresa séria e buscamos sempre trazer inovações para mudar o seu jeito de jogar, com isso ampliamos ainda mais as possibilidades de você ganhar!</p>
                    </div>
                </section>

                <section className="contato">
                    <h3>CONTATO</h3>
                    <p>
                        <FontAwesomeIcon className="icon" icon={faPhone} />
                        (35) 9 9231-5263
                    </p>
                    <p>
                        <FontAwesomeIcon className="icon" icon={faWhatsapp} />
                        (35) 9 9231-5263
                    </p>
                    <p>
                        <FontAwesomeIcon className="icon" icon={faEnvelope} />
                        bolaodomineiro@gmail.com
                    </p>
                </section>

                <a className="whatsappLink" target="_blank" href={`https://wa.me/5535992315263?text=Olá!%20Preciso%20de%20Suporte!`}>
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
                <p>Copyright © 2025 Bolão do Mineiro. Todos os direitos reservados.</p>
            </div>
        </BaseboardContainer>
    )
}

export default Baseboard