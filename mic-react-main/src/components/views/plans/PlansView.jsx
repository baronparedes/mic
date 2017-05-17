import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap'
import { Route } from 'react-router-dom'
import IndividualFamilyForm from './IndividualFamilyForm'
import CorporateGroupForm from './CorporateGroupForm'
import LinkButton from '../../layout/LinkButton'

const SeePlan = (props) => {
    return (
        <Col lg={6} md={6} sm={6} xs={12} className={"plan-box " + props.className}>
            <div className="padded plan-box-content">
                <h3>{props.title}</h3>
                <p>
                    {props.children}
                </p>
                <LinkButton to={"/plans" + props.to}>
                    Ask for a Quotation
                </LinkButton>
            </div>
        </Col>
    )
}

const SubRoutes = () => {
    return (
        <div className="container-fluid">
            <Route path="/plans/individual" component={IndividualFamilyForm} />
            <Route path="/plans/corporate" component={CorporateGroupForm} />
            <Route exact path="/plans" render={() => (
                <h2>Please select a plan</h2>
            )} />
        </div>
    )
}

class PlansView extends Component {
    render() {
        return (
            <div className="container no-padding">
                <h2>Available Plans</h2>
                <Grid fluid>
                    <Row>
                        <SeePlan className="individual-family-plan" title="Individual or Family" to='/individual'>
                            WE ARE EXPOSED TO UNHEALTHY AND HAZARDOUS ENVIRONMENT. THIS IS THE REASON WHY WE NEED TO PROTECT OURSELVES AND OUR FAMILY. MIC IS OFFERING AFFORDABLE BASIC AND COMPREHENSIVE HEALTH CARE AND INSURANCE PROTECTION, SO WE ARE ALWAYS READY IN TIME OF NEEDS.
                        </SeePlan>
                        <SeePlan className="group-corporate-plan" title="Corporate or Group" to='/corporate'>
                            EMPLOYEES ARE THE MOST VALUABLE ASSET OF THE COMPANY. PRODUCTIVITY MAY SUFFER IF THEY ARE NOT HEALTHY.  MIC IS WILLING TO HELP YOU IN OUTSOURCING FOR THE BEST HEALTH CARE PACKAGE, TAILORED FIT FOR YOUR COMPANY.
                        </SeePlan>
                    </Row>
                    <hr />
                </Grid>
                <SubRoutes />
            </div>
        );
    }
}

export default PlansView;