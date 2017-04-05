import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap/lib'

const Footer = () => {
    return (
        <div className="footer-content text-center">
            <Grid fluid>
                <Row>
                    <Col sm={12} md={4} lg={4}>
                        <div>
                            <span>+ 632 711 2235</span>
                            <span className="spacer"/>
                            <span>+ 632 703 9330</span>
                        </div>

                    </Col>
                    <Col sm={12} md={4} lg={4}>
                        <span>
                            &copy;2017 M I C
                        </span>
                    </Col>
                    <Col sm={12} md={4} lg={4}>
                        <div>
                            <i className="fa text-primary sr-icons fa-facebook" />
                            <span className="spacer"/>
                            <i className="fa text-primary sr-icons fa-twitter" />
                            <span className="spacer"/>
                            <i className="fa text-primary sr-icons fa-envelope" />
                        </div>
                    </Col>
                </Row>
            </Grid>
        </div>
    );
};

export default Footer;