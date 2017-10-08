const MeetOurTeam = () => {
    return (
        <div>
            <h2>Meet our Team!</h2>
            <br />
            <Grid fluid>
                <Row>
                    <TeamMember title="CEO" name="John Doe" src={require("img/portfolio/teams/blank-photo.png")} />
                    <TeamMember title="CEO" name="John Doe" src={require("img/portfolio/teams/blank-photo.png")} />
                    <TeamMember title="CEO" name="John Doe" src={require("img/portfolio/teams/blank-photo.png")} />
                    <TeamMember title="CEO" name="John Doe" src={require("img/portfolio/teams/blank-photo.png")} />
                    <TeamMember title="CEO" name="John Doe" src={require("img/portfolio/teams/blank-photo.png")} />
                    <TeamMember title="CEO" name="John Doe" src={require("img/portfolio/teams/blank-photo.png")} />
                </Row>
            </Grid>
        </div>
    )
}