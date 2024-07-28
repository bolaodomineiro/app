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
            font-size: 4rem;

            @media (max-width: 1300px) { 
                font-size: 2.2rem;
            }

            @media (max-width: 470px) {
                font-size: 1.7rem;
            }

            @media (max-width: 370px) {
                font-size:1.2rem;
            }
        }

        p {
            text-align: center;
            font-weight: bold;
            font-size: 2.5rem;

             @media (max-width: 1300px) {
                font-size: 1.2rem;
             }

             @media (max-width: 400px) {
                font-size: 1.2rem;
             }
        }

    }

    .productSection {
        display: flex;
        flex-direction: column;
        align-items: center;

        .productCards {
            display: flex;
            width: 95%;
            justify-content:center;
            align-items: center;
            flex-wrap: wrap;
            gap: 90px;
            padding: 0px 20px;

            @media (max-width: 1578px) { 
                gap: 30px;
                width: 100%;
            }

        }

        .btnContainer{
            padding-top: 50px;

            button {
                width: 250px;
                height: 50px;
            }
        }
    }

    @media (max-width: 1578px) { 
        padding: 0px 0px 60px;
    }


`