import React, { useState } from 'react'
import { ProductSectionContainer } from "./ProductSectionStyles"
import ProductCard from "../cards/productCard/ProductCard"
import TextBox from "../textContent/TextBox"
import Btn from "../button/Btn"

import Box01 from "../../../dist/assets/Box1.avif";
import Box02 from "../../../dist/assets/Box2.avif";
import Box03 from "../../../dist/assets/Box3.avif";



/// data example
const data = [
    {
        image: Box01,
        title: "BOLÃO MEGA SENA",
        description: "Jogo de 12 dezenas + Jogo de 13 dezenas",
        count: 16,
        price: 30
    },
    {
        image: Box02,
        title: "BOLÃO LOTOFÁCIL",
        description: "1 Jogo de 18 dezenas",
        count: 16,
        price: 30 
    },
    {
        image: Box03,
        title: "BOLÃO DA QUINA",
        description: "3 Jogos de 18 dezenas",
        count: 16,
        price: 30
    },
    {
        image: Box01,
        title: "BOLÃO MEGA SENA",
        description: "Jogo de 12 dezenas + Jogo de 13 dezenas",
        count: 16,
        price: 30
    },
    {
        image: Box02,
        title: "BOLÃO LOTOFÁCIL",
        description: "1 Jogo de 18 dezenas",
        count: 16,
        price: 30 
    },
    {
        image: Box03,
        title: "BOLÃO DA QUINA",
        description: "3 Jogos de 18 dezenas",
        count: 16,
        price: 30
    },
    {
        image: Box01,
        title: "BOLÃO MEGA SENA",
        description: "Jogo de 12 dezenas + Jogo de 13 dezenas",
        count: 16,
        price: 30
    },
    {
        image: Box02,
        title: "BOLÃO LOTOFÁCIL",
        description: "1 Jogo de 18 dezenas",
        count: 16,
        price: 30 
    },
    {
        image: Box03,
        title: "BOLÃO DA QUINA",
        description: "3 Jogos de 18 dezenas",
        count: 16,
        price: 30
    }
];

const ProductSection = () => {

    const [limit, setLimit] = useState(6);

    const hendleSetLimit = () => {
        setLimit(limit + 3);
    }



    return (
        <ProductSectionContainer>
            <div  className="textContent">
                <TextBox 
                    title="CONFIRA NOSSOS BOLÕES" 
                    text="Faça sua aposta!"
                />
            </div>
            <section className="productSection">
                <div className="productCards">
                    {
                        data.slice(0, limit).map((item, index) => (
                            <ProductCard
                                key={index}
                                image={item.image}
                                title={item.title}
                                description={item.description}
                                count={item.count}
                                price={item.price}
                            />
                        ))
                    }
                </div>
                <div className="btnContainer">
                    <Btn 
                        onClick={() => hendleSetLimit()}
                        text={"VER MAIS JOGOS"} 
                    />
                </div>
            </section>
        </ProductSectionContainer>
    )
}

export default ProductSection