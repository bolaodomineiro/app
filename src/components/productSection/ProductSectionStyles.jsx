import styled from "styled-components";

export const ProductSectionContainer = styled.section`
    width: 100%;
    padding: 0px 35px 60px;

    .textContent {
        display: flex;
        justify-content: center;
        align-items: center;
        padding:35px 0px;

        h3 {    
            color: #AB0519;
            font-weight: bold;
            font-size: 1.2rem;
        }

        p {
            text-align: center;
            font-weight: bold;
            font-size: 1rem;
        }
    }

    .productSection {
        display: flex;
        justify-content: center;
        gap : 20px;
    }
`