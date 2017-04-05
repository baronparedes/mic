import React from 'react';
import { Col } from 'react-bootstrap/lib'

const JoinUsDetail = (props) => {
    return (
        <Col className="join-us-box" lg={3} md={3} sm={6}>
            <h3>{props.title}</h3>
            <p class="text-muted">
                {props.details}
            </p>
        </Col>
    );
};

export default JoinUsDetail;