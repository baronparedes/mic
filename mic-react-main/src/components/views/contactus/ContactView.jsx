import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap/lib'
import ConnectWithUs from './ConnectWithUs'
import GetInTouch from './GetInTouch'

class ContactView extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Grid fluid>
                    <Row>
                        <Col lg={8} md={8} sm={12}>
                            <GetInTouch />
                        </Col>
                        <Col lg={4} md={4} sm={12}>
                            <ConnectWithUs />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default ContactView;