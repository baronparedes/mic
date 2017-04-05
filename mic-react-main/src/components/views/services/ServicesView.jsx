import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap/lib'
import ServiceDetail from './ServiceDetail'

class ServiceView extends Component {
    render() {
        return (
            <div className="container-fluid">
                <h2>At Your Service</h2>
                <br />
                <Grid fluid>
                    <Row>
                        <ServiceDetail label="Comprehensive Healthcare" favicon="fa-heartbeat">
                            Qui exercitation nisi excepteur eiusmod aute reprehenderit esse aliqua cillum labore sint dolore dolor est.
                        </ServiceDetail>
                        <ServiceDetail label="Manpower Care" favicon="fa-users">
                            Qui exercitation nisi excepteur eiusmod aute reprehenderit esse aliqua cillum labore sint dolore dolor est.
                        </ServiceDetail>
                        <ServiceDetail label="Emergency Card" favicon="fa-id-card">
                            Qui exercitation nisi excepteur eiusmod aute reprehenderit esse aliqua cillum labore sint dolore dolor est.
                        </ServiceDetail>  
                        <ServiceDetail label="Life Insurance Group" favicon="fa-diamond">
                            Qui exercitation nisi excepteur eiusmod aute reprehenderit esse aliqua cillum labore sint dolore dolor est.
                        </ServiceDetail>                     
                        <ServiceDetail label="Non Life Insurance - Accident" favicon="fa-ambulance">
                            Qui exercitation nisi excepteur eiusmod aute reprehenderit esse aliqua cillum labore sint dolore dolor est.
                        </ServiceDetail>    
                        <ServiceDetail label="Travel Insurance" favicon="fa-plane">
                            Qui exercitation nisi excepteur eiusmod aute reprehenderit esse aliqua cillum labore sint dolore dolor est.
                        </ServiceDetail>   
                        <ServiceDetail label="Essential Care" favicon="fa-heart">
                            Qui exercitation nisi excepteur eiusmod aute reprehenderit esse aliqua cillum labore sint dolore dolor est.
                        </ServiceDetail>   
                        <ServiceDetail label="Food Suppliments" favicon="fa-envira">
                            Qui exercitation nisi excepteur eiusmod aute reprehenderit esse aliqua cillum labore sint dolore dolor est.
                        </ServiceDetail>   
                        <ServiceDetail label="Medical Supplies and Equipment" favicon="fa-medkit">
                            Qui exercitation nisi excepteur eiusmod aute reprehenderit esse aliqua cillum labore sint dolore dolor est.
                        </ServiceDetail>  
                        <ServiceDetail label="Dental Supplies and Equipment" favicon="fa-briefcase">
                            Qui exercitation nisi excepteur eiusmod aute reprehenderit esse aliqua cillum labore sint dolore dolor est.
                        </ServiceDetail>    
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default ServiceView;