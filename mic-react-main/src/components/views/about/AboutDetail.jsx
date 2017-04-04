import React from 'react';

const AboutDetail = (props) => {
    return (
            <div>
                <h1>{props.label}</h1>
                <p>
                    {props.children}
                </p>
            </div>
    );
};

export default AboutDetail;