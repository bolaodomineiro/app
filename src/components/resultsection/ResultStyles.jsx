import styled from "styled-components";

export const ResultContainer = styled.div`
    
    background-color: #F3EED9;
    padding-bottom: 60px;

    .textContent {
        text-align: center;
        padding: 20px 0px 0px;

        h3 {
            color: #AB0519;
            font-size: 3rem;
        }

        p {
            font-weight: bold;
            font-size: 1.8rem;
        }
    }

    .results {
        padding: 50px 10px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 40px;
    }

    .btnResults {
        display: flex;
        justify-content: center;
        align-items: center;

        button {
            width: 250px;
            height: 50px;
        }   
     
    }
`