import React from "react";
import { BaseboardContainer } from "./BaseboardStyles";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faSquareInstagram } from '@fortawesome/free-brands-svg-icons';


const Baseboard = () => {
    return (
        <BaseboardContainer  className="baseboard">
            <section className="socialMediaContainer">
                <div className="socialMedias">
                    <p>Siga nossas Redes Sociais e fique por dentro!</p>
                    <div className="socialIcons">
                        <a href="">
                            <FontAwesomeIcon className="socialMediaIcon" icon={faFacebook} />
                        </a>
                        <a href="">
                            <FontAwesomeIcon className="socialMediaIcon" icon={faSquareInstagram} />
                        </a>
                        <a href="">
                            <FontAwesomeIcon className="socialMediaIcon" icon={faCirclePlay} />
                        </a>
                    </div>
                </div>
            </section>
            <section className="baseboarBoxInfor">

            </section>
        </BaseboardContainer>
    )
}

export default Baseboard