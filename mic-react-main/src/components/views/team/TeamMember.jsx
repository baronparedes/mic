import React from 'react';
import { Col, Thumbnail } from 'react-bootstrap/lib'

const TeamMember = (props) => {
    return (
        <Col className="team-member" xs={6} sm={6} lg={3} md={3}>
            <Thumbnail src={props.src} alt="img/portfolio/teams/blank-photo.png">
                <span>{props.name}</span>
                <br/>
                <label className="text-muted">{props.title}</label>
            </Thumbnail>
        </Col>
    );
};

export default TeamMember;