import React from 'react'
import Slider from '../../components/Carousel/Slider';
import ProductSection from '../../components/productSection/ProductSection';
import ResultSection from '../../components/resultsection/ResultSection';
import BolaoGuide from '../../components/BolaoGuide/BolaoGuide';


const Home = () => {
    return (
        <section style={{ minHeight:"130svh", marginTop:"145px" }}>
            <Slider />
            <ProductSection />
            <ResultSection />
            <BolaoGuide />
        </section>
    )
}

export default Home;