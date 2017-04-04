import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap/lib'
import ServiceDetail from './ServiceDetail'

class ServiceView extends Component {
    render() {
        return (
            <div>
                <h2>At Your Service</h2>
                <br />
                <Grid fluid>
                    <Row>
                        <ServiceDetail label="Comprehensive Healthcare" favicon="fa-heartbeat">
                            Qui exercitation nisi excepteur eiusmod aute reprehenderit esse aliqua cillum labore sint dolore dolor est.
                        </ServiceDetail>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default ServiceView;