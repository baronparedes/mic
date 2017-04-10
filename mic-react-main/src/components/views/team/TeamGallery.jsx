import React from 'react';
import { Carousel } from 'react-bootstrap/lib'

const TeamGallery = () => {
    return (
        <div className="container-fluid">
            <br />
            <br />
            <Carousel>
                <Carousel.Item>
                    <img className="team-gallery" src={require("img/portfolio/team-gallery/1.jpg")} />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="team-gallery" src={require("img/portfolio/team-gallery/2.jpg")} />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="team-gallery" src={require("img/portfolio/team-gallery/3.jpg")} />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="team-gallery" src={require("img/portfolio/team-gallery/4.jpg")} />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="team-gallery" src={require("img/portfolio/team-gallery/5.jpg")} />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="team-gallery" src={require("img/portfolio/team-gallery/6.jpg")} />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="team-gallery" src={require("img/portfolio/team-gallery/7.jpg")} />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="team-gallery" src={require("img/portfolio/team-gallery/8.jpg")} />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="team-gallery" src={require("img/portfolio/team-gallery/9.jpg")} />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="team-gallery" src={require("img/portfolio/team-gallery/10.jpg")} />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default TeamGallery;