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
        transition: all 0.3s ease;

        &:hover {
            background-color: #e90621;
        }
    }

    .quantity {
        text-align: center;
        width: 210px;
        height: 40px;
        border-radius: 30px;
        border: 1px solid #AB0519;
        color: #000;
        font-weight: bold;
        font-size: 1rem;

        @media (max-width: 878px) {
            width: 150px;
        }

        @media (max-width: 690px) {
            width: 125px;
        }

    }

`