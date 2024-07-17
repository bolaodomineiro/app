import styled from "styled-components";

export const CountContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    width: 100%;
    padding: 10px 0px;

    .btn-decrease, .btn-increase {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 22px;
        height: 22px;
        border-radius: 50%;
        background-color: #D9D9D9;
        font-weight: bold;
        font-size: 1rem;
        cursor: pointer;
    }

    .quantity {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 110px;
        height: 30px;
        border-radius: 30px;
        border: 1px solid #000;
        color: #000;
        font-weight: bold;
        font-size: 1rem;
    }
 `