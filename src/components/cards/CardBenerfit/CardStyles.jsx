import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    height: 40px;
    justify-content: center;
    align-items: center;
    padding: 10px 30px;
    color: #fff;
    gap: 15px;

    p{
        font-size: 0.8rem;
        font-weight: bold;
        width: 60px;
        text-align: center;
    }

    .benefits_icone {
        height: 40px;
    }

    @media (max-width: 510px) {
        padding: 0px 15px;
        height: 30px;
        gap: 10px;

        p{
            font-size: 0.6rem;
            width: 45px;
        }

        .benefits_icone {
            height: 30px;
        }
    }
 
`