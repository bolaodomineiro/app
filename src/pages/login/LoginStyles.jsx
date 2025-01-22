import styled from "styled-components";

export const ContainerLogin = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 10px;
    background-color: #fff;
    margin-top: 155px;

    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 10px;
      width: 300px;
      height: 400px;
      border-radius: 15px;
      background-color: #F3EED9;
      padding: 20px;

    label {
      display:block;
      font-weight:600;
      font-size: 0.9rem;
      padding: 5px 0px;
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
      font-size: 0.9rem;
      font-weight: bold;
      box-shadow: inset 0px 2px 5px 0px rgba(0, 0, 0, 0.3);
    }

    input::placeholder {
      font-size: 0.9rem;
      font-weight: bold;
    }

    .forgot{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 250px;
      height: 50px;
      border-bottom: 2px solid #AB0519;
      padding-bottom: 10px;

    .forgot_link {
      color: #000;
      font-weight: bold;
      font-size: 0.9rem;
      text-decoration: none;
      trasition: all 0.3s ease;
        &:hover {
          color: #AB0519;
        }
    }
    }

    button {
      width: 250px;
      padding: 10px 0px;
      margin-top: 10px;
    }

    .register_link {
      color: #000;
      font-weight: bold;
      font-size: 1rem;
      transition: all 0.3s ease;
      border: 1px solid #000;
      border-radius: 20px;
      padding: 10px 30px;
      margin-top: 10px;

        &:hover {
          color: #AB0519;
          border: 1px solid #ab0519;
        }
      }
    }
`