import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    height: 60px;
    align-items: center;
    justify-content: center;
    padding: 10px 60px;
    color: #fff;
    gap: 5px;
    
    

    p{
        font-size: 1.2rem;
        font-weight: bold;
        width: 95px;
        text-align: center;
    
    }

    .benefits_icone {
        height: 60px;
        width: 50px;
    }

    @media (max-width: 840px) {
        padding: 0px 20px;
        height: 45px;
      

        p{
            font-size: 0.9rem;
            width: 75px;
        }

        .benefits_icone {
            height: 45px;
        }
    }

    @media (max-width: 640px) {
        padding: 0px 20px;
        height: 35px;

        .benefits_icone {
            height: 45px;
            width: 35px;
        }
    }

    @media (max-width: 520px) {
       
        p{
            font-size: 0.6rem;
            width: 50px;
        }

        .benefits_icone {
            height: 35px;
            width: 35px;
        }

    }

    @media (max-width: 419px) {
        padding: 0px 17px;
        height: 35px;

        p{
            width: 40px;
        }

        .benefits_icone:nth-child(1) {
           margin-left: -8px;
        
        }

    }

   
 
`