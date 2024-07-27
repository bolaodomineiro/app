import styled from "styled-components";

export const CardContainer = styled.div`
  width: 380px;
  border-radius: 15px;
  border: 1px solid #AB0519;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 15px;
  }

  .headerText {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0px 10px;

        h3 {
            color: #AB0519;
            font-weight: bold;
            font-size: 2rem;
        }

        p {
            display: flex;
            justify-content: center;
            height: 50px;
            text-align: center;
            font-weight: bold;
            font-size: 1rem;
        }

        @media (max-width: 878px) {
            h3 {    
                font-size: 1.6rem;
            } 
        }

        @media (max-width: 690px) {
            h3 {    
                font-size: 1.6rem;
            } 
        }
    }

   

    .mainText {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 10px 0px;

        a {
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
        justify-content:center;
        align-items: center;
        padding: 20px 15px ;
        gap: 10px;
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

    @media (max-width: 878px) {
       width: 300px;
    }


    

`