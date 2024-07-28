import styled from "styled-components";

export const BaseboardContainer = styled.footer` 
    width: 100%;
    heigth: 750px;

    .socialMediaContainer {
        display: flex;
        justify-content: center;
        align-items: center;

        .socialMedias {
            width: calc(100% - 20%);
            border-top: 1px solid #AB0519;
            padding: 0px 10px;

            @media (max-width: 1200px) {
                width: calc(100% - 10%);
                padding: 0px 20px;
            }

            p {
                font-weight: 700;
                font-size: calc(1.8rem + 0.8vw);
                text-align: center;
                padding-top: 30px;

                @media (max-width: 530px) {
                   font-size: calc(1.2rem + 0.8vw);
                   padding-top: 10px;
                }

                 @media (max-width: 400px) {
                    font-size: calc(1rem + 0.8vw);
                 }

                @media (max-width: 370px) {
                    font-size: calc(0.8rem + 0.8vw);
                }
            }

            .socialIcons {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 50px;
                padding: 30px 10px;

                @media (max-width: 530px) {
                    gap: 20px;
                    padding: 20px 10px;
                }

                .socialMediaIcon{
                    height:100px;
                    width: 100px;
                    color: #AB0519;
                    cursor: pointer;
                    border-radius: 50%;
                    box-shadow:inset 0px 0px 0px 10px #AB0519;
                    overflow: hidden;

                    @media (max-width: 530px) {
                        height:80px;
                        width: 80px;
                        box-shadow:inset 0px 0px 0px 5px #AB0519;
                    }

                    @media (max-width: 370px) {
                        height:50px;
                        width: 50px;
                    }
                }

                
            }

            
        }
    }

    .baseboarBoxInfor {
        width: 100%;
        height: 350px;
        background-color: #AB0519;
    }

`  
