import styled from "styled-components";

export const CardContainer = styled.div`
  width: 300px;
  border-radius: 15px;
  border: 1px solid #AB0519;



  img {
    width: 100%;
    height: 150px;
    border-radius: 11px;
  }

  .headerText {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 10px 0px;

        h3 {
            color: #AB0519;
            font-weight: bold;
            font-size: 1.1rem;
        }

        p {
            text-align: center;
            font-weight: bold;
            font-size: 0.9rem;
        }
    }

    .mainText {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 10px 0px;

        a {
            color: #AB0519;
            font-weight: bold;
            font-size: 1rem;
        }

        p {
            text-align: center;
            font-size: 0.9rem;
           
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
        justify-content: space-evenly;
        align-items: center;
        padding: 20px 0px;
        
    }
    

`