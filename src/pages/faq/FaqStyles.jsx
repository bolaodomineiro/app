import styled from "styled-components"; 

export const FaqSectionContainer = styled.section`  
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 0px;

    div h3{
        font-size: 2.5rem;
        opacity: 0;
        color: #AB0519;
        margin-bottom: 50px;
        animation: textFadeIn 2.4s  ease forwards;

        @keyframes textFadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }

        @media (max-width: 420px) {
            font-size: 2rem;
        }

        @media (max-width: 330px) {
            font-size: 1.5rem;
        }
    }

    .faq_section {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-left: -200% ;
        animation: faqAnimation 1s ease 0.2s forwards;
    }

    @keyframes faqAnimation {
        0% {
            margin-left: -200%;
        }
        100% {
            margin-left: 0;
        }
    }

    button {
        margin-top: 50px;
    }

`