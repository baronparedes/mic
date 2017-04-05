import React from 'react';
import { Col, Thumbnail } from 'react-bootstrap/lib'

const TeamMember = (props) => {
    return (
        <Col className="team-member" xs={6} sm={6} lg={2} md={3}>
            <Thumbnail src={props.src} alt="img/portfolio/teams/blank-photo.png" rounded>
                <span>{props.name}</span>
                <br/>
                <span className="text-muted">{props.title}</span>
            </Thumbnail>
        </Col>
    );
};

export default TeamMember;