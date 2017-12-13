import React from 'react';
import { Image, Col } from 'react-bootstrap/lib'

const ProductDetail = (props) => {
    return (
        <Col sm={props.full ? 12 : 6} className="text-center">
            <div className="product-box">
                <Image 
                    src={props.src} 
                    className="img-responsive center-block product-thumbnail" 
                    alt={props.alt} 
                    responsive />
            </div>
        </Col>
    );
};

export default ProductDetail;