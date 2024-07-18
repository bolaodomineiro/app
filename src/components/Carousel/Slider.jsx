import React from "react";
import { SliderShow, BenefitsOverview } from "./SliderStykes";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLock, faAward,faDollarSign} from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';// Import Swiper React components
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';// import required modules
import Slid01 from  '../../assets/images/slide01.png';// import banners
import Card from "../cards/CardBenerfit/Card";

const Slider = () => {

    const banners = [
        Slid01,
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeOwaXxlV807hzXuHGueL-c9IlZmXu6Sba5Q&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTYveFwSYndoYRjsP7c-2X5gl1srgOxk42P9xyDpO0P_gTi1YoXs4NerTMvfXpG9AX-y4&usqp=CAU",
        "https://jornalibia.com.br/wp-content/uploads/2017/02/loterias.jpg",
        "https://www.agenciaminas.mg.gov.br/system/news/images/000/117/632/large/Loteria.png?1686327021"
    ];


  return (
    <>
        <SliderShow>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"
            >
                {banners.map((banner, index) => (
                    <SwiperSlide key={index} className="slide">
                        <img src={banner} alt="banner" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </SliderShow>
        <BenefitsOverview>
            <div className="benefits">
                <Card icone={<FontAwesomeIcon className="benefits_icone" icon={faAward} />} text={"Prêmios Maiores"} />
                <Card icone={<FontAwesomeIcon className="benefits_icone" icon={faDollarSign} />} text={"Dinheiro na Conta"} />
                <Card icone={<FontAwesomeIcon className="benefits_icone" icon={faLock} />} text={"Segurança Máxima"} />
            </div>
        </BenefitsOverview>
    </>
  );
}

export default Slider;