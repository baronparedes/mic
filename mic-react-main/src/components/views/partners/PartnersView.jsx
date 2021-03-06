import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap/lib'
import PartnerDetail from './PartnerDetail'

class PartnersView extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Grid fluid>
                    <Row>
                        <h2>HMO Partners</h2>
                        <PartnerDetail src={require("img/portfolio/partners/partner-maxicare.png")} alt="Maxicare" />
                        <PartnerDetail src={require("img/portfolio/partners/partner-intellicare.png")} alt="Intellicare" />
                        <PartnerDetail src={require("img/portfolio/partners/partner-medicard.jpg")} alt="Medicard" />
                        <PartnerDetail src={require("img/portfolio/partners/partner-asian-life.png")} alt="Asian Life" />
                        <PartnerDetail src={require("img/portfolio/partners/partner-valu-care.png")} alt="Valu Care" />
                        <PartnerDetail src={require("img/portfolio/partners/partner-phil-care.png")} alt="Philcare" />
                        <PartnerDetail src={require("img/portfolio/partners/partner-phil-british.png")} alt="Phil British" />
                        <PartnerDetail src={require("img/portfolio/partners/partner-hmi.png")} alt="Health Maintenance Inc." />
                        <PartnerDetail src={require("img/portfolio/partners/partner-insular-care.jpg")} alt="Insular Care" />
                        <PartnerDetail src={require("img/portfolio/partners/partner-get-well-health.png")} alt="Get Well Health" />
                        <PartnerDetail src={require("img/portfolio/partners/partner-caritas.jpg")} alt="Caritas" />
                        <PartnerDetail src={require("img/portfolio/partners/partner-pacific-cross.png")} alt="Pacific Cross" />
                    </Row>
                    <Row>
                        <hr />
                    </Row>
                    <Row>
                        <h2>Insurance Partners</h2>
                        <PartnerDetail src={require("img/portfolio/partners/partner-phil-british.png")} alt="Phil British" />
                        <PartnerDetail src={require("img/portfolio/partners/partner-malayan.jpg")} alt="Malayan" />
                        <PartnerDetail src={require("img/portfolio/partners/partner-liberty-insurance.jpg")} alt="Liberty Insurance" />
                        <PartnerDetail src={require("img/portfolio/partners/partner-mercantile.png")} alt="Mercantile" />
                        <PartnerDetail src={require("img/portfolio/partners/partner-pacific-cross.png")} alt="Pacific Cross" />
                        <PartnerDetail src={require("img/portfolio/partners/partner-pru-life.jpg")} alt="Pru Life UK" />
                        <PartnerDetail src={require("img/portfolio/partners/partner-manulife.png")} alt="Manulife" />
                        <PartnerDetail src={require("img/portfolio/partners/partner-sunlife-of-canada.jpg")} alt="Sunlife of Canada" />
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default PartnersView;