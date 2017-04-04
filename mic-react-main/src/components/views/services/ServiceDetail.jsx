import React from 'react';
import { Col } from 'react-bootstrap/lib'

const ServiceDetail = (props) => {
    return (
        <Col sm={6} md={4} lg={3} className="text-center">
            <div className="service-box">
                <i className={"fa fa-4x text-primary sr-icons " + props.favicon}></i>
                <h3>{props.label}</h3>
                <h4>
                    {props.children}
                </h4>
            </div>
        </Col>
    );
};

export default ServiceDetail;