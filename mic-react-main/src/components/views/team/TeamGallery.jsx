import React from 'react';
import { Carousel } from 'react-bootstrap/lib'

const CarouselItem = (props) => {
    return (
        <Carousel.Item>
            <img className="team-gallery" src={props.src} />
        </Carousel.Item>
    )
}

const TeamGallery = () => {
    return (
        <div className="container-fluid">
            <br />
            <br />
            <Carousel>
                <CarouselItem src={require("img/portfolio/team-gallery/1.jpg")} />
                <CarouselItem src={require("img/portfolio/team-gallery/2.jpg")} />
                <CarouselItem src={require("img/portfolio/team-gallery/3.jpg")} />
                <CarouselItem src={require("img/portfolio/team-gallery/4.jpg")} />
                <CarouselItem src={require("img/portfolio/team-gallery/5.jpg")} />
                <CarouselItem src={require("img/portfolio/team-gallery/6.jpg")} />
                <CarouselItem src={require("img/portfolio/team-gallery/7.jpg")} />
                <CarouselItem src={require("img/portfolio/team-gallery/8.jpg")} />
                <CarouselItem src={require("img/portfolio/team-gallery/9.jpg")} />
                <CarouselItem src={require("img/portfolio/team-gallery/10.jpg")} />
                <CarouselItem src={require("img/portfolio/team-gallery/11.jpg")} />
            </Carousel>
        </div>
    );
};

export default TeamGallery;