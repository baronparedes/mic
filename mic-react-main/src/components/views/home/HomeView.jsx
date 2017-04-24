import React from 'react'
import { Image, Grid, Row, Col } from 'react-bootstrap/lib'
import LinkButton from '../../layout/LinkButton'

const ServiceItem = (props) => {
    return (
        <li className={props.className}>
            { 
                // <i className="fa fa-chevron-right spacer" /> 
            }
            <h2>
                {props.children}
            </h2>
        </li>
    )
}

export default class HomeView extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="container-fluid">
                    <Grid fluid>
                        <Row className="text-center">
                            <Col md={6} lg={6} className="home-content-left">
                                <ul>
                                    <ServiceItem className="item-1">
                                        Comprehensive Health Care
                                    </ServiceItem>
                                    <ServiceItem className="item-2">
                                        Manpower Health Care
                                    </ServiceItem>
                                    <ServiceItem className="item-3">
                                        Life Insurance
                                    </ServiceItem>
                                    <ServiceItem className="item-4">
                                        Non-Life Insurance
                                    </ServiceItem>
                                    <ServiceItem className="item-5">
                                        Group Life Insurance
                                    </ServiceItem>
                                    <ServiceItem className="item-6">
                                        Travel Insurance
                                    </ServiceItem>
                                    <ServiceItem className="item-7">
                                        Pre-need Plans
                                    </ServiceItem>
                                </ul>
                            </Col>
                            <Col md={6} lg={6} className="home-content-right">
                                <h3>
                                    Everytime you venture with us you are helping our poorest of the poor brothers...
                                </h3>
                                <Image className="img-kariton" src={require("img/buhay-kariton.jpg")} alt="242x200" responsive />
                                <h3>
                                    No one wants to live a miserable life but this is the only means they know to survive.
                                </h3>
                            </Col>
                        </Row>
                    </Grid>

                </div>
                <h2>
                    LET US SHARE OUR ABUNDANT BLESSINGS... Give love everyday
                </h2>
                <LinkButton to="/plans">
                    Find out more
                </LinkButton>
            </div>
        );
    }
}