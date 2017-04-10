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
                            Labore cupidatat cillum quis qui deserunt proident fugiat fugiat. Id anim magna exercitation dolor. Qui sit amet voluptate ipsum mollit id mollit elit ea sint non voluptate.
                        </SeePlan>
                        <SeePlan className="group-corporate-plan" title="Corporate or Group" to='/corporate'>
                            Ipsum irure excepteur et exercitation. Eiusmod commodo irure tempor irure. Est exercitation laboris voluptate Lorem duis deserunt esse labore ullamco velit eiusmod sit duis.
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