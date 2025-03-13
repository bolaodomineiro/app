import styled from "styled-components";

export const ContainerRegister = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 10px;
    background-color: #fff;
    margin-top: 150px;

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

      h3 {
        font-size: 1.2rem;
        padding-bottom: 4px;
        border-bottom: 2px solid #AB0519;
      }

      label {
        display:block;
        font-weight: 600;
        font-size: 0.8rem;
        padding:  0px 0px 2px;
        cursor: pointer;
      }

      input, .select {
        display: flex;  
        align-items: center;
        width: 250px;
        height: 30px;
        border-radius: 6px;
        padding-left: 10px;
        cursor: pointer;
        color: #000;
        border: none;
        font-size: 0.8rem;
        font-weight: bold;
        box-shadow: inset 0px 2px 5px 0px rgba(0, 0, 0, 0.2);
        
      }

      input::placeholder {
        font-size: 0.9rem;
        font-weight: 500;
      }

      button {
        width: 250px;
        padding: 10px 0px;
        margin-top: 20px;
      }

      
      .asterisk {
        color:red;
      }

      .terms-container {
        display: flex;
        width: 250px;
        align-items: center;
        gap: 10px; /* Espaço entre o checkbox e o texto */
      } 

      .checkbox {
        width: 16px;
        height: 16px;
        cursor: pointer;
      }

      .terms-text {
        font-size: 12px;
        color: #333;
        cursor: pointer;
      }

      .boldtext {
        font-weight: bold;
      }

      .password-container {
        position: relative;
        .eye-icon {
          position: absolute;
          font-size: 0.8rem;
          top: 50%;
          right: 10px;
          transform: translateY(-50%);
          cursor: pointer;
        }
    }
        
  }
`