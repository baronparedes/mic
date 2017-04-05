import React from 'react';
import { Col } from 'react-bootstrap/lib'

const Column = (props) => {
    return (
        <Col sm={6} md={4} lg={3} className="text-center">
            {props.children}
        </Col>
    );
};

export default Column;