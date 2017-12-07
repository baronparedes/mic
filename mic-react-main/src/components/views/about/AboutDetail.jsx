import React from 'react';

const AboutDetail = (props) => {
    return (
            <div>
                <h2>{props.label}</h2>
                <p className="text-muted details">
                    {props.children}
                </p>
            </div>
    );
};

export default AboutDetail;