import React, { Component } from 'react';
import ContactForm from '../../layout/ContactForm'
import ContactField from '../../layout/ContactField'

class CorporateGroupForm extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        company: '',
        employees: '',
        natureOfBusiness: '',
        email: '',
        contactPerson: '',
        contact: '',
        notes: '',
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
        if (this.state.company === '') errors.company = "*";
        if (this.state.employees === '') errors.employees = "*";
        if (this.state.natureOfBusiness === '') errors.natureOfBusiness = "*";
        if (this.state.email === '') errors.email = "*";
        if (this.state.contactPerson === '') errors.contactPerson = "*";
        if (this.state.contact === '') errors.contact = "*";
        if (this.state.notes === '') errors.notes = "*";
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

    render() {
        return (
            <div className="container-fluid">
                <h2>Corporate or Group</h2>
                <ContactForm loading={this.state.loading} handleSubmit={this.handleSubmit.bind(this)}>
                    <ContactField
                        controlId="form-company"
                        type="text"
                        name="company"
                        label="company"
                        error={this.state.errors.company}
                        value={this.state.company}
                        handleChange={this.handleChange.bind(this)} />
                    <ContactField
                        controlId="form-employees"
                        type="text"
                        name="employees"
                        label="no. of employees"
                        error={this.state.errors.employees}
                        value={this.state.employees}
                        handleChange={this.handleChange.bind(this)} />
                    <ContactField
                        controlId="form-natureOfBusiness"
                        type="text"
                        name="natureOfBusiness"
                        label="nature of business"
                        error={this.state.errors.natureOfBusiness}
                        value={this.state.natureOfBusiness}
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
                        controlId="form-contactPerson"
                        type="text"
                        name="contactPerson"
                        label="contact person"
                        error={this.state.errors.contactPerson}
                        value={this.state.contactPerson}
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
                        controlId="form-notes"
                        type="textarea"
                        name="notes"
                        label="notes"
                        error={this.state.errors.notes}
                        value={this.state.notes}
                        handleChange={this.handleChange.bind(this)} />
                </ContactForm>
            </div>
        );
    }
}

export default CorporateGroupForm;