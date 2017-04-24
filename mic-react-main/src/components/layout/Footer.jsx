import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap/lib'

const Footer = () => {
    return (
        <div className="footer-content text-center">
            <Grid fluid>
                <Row>
                    <Col sm={12} md={4} lg={4}>
                        <div>
                            <span>tel.</span>
                            <span className="spacer" />
                            <span>+ 632 711 2235</span>
                            <span className="spacer" />
                            <span>+ 632 412 6659</span>
                        </div>

                    </Col>
                    <Col sm={12} md={4} lg={4}>
                        <div>
                            <span>
                                &copy;2017 M I C
                            </span>
                        </div>
                    </Col>
                    <Col sm={12} md={4} lg={4}>
                        <div>
                            <a href="http://twitter.com" target="_blank" title="Follow us on twitter">
                                <i className="fa fa-2x text-primary sr-icons fa-twitter" />
                            </a>
                            <span className="spacer" />
                            <a href="http://facebook.com" target="_blank" title="Add us on facebook">
                                <i className="fa fa-2x text-primary sr-icons fa-facebook-official" />
                            </a>
                            <span className="spacer" />
                            <a href="mailto:micmarketing@ymail.com" title="Send us an email">
                                <i className="fa fa-2x text-primary sr-icons fa-envelope" />
                            </a>
                        </div>
                    </Col>
                </Row>
            </Grid>
        </div>
    );
};

export default Footer;