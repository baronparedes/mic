import React, { Component } from 'react';
import ContactForm from '../../layout/ContactForm'
import ContactField from '../../layout/ContactField'
import { inquireIndividualPlan } from '../../../api/contact'

class IndividualFamilyForm extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        name: '',
        age: '',
        email: '',
        contact: '',
        message: '',
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
        }
        else {
            this.setState({ [e.target.name]: e.target.value });
        }
    }

    handleErrors() {
        let errors = {};
        if (this.state.name === '') errors.name = "*";
        if (this.state.age === '') errors.age = "*";
        if (this.state.email === '') errors.email = "*";
        if (this.state.contact === '') errors.contact = "*";
        if (this.state.message === '') errors.message = "*";
        this.setState({ errors });
        return errors;
    }

    handleSubmit(e) {
        e.preventDefault();
        const isValid = Object.keys(this.handleErrors()).length === 0;
        if (isValid) {
            this.setState({ loading: true }, this.handleContact.bind(this));
        }
    }

    handleContact() {
        console.log("inquiring...");
        inquireIndividualPlan(this.state.name,
            this.state.age,
            this.state.email,
            this.state.contact,
            this.state.message,
            this.handleContactComplete.bind(this))
    }

    handleContactComplete() {
        this.setState({ 
            name: '',
            age: '',
            email: '',
            contact: '',
            message: '',
            loading: false
        });
    }

    componentDidMount() {
        this.link.click();
    }

    render() {
        return (
            <div className="container-fluid" id="plan">
                <h2>Individual or Family</h2>
                <a href="#plan" ref={(link) => { this.link = link; }}></a>
                <ContactForm loading={this.state.loading} handleSubmit={this.handleSubmit.bind(this)}>
                    <ContactField
                        controlId="form-name"
                        type="text"
                        name="name"
                        label="name"
                        error={this.state.errors.name}
                        value={this.state.name}
                        handleChange={this.handleChange.bind(this)} />
                    <ContactField
                        controlId="form-age"
                        type="text"
                        name="age"
                        label="age"
                        error={this.state.errors.age}
                        value={this.state.age}
                        handleChange={this.handleChange.bind(this)} />
                    <ContactField
                        controlId="form-email"
                        type="email"
                        name="email"
                        label="email"
                        error={this.state.errors.email}
                        value={this.state.email}
                        handleChange={this.handleChange.bind(this)} />
                    <ContactField
                        controlId="form-contact"
                        type="text"
                        name="contact"
                        label="contact no."
                        error={this.state.errors.contact}
                        value={this.state.contact}
                        handleChange={this.handleChange.bind(this)} />
                    <ContactField
                        controlId="form-message"
                        type="textarea"
                        name="message"
                        label="message"
                        error={this.state.errors.message}
                        value={this.state.message}
                        handleChange={this.handleChange.bind(this)} />
                </ContactForm>
            </div>
        );
    }
}

export default IndividualFamilyForm;