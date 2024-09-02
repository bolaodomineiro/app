import React, { useState } from "react"
import { ContainerFaq } from "./FaqCardStyles"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'

const FaqCard = () => {
    
    const data = [
        {
            title: "1. COMO FUNCIONA O BOLÀO DO MINEIRO?",
            description: "Escolha 10 dezenas, Entre as dezenas de 00 até a dezena 99. E monte seu jogo com suas 10 dezenas melhores dezenas."
        },
        {
            title: "2. EU POSSO COLOCAR DEZENAS REPETIDAS NO MEU BILHETE?",
            description: "Pode sim!! Você pode colocar DEZENAS REPETIDAS até no maximo 3 vezes. Exemplo: 00.11.14.20.40.51.18.23.51.51. Colocamos 3 (três) vezes a DEZENA 51 no bilhete, então terá que dá nos resultados três vezes a dezena: 51, 51 e 51."
        },
        {
            title: "3. QUANDO INÍCIA O BOLÃO DO MINEIRO?",
            description: "Termos o Bolão de Segunda, outro de Quarta e outro de Sábado."
        },
        {
            title: "4. E COMO EU MARCO AS DEZENAS DO MEU BILHETE NO BOLÃO DO MINEIRO?",
            description: "Termos o Bolão de Segunda, outro de Quarta e outro de Sábado."
        }
    ]


    const [faqId, setFaqId] = useState(0)
    const [isOpen, setIsOpen] = useState(true)

    const hendleFaq = (index) => {
        setFaqId(index)
        const faq = document.querySelectorAll(".faq_description") 
        faq.forEach((faq) => {
            faq.classList.remove("active")
        })

        if(faqId === index && isOpen) {
            setIsOpen(false)
            setFaqId(null)
            faq[index].classList.remove("active")
        }else {
            setIsOpen(true)
            faq[index].classList.add("active")
        }
    
    }

    return (
        <>
            {
                data.map((item, index) => (
                    <ContainerFaq key={index}>
                        <div 
                            className="faq_title"
                            onClick={() => hendleFaq(index)}
                        >
                            <h4>{item.title}</h4>
                            {
                                faqId === index ? <FontAwesomeIcon className="faq_icon" icon={faMinus} /> : <FontAwesomeIcon className="faq_icon" icon={faPlus} />
                            }
                        </div>
                        <div className={faqId === index ? "faq_description active" : "faq_description"}>
                            <p>{item.description}</p>
                        </div>
                    </ContainerFaq>
                ))
            }
        </>  
    )
}

export default FaqCard;