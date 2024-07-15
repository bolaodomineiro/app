import React from 'react'
import Header from '../../components/header/Header';
import Slider from '../../components/Carousel/Slider';

const Home = () => {
    return (
        <section style={{ overflow: "hidden" }}>
            <Header />
            <Slider />
        </section>
    )
}

export default Home;