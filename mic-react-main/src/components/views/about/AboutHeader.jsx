import React from 'react';

const AboutHeader = (props) => {
    return (
        <h3 className="text-muted">{props.children}</h3>
    );
};

export default AboutHeader;