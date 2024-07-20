import React from 'react';
import Header from '../../components/Header';
import Carousel from '../../components/Carousel';
import slides from "../../data/ImageCarousel";
import Card from '../../components/Card';

const Home = () => {
    return (
        <>
            <Header />
            <div className='flex justify-center m-5'>
                <Carousel props={slides} />
            </div>
            <div className='flex flex-wrap justify-center items-center w-fit mx-auto gap-5'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </>
    );
};

export default Home;
