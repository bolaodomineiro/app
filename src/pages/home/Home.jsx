import React from 'react'
import Header from '../../components/header/Header';
import Slider from '../../components/Carousel/Slider';

const Home = () => {
    return (
        <section style={{ overflowX: "hidden", height:"100svh" }}>
            <Header />
            <Slider />
        </section>
    )
}

export default Home;