import { ProductSectionContainer } from "./ProductSectionStyles";
import TextBox from "../textContent/TextBox";
import ProductCard from "../cards/productCard/ProductCard";
import Btn from "../button/Btn";

import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyAxejO0T_asVRfIETOB8FIK8HJ1J09jCDc",
    authDomain: "bolaomineiro-bd92d.firebaseapp.com",
    projectId: "bolaomineiro-bd92d",
    storageBucket: "bolaomineiro-bd92d.firebasestorage.app",
    messagingSenderId: "216084526672",
    appId: "1:216084526672:web:03c16ea415ae6bbea34355",
    measurementId: "G-T62C0FZD7Q"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const ProductSection = () => {
    const [jogos, setJogos] = useState([]);

    async function getJogos() {
        const jogosCollection = collection(db, 'jogos');
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
