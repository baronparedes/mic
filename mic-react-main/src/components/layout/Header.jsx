import React from 'react'
import { Grid, Row, Col, Image } from 'react-bootstrap/lib'

export default class Header extends React.Component {
    render() {
        return (
            <Grid fluid>
                <Row>
                    <Col lg={3} md={3} sm={6} xs={6} className="header-col">
                        <Image src="/img/mic-logo-1.png" className="brand-logo" />
                    </Col>
                    <Col lg={6} md={6} smHidden xsHidden className="header-col">
                        <div className="brand-info">
                            <h1 className="brand-title">
                                <strong>M</strong>edical and <strong>I</strong>nsurance <strong>C</strong>are
                            </h1>
                            <h3>Your Trusted Service Partner</h3>
                        </div>
                    </Col>
                    <Col lg={3} md={3} sm={6} xs={6} className="header-col">
                        <Image src="/img/mic-logo-2.png" className="brand-logo" />
                    </Col>
                    <Col lgHidden mdHidden sm={12} xs={12}>
                        <div className="brand-info">
                            <h1 className="brand-title">
                                <strong>M</strong>edical and <strong>I</strong>nsurance <strong>C</strong>are
                            </h1>
                            <h3>Your Trusted Service Partner</h3>
                        </div>
                    </Col>
                </Row>
            </Grid>
        );
    }
}