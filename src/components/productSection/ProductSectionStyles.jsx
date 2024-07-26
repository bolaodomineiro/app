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
        }

        p {
            text-align: center;
            font-weight: bold;
            font-size: 2.5rem;
        }
    }

    .productSection {
        display: flex;
        flex-direction: column;
        align-items: center;

        .productCards {
            display: flex;
            width: 96%;
            justify-content:center;
            align-items: center;
            flex-wrap: wrap;
            gap: 45px;

            @media (max-width: 1193px) { 
                gap: 30px;
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

    @media (max-width: 1293px) { 
        padding: 0px 0px 60px;
    }

    @media (max-width: 1300px) { 
        .textContent {
            h3 {    
                font-size: 2.3rem;
            }

            p {
                font-size: 1.2rem;
            }   
        }
    }

    @media (max-width: 500px) { 
        .textContent {
            h3 {    
                font-size: 1.8rem;
            }

            p {
                font-size: 1rem;
            }   
        }
    }

    @media (max-width: 400px) { 
        .textContent {
            h3 {    
                font-size: 1.4rem;
            }

            p {
                font-size: 1.2rem;
            }   
        }
    }



`