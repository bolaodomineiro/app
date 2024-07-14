import { CardContainer } from "./CardStyles";

const Card = ({icone, text}) => {
    return (
        <CardContainer>
            {icone}
            <p>{text}</p>
        </CardContainer>
    )
}

export default Card;