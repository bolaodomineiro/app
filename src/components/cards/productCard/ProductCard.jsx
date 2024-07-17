import { CardContainer } from "./ProductCardStyles";
import Count from "../../count/Count";
import Btn from "../../button/Btn";

const ProductCard = ({image, title, description, count, price}) => {

    console.log(image, title, description, count, price)
    
    return (
        <CardContainer>
            <img src={image} alt={title}/>
            <div className="headerText">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <div className="mainText">
                <a href="#">Ver Jogos</a>
                <p>{count} cotas</p>
                <p className="priceText">
                    <span>R$ {price} por cota</span> 
                </p>
            </div>
            <Count />
            <div className="footerText">
                <p className="priceTotal">
                    <span>Total:</span>
                    R$ 30,00
                </p>
                <Btn text={"Jogar agora"} />
            </div>
        </CardContainer>
    )
}

export default ProductCard