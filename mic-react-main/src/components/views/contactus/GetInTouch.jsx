import React, { Component } from 'react';
import { FormGroup, Button, Panel, FormControl, ControlLabel, Form, Col } from 'react-bootstrap/lib'

class GetInTouch extends Component {
    render() {
        return (
            <div className="container-fluid">
                <h2>Get in touch</h2>
                <Form horizontal>
                    <FormGroup controlId="formFirstName">
                        <Col componentClass={ControlLabel} sm={2}>
                            first name
                            </Col>
                        <Col sm={10}>
                            <FormControl type="text" placeholder="first name" />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formLastName">
                        <Col componentClass={ControlLabel} sm={2}>
                            last name
                            </Col>
                        <Col sm={10}>
                            <FormControl type="text" placeholder="last name" />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formEmail">
                        <Col componentClass={ControlLabel} sm={2}>
                            email
                            </Col>
                        <Col sm={10}>
                            <FormControl type="email" placeholder="email" />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formContact">
                        <Col componentClass={ControlLabel} sm={2}>
                            contact
                        </Col>
                        <Col sm={10}>
                            <FormControl type="text" placeholder="contact" />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formMessage">
                        <Col componentClass={ControlLabel} sm={2}>
                            message
                        </Col>
                        <Col sm={10}>
                            <FormControl componentClass="textarea" placeholder="message" rows="6" />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Button type="submit">
                                Submit >
                            </Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

export default GetInTouch;