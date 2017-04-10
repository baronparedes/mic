import React, { Component } from 'react';
import { Form, FormGroup, Col, Button } from 'react-bootstrap/lib'

const ButtonLoading = () => {
    return (
        <div>
            Submitting
            <span className="sm-spacer"></span>
            <i className="fa fa-spinner fa-spin"></i>
        </div>
    )
}

const ContactForm = (props) => {
    return (
        <Form horizontal onSubmit={props.handleSubmit}>
            <fieldset disabled={props.loading}>
                {props.children}
                <FormGroup>
                    <Col sm={12}>
                        <Button
                            type="submit"
                            disabled={props.loading}>
                            {props.loading ? <ButtonLoading /> : "Submit"}
                        </Button>
                    </Col>
                </FormGroup>
            </fieldset>
        </Form>
    );
}

ContactForm.propTypes = {
    loading: React.PropTypes.bool.isRequired,
    handleSubmit: React.PropTypes.func.isRequired
}

export default ContactForm;