import React, { Component } from 'react';
import { Grid, Row, Button } from 'react-bootstrap/lib'
import { Link } from 'react-router-dom'
import TeamMember from './TeamMember'
import JoinUsDetail from './JoinUsDetail'

class TeamView extends Component {
    render() {
        return (
            <div className="container-fluid">
                <h2>Hello!</h2>
                <br />
                <Grid fluid>
                    <Row>
                        <TeamMember title="CEO" name="John Doe" src="img/portfolio/teams/blank-photo.png" />
                        <TeamMember title="CEO" name="John Doe" src="img/portfolio/teams/blank-photo.png" />
                        <TeamMember title="CEO" name="John Doe" src="img/portfolio/teams/blank-photo.png" />
                        <TeamMember title="CEO" name="John Doe" src="img/portfolio/teams/blank-photo.png" />
                        <TeamMember title="CEO" name="John Doe" src="img/portfolio/teams/blank-photo.png" />
                        <TeamMember title="CEO" name="John Doe" src="img/portfolio/teams/blank-photo.png" />
                    </Row>
                </Grid>
                <hr />
                <h2>Join the team!</h2>
                <Grid fluid>
                    <Row>
                        <JoinUsDetail title="Be an account manager" details="Earn big income" />
                        <JoinUsDetail title="Free seminar" details="Product Orientation and Learn the Business" />
                        <JoinUsDetail title="Be a Leader in your area" details="Earn big incom plus benefits" />
                        <JoinUsDetail title="Do Business in your area" details="Without the need of a capital" />
                    </Row>
                </Grid>
                <Button>
                    <Link to="/contactus">
                        Contact us!
                    </Link>
                </Button>
            </div>
        );
    }
}

export default TeamView;