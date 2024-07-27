import styled from "styled-components";

export const Container = styled.div`
    width: 300px;

    border-radius: 35px;


    .headerResult {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border-radius: 35px 35px 0px 0px;
        background-color: #AB0519;
        height: 60px;
        color: #fff;
        font-weight: 400;
        font-size: 1rem;
    }   
  
    .mainResult {
            
        background-color: #fff;

        ol {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100%;
            width: 100%;
            font-weight: 500;
            font-size: 2rem;
            padding: 30px 0px;

            li {
               word-spacing: 20px
            }
        }

        .orderResult {
            display: flex;
            width: 100%;
            height: 45px;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-weight: 500;
            font-size: 1rem;
            background-color: #D9D9D9;
        }
    }

    .footerResult {
       height: 35px;
       display: flex;
       justify-content: center;
       align-items: center;
       background-color: #AB0519;
       color: #fff;
       font-weight: 500;
       font-size: 1rem;
       border-radius: 0px 0px 35px 35px;
    }

`