import React from 'react'
import Header from '../../components/Header'
import Carousel from '../../components/Carousel'
import slides from "../../data/ImageCarousel"

const Home = () => {
    return (
        <>
            <Header/>
            <Carousel children={slides}/>
        </>
    )
}

export default Home