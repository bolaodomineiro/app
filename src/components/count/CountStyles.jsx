import styled from "styled-components";

export const CountContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap:14px;
    width: 100%;
    padding: 10px 0px;

    .btn-decrease, .btn-increase {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: #AB0519;
        color: #fff;
        font-weight: bold;
        font-size: 1.1rem;
        cursor: pointer;
    }

    .quantity {
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 150px;
        height: 40px;
        border-radius: 30px;
        border: 1px solid #AB0519;
        color: #000;
        font-weight: bold;
        font-size: 1rem;
    }

    @media (max-width: 690px) {

         .quantity {
             width: 80px;
         }
    }
 `