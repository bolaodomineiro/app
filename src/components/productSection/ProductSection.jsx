import { ProductSectionContainer } from "./ProductSectionStyles"
import ProductCard from "../cards/productCard/ProductCard"
import TextBox from "../textContent/TextBox"

import Box01 from "../../assets/images/Box1.png";
import Box02 from "../../assets/images/Box2.png";
import Box03 from "../../assets/images/Box3.png";

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
    }
];

const ProductSection = () => {
    return (
        <ProductSectionContainer>
            <div  className="textContent">
                <TextBox 
                    title="CONFIRA NOSSOS BOLÕES" 
                    text="Faça sua aposta!"
                />
            </div>
            <section className="productSection">
                
                {
                    data.map((item, index) => (
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

            </section>
        </ProductSectionContainer>
    )
}

export default ProductSection