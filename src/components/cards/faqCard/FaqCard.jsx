import { ContainerFaq } from "./FaqCardStyles"

const FaqCard = ({title, description}) => {
    return (  
        <ContainerFaq>
            <div className="faq_title">
                <h4>{title}</h4>
            </div>
            <div className="faq_description">
                <p>{description}</p>
            </div>
        </ContainerFaq>
    )
}

export default FaqCard