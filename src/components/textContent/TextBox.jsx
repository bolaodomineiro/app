import  { TextContainer } from "./TextStyles";
const TextBox = ({title, text}) => {
    return (
        <TextContainer>
            <div>
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
        </TextContainer>
    )
}

export default TextBox;