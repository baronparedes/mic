import React from 'react'
import { Grid, Row, Col, Image } from 'react-bootstrap/lib'
import HeaderBrand from './HeaderBrand'

export default class Header extends React.Component {
    render() {
        return (
            <Grid fluid>
                <Row>
                    <Col lg={3} md={3} sm={6} xs={6} className="header-col">
                        <Image src={require("img/mic-logo-1.jpg")} className="brand-logo" />
                    </Col>
                    <Col lg={6} md={6} smHidden xsHidden className="header-col">
                        <HeaderBrand />
                    </Col>
                    <Col lg={3} md={3} sm={6} xs={6} className="header-col">
                        <Image src={require("img/mic-logo-2.png")} className="brand-logo" />
                    </Col>
                    <Col lgHidden mdHidden sm={12} xs={12}>
                        <HeaderBrand />
                    </Col>
                </Row>
            </Grid>
        );
    }
}