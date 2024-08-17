import styled from "styled-components";

export const SliderShow = styled.section`
    width: 100%;
    padding: 0px 70px;

    @media (max-width: 930px) {
        padding: 0px 0px;
    }

    .swiper {
        width: 100%;
        height: 350px;

        .slide {
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .swiper-button-next,
        .swiper-button-prev {
            Background-color:  #AB0519 ;
            width: 30px;
            height: 40px;
            border-radius:6PX;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
            transition: all 0.3s ease;

            &:hover {
                background-color: #e90621;
            }
        }

        .swiper-button-next:after,
        .swiper-button-prev:after {
            color: #fff;
            font-size: 20px;
            font-weight: bolder;
        }

        .swiper-pagination-bullet-active {
            background: var(--swiper-pagination-color, #AB0519););
        }

        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .swiper-pagination-clickable 
        .swiper-pagination-bullet {
            width: 12px;
            height: 12px;
        }

        .swiper-pagination-bullets, 
        .swiper-pagination-bullets.swiper-pagination-horizontal {
            bottom: 15px;
        }

    }       
`
export const BenefitsOverview = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100px;
    padding: 0px 35px;
    

    .benefits{
        background-color: #AB0519;
        display: flex;
        align-items: center;
        height: 100%;
        width: calc(100% - 30%);
        
        position: relative;
        top: -10px;
        z-index: 3;

        div:not(:first-child) {
            border-left: 1px solid #fff;
        }

         @media (max-width: 840px) {
            width: calc(100% - 5%);
        }

        @media (max-width: 350px) {
            width: 100%;
        }
    }

    @media (max-width: 600px) {
        padding: 0px;
    }

    

`