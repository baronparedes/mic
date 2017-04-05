import React from 'react';
import Column from '../../layout/Column'
import { Image } from 'react-bootstrap/lib'

const PartnerDetail = (props) => {
    return (
        <Column>
            <div className="partner-box">
                <Image 
                    src={props.src} 
                    className="img-responsive center-block partner-thumbnail" 
                    alt={props.alt} 
                    responsive />
            </div>
        </Column>
    );
};

export default PartnerDetail;