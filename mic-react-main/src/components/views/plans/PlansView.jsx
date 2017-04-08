import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap'

class PlansView extends Component {
    render() {
        return (
            <div className="container-fluid">
                <h2>Available Plans</h2>
                <Grid fluid>
                    <Row>
                        <Col lg={4} md={4} sm={12}>
                            <h3>Individual</h3>
                        </Col>
                        <Col lg={4} md={4} sm={12}>
                            <h3>Family</h3>
                        </Col>
                        <Col lg={4} md={4} sm={12}>
                            <h3>Group or Corporate</h3>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default PlansView;