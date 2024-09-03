import styled from "styled-components";


export const ContainerFaq = styled.section`
    width: 90%;
    margin-top: 10px;

    .faq_title{
        width: 100%;
        display: flex;
        gap: 10px;
        align-items: center;
        justify-content: space-between;
        font-weight: bold;
        font-size: 1rem;
        background-color: #AB0519;
        padding: 10px 15px ;
        color: #fff;
        cursor: pointer;

        .faq_icon {
            font-size: 1.5rem;
        }

        @media (max-width: 450px) {
            font-size: 0.8rem;
        }
    }

    .faq_description {
        max-height:0 ;
        overflow: hidden;
        transition: all 0.5s ;
        background-color: #F3EED9;

        p {
            font-size: 1rem;
            padding: 10px;
            font-weight: bold;
        }
    }
        
    .active {
        max-height: 400px;
    }

`