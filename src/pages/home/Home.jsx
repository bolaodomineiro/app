import React from 'react'
import Header from '../../components/header/Header';
import Slider from '../../components/Carousel/Slider';
import ProductSection from '../../components/productSection/ProductSection';
import ResultSection from '../../components/resultsection/ResultSection';
import Section from '../../components/section/Section';
import Baseboard from '../../components/footer/Baseboard';

const Home = () => {
    return (
        <section style={{ overflowX: "hidden", height:"100svh" }}>
            <Header />
            <Slider />
            <ProductSection />
            <ResultSection />
            <Section />
            <Baseboard />
        </section>
    )
}

export default Home;