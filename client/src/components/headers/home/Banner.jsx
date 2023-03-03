import { styled } from '@mui/material';
import React, { useState } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { bannerData } from '../../../constants/data';


const Image = styled('img')({
    width: '100%',
    height: 280
})

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};


const Banner = () => { 
    return ( 
            <Carousel responsive={responsive}   autoPlay={true} autoPlaySpeed={4000} swipeable={false} draggable={false} infinite={true} 
            containerClass="carousel-container" dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px">
                {
                    bannerData?.map((data) => (
                        <Image key={data.id} src={data.url} alt="carousel" />
                    ))
                }
            </Carousel> 
    )
}

export default Banner