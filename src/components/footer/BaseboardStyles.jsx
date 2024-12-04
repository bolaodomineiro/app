import styled from "styled-components";

export const BaseboardContainer = styled.footer` 
    width: 100%;

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
                font-size: calc(1.5rem + 0.8vw);
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
                    height:70px;
                    width: 70px;
                    color: #AB0519;
                    cursor: pointer;
                    border-radius: 50%;
                    box-shadow:inset 0px 0px 0px 6px #AB0519;
                    overflow: hidden;
                    transition: all 0.3s;

                    &:hover {
                        color: #e90621;
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
        display: flex;
        width: 100%;
        background-color: #AB0519;
        position: relative;
        padding: 30px 20px;
        gap: 30px;

        @media (max-width: 760px) {
            flex-direction: column-reverse;
        }
        
        h3 {
            font-weight: 700;
            font-size: 1.3rem;
            color: #fff;
            padding-bottom: 10px;
        }

        .baseboardMap {
            display: flex;
            align-items: center;
            gap: 30px;

            .baseboardLinks {
                display: flex;
                flex-direction: column;

                .link {
                    color : #fff;

                    &:hover {
                        color: #F3EED9;
                    }

                }

            }
        }

        .sobre {
            flex:1;
            display: flex;
            gap: 30px;

            img {
                width: 130px;
                height: 110px;
            }

            p {
                color: #fff;
                font-size: 1rem;
                max-width: 70%;

                @media (max-width: 800px) {
                    font-size: 0.9rem;
                    min-width: 100%;
                }
            }

            @media (max-width: 490px) {
                flex-direction: column;
                align-items: center;
            }
        }



        .whats-btn {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 60px;
            height: 60px;
            padding: 10px;
            background-color: #00A884;
            position:fixed;
            right: 25px;
            bottom: 10px;
            z-index: 99;
            border-radius: 50%;
            cursor: pointer;
            trasition: all 0.5s;
        }

        .whatsappIcon {
            color: #fff;
            width: 40px;
            height: 40px;

        }

        .balloon {
            opacity: 0;
            position: fixed;
            z-index: 99;
            padding: 5px 10px;
            background-color: #ededed;
            right: 100px;
            bottom: 10px;
            border-radius: 8px;
            color: #000;
            box-shadow: 0px 3px 8px 2px rgba(0, 0, 0, 0.3);
            animation: animationOpacity 12s 5s ;
            transition: opacity 0.5s ease;

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
                right: 100px;

                h4 {
                    font-size: 0.7rem;
                }
                
                p {
                    width: 160px;
                    font-size: 0.6rem;
                }

                
            }

        }

        .whats-btn:hover + .balloon {
            opacity: 1;
            z-index: 99;
        }

    }

    .baseboardCopy {
        background-color: #000;
        text-align: center;
        font-size: 1rem;
        color: #fff;
        padding: 4px 10px;

        @media (max-width: 500px) {
            font-size: 0.8rem;
        }
    }

`  
