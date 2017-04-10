import React from 'react';
import { FormGroup, FormControl, ControlLabel, Col, InputGroup } from 'react-bootstrap/lib'

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

const ContactField = (props) => {
    return (
        <FormGroup controlId={props.controlId} validationState={!!props.error ? "error" : null}>
            <Col componentClass={ControlLabel} sm={2}>
                {props.label}
            </Col>
            <Col sm={10}>
                <InputAddOn>
                    {
                        props.type === 'textarea' ?
                            (
                                <FormControl
                                    componentClass="textarea"
                                    rows="6"
                                    placeholder={props.label}
                                    name={props.name}
                                    value={props.value}
                                    onChange={props.handleChange} />
                            ) :
                            (
                                <FormControl
                                    type={props.type}
                                    placeholder={props.label}
                                    name={props.name}
                                    value={props.value}
                                    onChange={props.handleChange} />
                            )
                    }
                </InputAddOn>
            </Col>
        </FormGroup>
    );
};

export default ContactField;