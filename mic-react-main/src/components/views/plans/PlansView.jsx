import React, { Component } from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap'

const SeePlan = (props) => {
    return (
        <Col lg={6} md={6} sm={12} className={"plan-container " + props.className}>
            <h3>{props.title}</h3>
            <Button>Inquire</Button>
        </Col>
    )
}

class PlansView extends Component {
    render() {
        return (
            <div className="container-fluid">
                <h2>Available Plans</h2>
                <Grid fluid>
                    <Row>
                        <SeePlan className="individual-family-plan" title="Individual or Family" />
                        <SeePlan className="group-corporate-plan" title="Group or Corporate" />
                    </Row>
                    <hr />
                    <Row>
                        Content
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default PlansView;