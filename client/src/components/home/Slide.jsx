import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from 'react'
import { Box, Button, Divider, Typography, styled } from "@mui/material";
import Countdown from 'react-countdown';
import { Link } from "react-router-dom";


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
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


const Component = styled(Box)`
    margin-top : 10px;
    background : #fff;
`;

const Deal = styled(Box)`
padding : 15px 20px;
display : flex;
`;

const Timer = styled(Box)`
display : flex;
align-items : center;
color : #7f7f7f;
margin-left : 10px;
`;

const DealText = styled(Typography)`
    font-size : 16px;
    font-weight : 600;
    margin-right : 25px;
    line-height  : 32px;
`;


const ViewAllButton = styled(Button)`
margin-left: auto;
background-color : #2874f0;
border-radius :  2px;
font-size : 13px;
font-weight: 600;
`;


const ImgCard = styled(Box)`
    text-align : center;
    padding : 25px 35px;
    cursor : pointer;
`;

const Image = styled('img')({

    width: 'auto',
    height: '150px'
}
)


const Text = styled(Typography)`
    font-size : 14px;
    margin-top : 5px;
`;

const Slide = ({ products, title, timer }) => {


    const timerUrl = "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg";

    // Renderer callback with condition
    const renderer = ({ hours, minutes, seconds, completed }) => {
        return <Box variant="span">{hours} : {minutes} : {seconds} Left</Box>
    };

    return (
        <Component>
            <Deal>
                <DealText>{title}</DealText>
                {
                    timer &&
                    <Timer>
                        <img src={timerUrl} alt="timer" style={{ width: 24 }} />
                        <Countdown date={Date.now() + 5.04e+7} renderer={renderer} />
                    </Timer>
                }
                <ViewAllButton variant="contained">View All</ViewAllButton>
            </Deal>
            <Divider />
            <Carousel responsive={responsive} autoPlay={true} autoPlaySpeed={4000} swipeable={false} draggable={false} infinite={true}
                centerMode={true} containerClass="carousel-container" dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px" >
                {
                    products?.map((data) => (
                        <Link to={`product/${data.id}`} style={{textDecoration : 'none'}}>
                            <ImgCard>
                                <Image src={data.detailUrl} alt="" key={data.id} />
                                <Text style={{ fontWeight: 600, color: '#212121' }}>{data.title.shortTitle}</Text>
                                <Text style={{ color: '#388e3c' }}>{data.discount}</Text>
                                <Text style={{ color: 'grey' }}>{data.tagline}</Text>
                            </ImgCard>
                        </Link>

                    )
                    )
                }
            </Carousel>
        </Component>
    )
}

export default Slide