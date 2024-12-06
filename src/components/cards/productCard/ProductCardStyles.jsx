import styled from "styled-components";

export const CardContainer = styled.div`
    min-width: 300px;
    border-radius: 16px;
    border: 1px solid #AB0519;
    overflow: hidden;

    img {
        width: 100%;
        height: 200px;
    }

    .headerText {
            padding: 5px 10px 0px;
            text-align: center;

            h3 {
                color: #AB0519;
                font-weight: bold;
                font-size: 1.6rem;

                @media (max-width: 873px) { 
                    font-size: 1.3rem;  
                }
            }

            p {
                padding: 10px 0px;
                text-align: center;
                font-weight: bold;
                font-size: 1rem;
            }

        }

    .mainText {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 10px 0px;

        .link {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 150px;
            height: 35px;
            color: #AB0519;
            font-weight: bold;
            font-size: 1rem;;
            border: 1px solid #AB0519;
            border-radius:30px;
            margin-bottom: 10px;
            transition: all 0.3s ease;

            &:hover {
                background-color: #AB0519;
                color: #fff;
            }
        }

        p {
            text-align: center;
            font-size: 1rem; 
        }

        .priceText {
            display: flex;
            justify-content: center;
            align-items: center;
            gap:5px;

            span {
                font-size: 1rem;
                font-weight: bold;
                color: #000;
                padding: 10px;
            }
        }

    }


    .footerText {
        display: flex;
        justify-content:space-between;
        align-items: center;
        padding: 20px 30px ;
        gap: 10px;

        @media (max-width: 878px) {
            flex-direction: column;
        }
    }

    .priceTotal {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    button {
        min-width: 140px;
        height: 35px;

        @media (max-width: 430px) {
            min-width: 120px;
        }
    }

    @media (max-width: 873px) {
        max-width: 260px;
    }

    @media (max-width: 669px) {
        min-width: 240px;
    }

    @media (max-width: 589px) {
        min-width: 300px;
    }

`