import React from 'react'
import { Grid, Row, Col, Button } from 'react-bootstrap/lib'

export default class AboutInfo extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <Grid fluid>
                    <Row>
                        <Col md={4}>
                            <h2><strong>Manage Excellent Service with Care</strong></h2>
                        </Col>
                        <Col md={4}>
                            <h2><strong>Integrity, Honesty, and Hard work</strong></h2>
                        </Col>
                        <Col md={4}>
                            <h2><strong>Create harmonious relation environment</strong></h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h1>We've got what you need!</h1>
                            <p>
                                M I C Sales and Marketing Corporation was registered with Securities and Exchange Commission (SEC) on October 30, 2013. As
                                marketing professionals, our combined experience in the field of HMO, goes with the very first and
                                pioneer among HMO provider which was established 35 years ago. Our incomparable service begin from
                                searching the best and reliable provider, negotiate with clients, assist in matrix preparation, handle
                                presentation, conduct orientation, regular visits to client, telephone servicing, assisting in documentation
                                and stay as the best intermediary between client and provider.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <h1>Our Vision</h1>
                            <p>
                                To continuously promote HMO, Insurance and other care products which is necessary to lessen or eradicate HR burdens. Lift
                                up the morale of company employees. And to grow as one big marketing corporation continuously
                                delivering excellent services to valued clients and provider as well.
                            </p>
                        </Col>
                        <Col md={6}>
                            <h1>Our Mission</h1>
                            <p>
                                Do the best after sales service to our clients. Do the best intermediary solution as needed. Assist in processing of hospital
                                documents. Deliver excellent service which is due to valued clint.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} sm={6}>
                            <Button>Our Services</Button>
                        </Col>
                        <Col md={6} sm={6}>
                            <Button>Our Partners</Button>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}