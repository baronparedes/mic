import React from 'react';
import { Modal, Button } from 'react-bootstrap'
import Column from '../../layout/Column'

export default class ServiceDetail extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleModal = this.handleToggleModal.bind(this);
        this.state = {
            show: false
        }
    }
    handleToggleModal() {
        if (this.props.modalContent) {
            this.setState({ show: !this.state.show });
        }
    }
    render() {
        return (
            <Column>
                <div className="service-box" onClick={this.handleToggleModal}>
                    <i className={"fa fa-4x text-primary sr-icons " + this.props.favicon}></i>
                    <h3>{this.props.label}</h3>
                    <div className="text-muted">
                        {this.props.children}
                    </div>
                    <Modal show={this.state.show} onHide={this.handleToggleModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>
                                {this.props.label}
                            </Modal.Title>
                            <Modal.Body>
                                {this.props.modalContent}
                            </Modal.Body>
                        </Modal.Header>
                        <Modal.Footer>
                            <Button onClick={this.handleToggleModal}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </Column>
        )
    }
}