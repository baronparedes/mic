import React from 'react';
import { Carousel } from 'react-bootstrap/lib'

const TeamGallery = () => {
    return (
        <div className="container-fluid">
            <br />
            <br />
            <Carousel>
                {[...Array(11)].map((x, i) =>
                    <Carousel.Item key={i + 1}>
                        <img className="team-gallery" src={"img/portfolio/team-gallery/" + (i + 1) + ".jpg"} />
                    </Carousel.Item>
                )}
            </Carousel>
        </div>
    );
};

export default TeamGallery;