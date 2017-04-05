import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap/lib'
import PartnerDetail from './PartnerDetail'

class PartnersView extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Grid fluid>
                    <Row>
                        <h1>HMO Partners</h1>
                        <PartnerDetail src="img/portfolio/partners/partner-maxicare.png" alt="Maxicare" />
                        <PartnerDetail src="img/portfolio/partners/partner-intellicare.png" alt="Intellicare" />
                        <PartnerDetail src="img/portfolio/partners/partner-asian-life.png" alt="Asian Life" />
                        <PartnerDetail src="img/portfolio/partners/partner-medicard.jpg" alt="Medicard" />
                        <PartnerDetail src="img/portfolio/partners/partner-valu-care.png" alt="Valu Care" />
                        <PartnerDetail src="img/portfolio/partners/partner-caritas.jpg" alt="Caritas" />
                        <PartnerDetail src="img/portfolio/partners/partner-get-well-health.png" alt="Get Well Health" />
                    </Row>
                    <Row>
                        <hr />
                    </Row>
                    <Row>
                        <h1>Insurance Partners</h1>
                        <PartnerDetail src="img/portfolio/partners/partner-flt.jpg" alt="FLT" />
                        <PartnerDetail src="img/portfolio/partners/partner-malayan.jpg" alt="Malayan" />
                        <PartnerDetail src="img/portfolio/partners/partner-sunlife-of-canada.jpg" alt="Sunlife of Canada" />
                        <PartnerDetail src="img/portfolio/partners/partner-liberty-insurance.jpg" alt="Liberty Insurance" />
                        <PartnerDetail src="img/portfolio/partners/partner-pru-life.jpg" alt="Pru Life" />
                        <PartnerDetail src="img/portfolio/partners/partner-pacific-cross.png" alt="Pacific Cross" />
                        <PartnerDetail src="img/portfolio/partners/partner-manulife.png" alt="Manulife" />
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default PartnersView;