import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 0px;

    h3 {
        padding-bottom: 50px;
        font-size: 2.5rem;
        font-weight: bold;
        color: #AB0519;
        opacity: 0;
        animation: textFadeIn 2s  ease forwards;
    }

    h4 {
        padding-bottom: 10px;
        font-size: 1.2rem;
        font-weight: bold;
    }



    @keyframes textFadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    .rule {
        width: 60%;
        padding: 20px;
        box-shadow: 0px 0px 10px 0px #aaa;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-right: -200%;
        animation: fadeIn 1s ease forwards;

        p {
            font-size: 1rem;
            line-height: 1.8rem;
        }

        button {
            padding: 5px;
            margin-top: 20px;
        }

        @media (max-width: 769px) {
            width: 90%;
        }
    }

    @keyframes fadeIn {
        from {
            margin-right: -200%;
        }
        to {
            margin-right: 0;
        }
    }


`