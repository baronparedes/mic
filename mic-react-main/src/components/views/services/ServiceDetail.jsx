import React from 'react';
import Column from '../../layout/Column'

const ServiceDetail = (props) => {
    return (
        <Column>
            <div className="service-box">
                <i className={"fa fa-4x text-primary sr-icons " + props.favicon}></i>
                <h3><strong>{props.label}</strong></h3>
                <h4>
                    {props.children}
                </h4>
            </div>
        </Column>
    );
};

export default ServiceDetail;