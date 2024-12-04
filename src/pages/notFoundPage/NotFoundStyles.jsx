import styled from "styled-components";

export const ContainerNotFound = styled.section`
    width: 100%;
    min-height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 10px;
    background-color: #fff;

    .notFound {
        display: flex;
        align-items: center;
        gap: 15px;
        width: 300px;
        border-radius: 15px;
        background-color: #F3EED9;
        color: #000;
        position: relative;

        .notFoundText {
            display: flex;
            flex-direction: column;
            gap: 10px;

            h3 {
                font-size: 2.5rem;
                padding: 10px 0px 0px 20px ;
            }

            p {
                font-size: 1.2rem;
                font-weight: 500;
                width: 300px;
                padding: 10px;
                background-color: #fff;
                color: #AB0519;
            }
            
            button {
                margin-left: 20px;
                margin-top: 10px;
                margin-bottom: 15px;
            }
        }


        img {
            width:90px;
            height: 90px;
            position: absolute;
            right: 10px;
            top: 40px;
        }


    }
`