import React from 'react'
import Header from '../../components/header/Header';
import Slider from '../../components/Carousel/Slider';
import ProductSection from '../../components/productSection/ProductSection';

const Home = () => {
    return (
        <section style={{ overflowX: "hidden", height:"100svh" }}>
            <Header />
            <Slider />
            <ProductSection />
        </section>
    )
}

export default Home;