import React from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap/lib'


const componentName = (props) => {
    return (
        <Link to={props.to}>
            <Button>
                {props.children}
            </Button>
        </Link>
    );
};

export default componentName;