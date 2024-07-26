import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    flex:1;
    align-items: center;
    justify-content: center;
    color: #fff;
  


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
  
        height: 45px;

        p{
            font-size: 0.9rem;
            width: 70px;
        }

        .benefits_icone {
            height: 45px;
        }
    }

    @media (max-width: 640px) {
    
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
       
       
        p{
            font-size: 0.6rem;
            width: 60px;
        }

        .benefits_icone{
            width: 25px;
        }

    }

  

 
`