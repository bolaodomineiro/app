import React from 'react'
import Slider from '../../components/Carousel/Slider';
import ProductSection from '../../components/productSection/ProductSection';
import ResultSection from '../../components/resultsection/ResultSection';
import Section from '../../components/section/Section';


const Home = () => {
    return (
        <section style={{ minHeight:"130svh" }}>
            <Slider />
            <ProductSection />
            <ResultSection />
            <Section />
        </section>
    )
}

export default Home;