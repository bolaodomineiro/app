import { ContainerGuid } from "./GuidStyles"

const GuidCard = ({$title, $text}) => {
    return (
        <ContainerGuid>
            <h4>{$title}</h4>
            <p>{$text}</p>
        </ContainerGuid>
    )
}

export default GuidCard;