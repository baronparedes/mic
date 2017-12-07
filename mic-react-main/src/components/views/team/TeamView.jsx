import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap/lib'
import TeamMember from './TeamMember'
import JoinUsDetail from './JoinUsDetail'
import TeamGallery from './TeamGallery'
import LinkButton from '../../layout/LinkButton'
import MeetOurTeam from './MeetOurTeam'

class TeamView extends Component {
    render() {
        return (
            <div className="container-fluid">
                <MeetOurTeam />
                <hr />
                <Grid fluid>
                    <Row>
                        <JoinUsDetail title="Be an account manager" details="Earn big income." />
                        <JoinUsDetail title="Free seminar" details="Product Orientation and Learn the Business." />
                        <JoinUsDetail title="Be a Leader in your area" details="Earn big income plus benefits." />
                        <JoinUsDetail title="Do Business in your area" details="Without the need of a capital." />
                    </Row>
                </Grid>
                <LinkButton to="/contactus">
                    Join us!
                </LinkButton>
                <TeamGallery />
            </div>
        );
    }
}

export default TeamView;