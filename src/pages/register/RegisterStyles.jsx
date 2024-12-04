import styled from "styled-components";

export const ContainerRegister = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 10px;
    background-color: #fff;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        width: 300px;
        border-radius: 15px;
        background-color: #F3EED9;
        padding: 20px;

        label {
            display:block;
            font-weight: 600;
            font-size: 1.2rem;
            padding:  0px 0px 5px;
            cursor: pointer;
        }

        input {
            display: flex;  
            align-items: center;
            width: 250px;
            height: 35px;
            border-radius: 6px;
            padding-left: 10px;
            cursor: pointer;
            color: #000;
            border: none;
            font-size: 1rem;
            font-weight: bold;
            box-shadow: inset 0px 2px 5px 0px rgba(0, 0, 0, 0.3);
        }

        input::placeholder {
            font-size: 1rem;
            font-weight: 500;
            
        }

        button {
            width: 250px;
            padding: 10px 0px;
            margin-top: 10px;
        }
        
    }
`