import React from 'react'
import { Grid, Row, Col, Image } from 'react-bootstrap/lib'

export default class Header extends React.Component {
    render() {
        return (
            <Grid fluid>
                <Row>
                    <Col md={3} sm={12} className="header-col">
                        <Image src="/img/mic-logo-1.png" className="brand-logo" />
                    </Col>
                    <Col md={6} sm={12} className="header-col">
                        <div className="brand-info">
                            <h1 className="brand-title">
                                <strong>M</strong>edical and <strong>I</strong>nsurance <strong>C</strong>are
                            </h1>
                            <h3>Your Trusted Service Partner</h3>
                        </div>
                    </Col>
                    <Col md={3} sm={12} className="header-col">
                        <Image src="/img/mic-logo-2.png" className="brand-logo" />
                    </Col>
                </Row>
            </Grid>
        );
    }
}