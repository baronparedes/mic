import React from 'react';
import Column from '../../layout/Column'

const ServiceDetail = (props) => {
    return (
        <Column>
            <div className="service-box">
                <i className={"fa fa-4x text-primary sr-icons " + props.favicon}></i>
                <h3>{props.label}</h3>
                <p className="text-muted">
                    {props.children}
                </p>
            </div>
        </Column>
    );
};

export default ServiceDetail;