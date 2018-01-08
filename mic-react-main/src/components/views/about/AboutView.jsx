import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap/lib'
import AboutDetail from './AboutDetail'
import AboutHeader from './AboutHeader'
import LinkButton from '../../layout/LinkButton'

export default class AboutView extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <h2>Our Core Values</h2>
                <Grid fluid>
                    <Row>
                        <Col>
                            <AboutHeader>Manage Excellent Service with Care.</AboutHeader>
                        </Col>
                        <Col>
                            <AboutHeader>Integrity, Honesty, and Hard work.</AboutHeader>
                        </Col>
                        <Col>
                            <AboutHeader>Create harmonious relation environment.</AboutHeader>
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col>
                            <AboutDetail label="Our History">
                                On July 23, 2009, MIC Sales and Marketing registered with DTI as Single Proprietor. 
                                On October 30, 2013, it was registered with the Securities and Exchange Commission (SEC) 
                                as MIC Sales and Marketing Corporation. As Marketing Professionals, our combined experience 
                                in the field of HMO, goes with the pioneer among HMO providers which was established in 
                                the early part of 1980’s. Our services begin from searching the best and reliable provider, 
                                negotiate for the competitive rates, assist in matrix preparation, 
                                handles presentation, conduct orientation, visit client, do telephone servicing, 
                                assist with documentation and stay as the best intermediary between client and provider.
                            </AboutDetail>
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col md={6}>
                            <AboutDetail label="Our Vision">
                                To continuously promote HMO, Insurance and other care products which is necessary to lessen or eradicate HR burdens. Lift
                                up the morale of company employees. And to grow as one big marketing corporation continuously
                                delivering excellent services to valued clients and provider as well.
                            </AboutDetail>
                        </Col>
                        <Col md={6}>
                            <AboutDetail label="Our Mission">
                                Do the best after sales service to our clients. Do the best intermediary solution as needed. Assist in processing of hospital
                                documents. Deliver excellent service which is due to valued client.
                            </AboutDetail>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} sm={6} xs={6}>
                            <LinkButton to="/services">
                                Our Services
                            </LinkButton>
                        </Col>
                        <Col md={6} sm={6} xs={6}>
                            <LinkButton to="/partners">
                                Our Partners
                            </LinkButton>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}