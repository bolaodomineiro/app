import React from "react";
import { SliderShow, BenefitsOverview } from "./SliderStyles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faAward, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';// Import Swiper React components
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';// import required modules
import Slid01 from '../../assets/images/slide01.png';
import Slid02 from '../../assets/images/slide02.png';
import Slid03 from '../../assets/images/slide03.png';
import Slid04 from '../../assets/images/slide04.png';
import Card from "../cards/CardBenerfit/Card";


const Slider = () => {

    const banners = [
        Slid01,
        Slid02,
        Slid03,
        Slid04,
    ];


    return (
        <>
            <SliderShow>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 4500,
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