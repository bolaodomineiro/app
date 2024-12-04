import { ProductSectionContainer } from "./ProductSectionStyles";
import TextBox from "../textContent/TextBox";
import ProductCard from "../cards/productCard/ProductCard";
import Btn from "../button/Btn";

import React, { useState, useEffect } from 'react';
import { db } from '../../config/firebase.config.ts';
import { collection, getDocs } from 'firebase/firestore';

const ProductSection = () => {
    const [jogos, setJogos] = useState([]);

    async function getJogos() {
        const jogosCollection = collection(db, "jogos");
        const jogosSnapshot = await getDocs(jogosCollection);
        const jogosList = jogosSnapshot.docs.map(doc => doc.data());
        setJogos(jogosList);
    }

    useEffect(() => {
        getJogos();
    }, []);

    const handleSetLimit = () => {
        console.log("Carregar mais jogos");
    };

    return (
        <ProductSectionContainer>
            <div className="textContent">
                <TextBox
                    title="CONFIRA NOSSOS BOLÕES"
                    text="Faça sua aposta!"
                />
            </div>

            <section className="productSection">
                <div className="productCards">
                    {jogos.map((jogo, index) => (
                        <ProductCard
                            key={index}
                            data={jogo.data || 'Data do Sorteio'}
                            image={jogo.image || 'defaultImageUrl'}
                            title={jogo.title || 'Nome não disponível'}
                            description={jogo.description || 'Descrição não disponível'}
                            cotas={jogo.cotas || 'Cotas não disponíveis'}
                            price={jogo.price || 'Preço não disponível'}
                        />
                    ))}
                </div>
                <div className="btnContainer">
                    <Btn
                        onClick={handleSetLimit}
                        text={"VER MAIS JOGOS"}
                    />
                </div>
            </section>
        </ProductSectionContainer>
    );
};

export default ProductSection;
