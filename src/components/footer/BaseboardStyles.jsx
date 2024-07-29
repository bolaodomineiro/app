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
        position: relative;

        .contactMessage {
            width: 60px;
            height: 60px;
            color: #000;
            cursor: pointer;
            font-weight: 700;
            font-size: calc(1.8rem + 0.8vw);
            text-align: center;
            position:fixed;
            right: 25px;
            bottom: 10px;
            z-index: 99;
            border-radius: 50%;

            @media (max-width: 370px) {
                height: 50px;
                width: 50px;
                right: 10px;
            }
        }

        .balloon {
            opacity: 0;
            position: fixed;
            z-index: -1;
            padding: 5px 10px;
            background-color: #ededed;
            right: 90px;
            bottom: 10px;
            border-radius: 8px;
            color: #000;
            box-shadow: 0px 3px 8px 2px rgba(0, 0, 0, 0.3);
            animation: animationOpacity 12s 5s ;
            trasition: all 1s;

            @keyframes animationOpacity {
                0%, 20% {
                    opacity: 0.5;
                    z-index: 99;
                }

                20%, 90% {
                    opacity: 1;
                    z-index: 99; 
                }
                100%{
                    opacity: 0;
                    z-index: -1;
                }
            }

            h4 {
                font-size: 0.8rem;
                font-weight: 500;
            }

            p {
                font-size: 0.7rem;
                line-height: 1.4;
                width: 230px;
            }

            @media (max-width: 370px) {
                right: 70px;

                h4 {
                    font-size: 0.7rem;
                }
                
                p {
                    width: 160px;
                    font-size: 0.6rem;
                }

                
            }

        }

        .contactMessage:hover + .balloon {
            opacity: 1;
            z-index: 99;
        }

    }

`  
