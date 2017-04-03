import React from 'react'
import { Image, Grid, Row, Col, Button } from 'react-bootstrap/lib'

export default class HomeInfo extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="container-fluid">
                    <Grid fluid>
                        <Row className="text-center">
                            <Col md={6}>
                                <p>
                                    Everytime you venture with us you are helping our poorest of the poor brothers...
                                </p>
                            </Col>
                            <Col md={6}>
                                <Image className="img-kariton" src="/img/buhay-kariton.jpg" alt="242x200" responsive />
                                <h4>
                                    No one wants to live a miserable life but this is the only means they know to survive.
                                </h4>
                            </Col>
                        </Row>
                    </Grid>

                </div>
                <h2>
                    LET US SHARE OUR ABUNDANT BLESSINGS... Give love everyday
                </h2>
                <Button>
                    Find out more
                </Button>
            </div>
        );
    }
}