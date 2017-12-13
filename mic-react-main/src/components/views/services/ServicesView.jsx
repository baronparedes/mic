import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap/lib'
import ServiceDetail from './ServiceDetail'
import LinkButton from '../../layout/LinkButton'
import ProductDetail from '../../layout/ProductDetail'

class ServiceView extends Component {
    render() {
        return (
            <div className="container-fluid">
                <h2>At Your Service</h2>
                <br />
                <Grid fluid>
                    <Row>
                        <ServiceDetail label="Comprehensive Healthcare" favicon="fa-heartbeat">
                            <p>
                                Covers Out Patient consultation, Annual Physical Exam,
                                Hospital confinement, Emergency Care,
                                Laboratory services, Dental care and
                                Life insurance.
                            </p>
                            <LinkButton to="/plans">
                                Ask For A Quotation
                            </LinkButton>
                        </ServiceDetail>
                        <ServiceDetail label="Manpower Care" favicon="fa-users">
                            <p>
                                Comprehensive and affordable
                                health care package specially designed
                                for contractual employees.
                            </p>
                            <LinkButton to="/plans">
                                Ask For A Quotation
                            </LinkButton>
                        </ServiceDetail>
                        <ServiceDetail label="Essential Care" favicon="fa-user-md"
                            modalContent={
                                <div>
                                    <Grid fluid>
                                        <Row>
                                            <ProductDetail src={require("img/portfolio/products/essential-care-1.jpg")} alt="Essential Care" />
                                            <ProductDetail src={require("img/portfolio/products/essential-care-2.jpg")} alt="Essential Care" />
                                            <ProductDetail src={require("img/portfolio/products/essential-care-3.jpg")} alt="Essential Care" />
                                            <ProductDetail src={require("img/portfolio/products/essential-care-4.jpg")} alt="Essential Care" />
                                        </Row>
                                    </Grid>
                                </div>
                            }>
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
                        <ServiceDetail label="Group Life Insurance" favicon="fa-diamond"
                            modalContent={
                                <div>
                                    <Grid fluid>
                                        <Row>
                                            <ProductDetail src={require("img/portfolio/partners/partner-pru-life.jpg")} alt="Pru Life UK" />
                                            <ProductDetail src={require("img/portfolio/partners/partner-sunlife-of-canada.jpg")} alt="Sunlife of Canada" />
                                            <ProductDetail src={require("img/portfolio/partners/partner-manulife.png")} alt="Manulife" full />
                                        </Row>
                                    </Grid>
                                </div>
                            }>
                            Financial security plans for individuals, family, and corporate.
                        </ServiceDetail>
                        <ServiceDetail label="Accident Insurance" favicon="fa-ambulance"
                            modalContent={
                                <div>
                                    <Grid fluid>
                                        <Row>
                                            <ProductDetail src={require("img/portfolio/partners/partner-phil-british.png")} alt="Phil British" />
                                            <ProductDetail src={require("img/portfolio/partners/partner-malayan.jpg")} alt="Malayan" />
                                            <ProductDetail src={require("img/portfolio/partners/partner-mercantile.png")} alt="Mercantile" />
                                            <ProductDetail src={require("img/portfolio/partners/partner-liberty-insurance.jpg")} alt="Liberty Insurance" />
                                        </Row>
                                    </Grid>
                                </div>
                            }>
                            Financial protection in case of accidental death or permanent disability.
                        </ServiceDetail>
                        <ServiceDetail label="Non Life Insurance" favicon="fa-car"
                            modalContent={
                                <div>
                                    <Grid fluid>
                                        <Row>
                                            <ProductDetail src={require("img/portfolio/partners/partner-phil-british.png")} alt="Phil British" />
                                            <ProductDetail src={require("img/portfolio/partners/partner-malayan.jpg")} alt="Malayan" />
                                            <ProductDetail src={require("img/portfolio/partners/partner-mercantile.png")} alt="Mercantile" />
                                            <ProductDetail src={require("img/portfolio/partners/partner-liberty-insurance.jpg")} alt="Liberty Insurance" />
                                        </Row>
                                    </Grid>
                                </div>
                            }>
                            Protection for Homes, Cars, Motorcycles, Appliances, Office equipment, Valuable sports equipments, etc.
                        </ServiceDetail>
                        <ServiceDetail label="Travel Insurance" favicon="fa-plane"
                            modalContent={
                                <div>
                                    <Grid fluid>
                                        <Row>
                                            <ProductDetail src={require("img/portfolio/partners/partner-phil-british.png")} alt="Phil British" />
                                            <ProductDetail src={require("img/portfolio/partners/partner-pacific-cross.png")} alt="Pacific Cross" />
                                        </Row>
                                    </Grid>
                                </div>
                            }>
                            Feel safe and secure during your travel; anywhere, any place in the world.
                        </ServiceDetail>
                        <ServiceDetail label="Emergency Card" favicon="fa-id-card"
                            modalContent={
                                <div>
                                    <Grid fluid>
                                        <Row>
                                            <ProductDetail src={require("img/portfolio/products/card-philcare.jpg")} alt="ER Vantage" />
                                            <ProductDetail src={require("img/portfolio/products/card-maxicare.png")} alt="Maxicare EReady" />
                                            <ProductDetail src={require("img/portfolio/products/card-maxicare-lite-blue.png")} alt="Maxicare Lite Blue" />
                                            <ProductDetail src={require("img/portfolio/products/card-maxicare-lite-yellow.png")} alt="Maxicare Lite Yellow" />
                                        </Row>
                                    </Grid>
                                </div>
                            }>
                            One-time emergency use only. Can be a better gift for friends and relatives.
                        </ServiceDetail>
                        <ServiceDetail label="Food Supplements" favicon="fa-envira">
                            <b>Health is Wealth</b>
                            <p>Coming Soon</p>
                        </ServiceDetail>
                        <ServiceDetail label="Pre-need" favicon="fa-envelope"
                            modalContent={
                                <div>
                                    <Grid fluid>
                                        <Row>
                                            <ProductDetail src={require("img/portfolio/products/pre-need-st-peter.jpg")} alt="St. Peter Plan" full />
                                        </Row>
                                    </Grid>
                                </div>
                            }>
                            <div>
                                <p>St Peter Plan</p>
                            </div>
                        </ServiceDetail>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default ServiceView;