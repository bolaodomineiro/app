import styled from "styled-components";

export const SectionContainer = styled.section`
    .textContent {
        text-align: center;
        padding: 20px 0px 0px;

        h3 {
            color: #000;
            font-size: 2rem;

            @media (max-width: 320px) {
                font-size:2.2rem;
            }
        }

        p {
            font-weight: bold;
            font-size: 1.8rem;
        }
    }

    .guids {
        padding: 50px 10px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 30px;
    }
`