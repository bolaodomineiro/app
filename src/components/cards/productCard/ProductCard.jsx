import React, { useEffect, useState } from "react";
import { CardContainer } from "./ProductCardStyles";
import Count from "../../count/Count";
import Btn from "../../button/Btn";
import { Link } from "react-router-dom";

const ProductCard = ({ image, data, title, description, cotas, price }) => {

    const [priceUp, setPriceUp] = useState(1)

    const handlePriceUp = (priceUp) => {
        setPriceUp(priceUp)

    }

    return (
        <CardContainer>
            <img src={image} alt={title} />
            <div className="headerText">
                <p>Data: {data}</p>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <div className="mainText">
                <Link className="link" to="/">Ver Jogos</Link>
                <p>{cotas} cotas</p>
                <p className="priceText">
                    <span>R$ {price.toFixed(2)} por cota</span>
                </p>
            </div>

            <Count handlePriceUp={handlePriceUp} cotas={cotas} />

            <div className="footerText">
                <p className="priceTotal">
                    <span>Total:</span>
                    R$ {(price * priceUp).toFixed(2)}
                </p>
                <Btn text={"Jogar agora"} />
            </div>
        </CardContainer>
    )
}

export default ProductCard