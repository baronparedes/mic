import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap/lib'

const ConnectWithUs = () => {
    return (
        <div className="container-fluid">
            <h2>Connect with us</h2>
            <div>
                <i className="fa fa-2x text-primary sr-icons fa-phone" />
                <span className="spacer" />
                <span>tel.</span>
                <p>
                    <span>+ 632 711 2235</span>
                    <br />
                    <span>+ 632 412 6659</span>
                </p>
            </div>
            <div>
                <i className="fa fa-2x text-primary sr-icons fa-envelope-o" />
                <span className="spacer" />
                <span>email</span>
                <p>
                    <a href="mailto:micmarketing@ymail.com">micmarketing@ymail.com</a>
                </p>
            </div>
            <div>
                <i className="fa fa-2x text-primary sr-icons fa-map-marker" />
                <span className="spacer" />
                <span>address</span>
                <p>
                    Room 318, 3rd Floor, URC Building, 2123 Espana Boulevard corner Blumentrit St, Sampaloc, Manila, 1008
                </p>
                <p>
                    <a href="http://maps.google.com/?q=URC Building, Manila, NCR, Philippines" target="_blank" className="btn btn-default btn-xl">
                        Google Maps
                    </a>
                </p>
            </div>
        </div>
    );
};

export default ConnectWithUs;