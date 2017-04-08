import React, { Component } from 'react';
import { FormGroup, Button, FormControl, ControlLabel, Form, Col, InputGroup } from 'react-bootstrap/lib'

class ContactForm extends Component {
    constructor(props){
        super(props);
    }

    state = {
        firstname: '',
        lastname: '',
        contact: '',
        email: '',
        message: '',
        age: '',
        company: '',
        employees: '',
        natureOfBusiness: '',
        contactPerson: '',
        errors: {},
        loading: false
    }

    handleChange(e) {
        if (!!this.state.errors[e.target.name]) {
            let errors = Object.assign({}, this.state.errors);
            delete errors[e.target.name];
            this.setState({
                [e.target.name]: e.target.value,
                errors
            });
        } else {
            this.setState({ [e.target.name]: e.target.value });
        }
    }

    handleErrors() {
        let errors = {};
        if (this.state.name === '') errors.name = "*";
        if (this.state.contact === '') errors.contact = "*";
        if (this.state.email === '') errors.email = "*";
        if (this.state.message === '') errors.message = "*";
        this.setState({ errors });
        return errors;
    }

    handleSubmit(e) {
        e.preventDefault();
        const isValid = Object.keys(this.handleErrors()).length === 0;
        if (isValid) {
            this.setState({ loading: true });
        }
    }

    determineValidationState(error) {
        if (!!error) {
            return "error";
        }
        return null;
    }

    render() {
        return (
            <Form horizontal onSubmit={this.handleSubmit.bind(this)}>
                <fieldset disabled={this.state.loading}>
                    <FormGroup controlId="form-name" validationState={this.determineValidationState(this.state.errors.name)}>
                        <Col componentClass={ControlLabel} sm={2}>
                            name
                            </Col>
                        <Col sm={10}>
                            <InputAddOn>
                                <FormControl
                                    type="text"
                                    placeholder="name"
                                    name="name"
                                    value={this.state.name}
                                    onChange={this.handleChange.bind(this)} />
                            </InputAddOn>
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="form-email" validationState={this.determineValidationState(this.state.errors.email)}>
                        <Col componentClass={ControlLabel} sm={2}>
                            email
                            </Col>
                        <Col sm={10}>
                            <InputAddOn>
                                <FormControl
                                    type="email"
                                    placeholder="email"
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.handleChange.bind(this)} />
                            </InputAddOn>
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="form-contact" validationState={this.determineValidationState(this.state.errors.contact)}>
                        <Col componentClass={ControlLabel} sm={2}>
                            contact
                        </Col>
                        <Col sm={10}>
                            <InputAddOn>
                                <FormControl
                                    type="text"
                                    placeholder="contact"
                                    name="contact"
                                    value={this.state.contact}
                                    onChange={this.handleChange.bind(this)} />
                            </InputAddOn>
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="form-message" validationState={this.determineValidationState(this.state.errors.message)}>
                        <Col componentClass={ControlLabel} sm={2}>
                            message
                        </Col>
                        <Col sm={10}>
                            <InputAddOn>
                                <FormControl
                                    componentClass="textarea"
                                    rows="6"
                                    placeholder="message"
                                    name="message"
                                    value={this.state.message}
                                    onChange={this.handleChange.bind(this)} />
                            </InputAddOn>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Button
                                type="submit"
                                disabled={this.state.loading}>
                                {this.state.loading ? <ButtonLoading /> : "Submit"}
                            </Button>
                        </Col>
                    </FormGroup>
                </fieldset>
            </Form>
        );
    }
}

const ButtonLoading = () => {
    return (
        <div>
            Submitting
            <span className="sm-spacer"></span>
            <i className="fa fa-spinner fa-spin"></i>
        </div>
    )
}

const InputAddOn = (props) => {
    return (
        <InputGroup>
            <InputGroup.Addon>
                <i className="fa text-primary sr-icons fa-asterisk" />
            </InputGroup.Addon>
            {props.children}
        </InputGroup>
    );
}

ContactForm.propTypes = {
    type: React.PropTypes.string.isRequired
}

export default ContactForm;