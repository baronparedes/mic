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
                            Covers Out Patient consultation, Annual Physical Exam,
                            Hospital confinement, Emergency Care,
                            Laboratory services, Dental care and
                            Life insurance.
                        </ServiceDetail>
                        <ServiceDetail label="Manpower Care" favicon="fa-users">
                            Comprehensive and affordable
                            health care package specially designed
                            for contractual employees.
                        </ServiceDetail>
                        <ServiceDetail label="Emergency Card" favicon="fa-id-card">
                            One-time emergency use only. Can be a better gift for friends and relatives.
                        </ServiceDetail>
                        <ServiceDetail label="Life Insurance Group" favicon="fa-diamond">
                            Financial security plans for individuals, family, and corporate.
                        </ServiceDetail>
                        <ServiceDetail label="Accident Insurance" favicon="fa-ambulance">
                            Financial protection in case of accidental death or permanent disability.
                        </ServiceDetail>
                        <ServiceDetail label="Non Life Insurance" favicon="fa-car">
                            Protection for Homes, Cars, Motorcycles, Appliances, Office equipment, Valuable sports equipments, etc.
                        </ServiceDetail>
                        <ServiceDetail label="Travel Insurance" favicon="fa-plane">
                            Feel safe and secure during your travel; anywhere, any place in the world.
                        </ServiceDetail>
                        <ServiceDetail label="Essential Care" favicon="fa-user-md">
                            <div>
                                <h6>Personal Care Products</h6>
                                <p>
                                    Look good and feel great. Stay beautiful and healthy.
                                </p>
                            </div>
                            <div>
                                <h6>Home Care Products</h6>
                                <p>
                                    Protect the elegance of your home from pests.
                                </p>
                            </div>
                        </ServiceDetail>
                        <ServiceDetail label="Food Supplements" favicon="fa-envira">
                        </ServiceDetail>
                        <ServiceDetail label="Medicine and Medical Supply" favicon="fa-medkit">
                        </ServiceDetail>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default ServiceView;