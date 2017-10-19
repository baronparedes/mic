import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap/lib'
import TeamMember from './TeamMember'

const data = [
    {
        title: <span>President<br/>CEO</span>,
        name: "EDUARDO MICALLER",
        image: "eduardom.png"
    },
    {
        title: <span>Vice President<br/>Admin and Finance</span>,
        name: "EDITHA MEDINA",
        image: "editham.png"
    },
    {
        title: <span>Vice President for Marketing<br/>Luzon-Visayas & Mindanao Area</span>,
        name: "MARLIE MELBA P. FERMIN",
        image: "marlief.png"
    },
    {
        title: <span>Vice President for Marketing<br/>Metro Manila & North Luzon</span>,
        name: "MA. GENNA P. GUEVARRA",
        image: "gennag.png"
    },
    {
        title: <span>Vice President for Marketing<br/>Mindanao Area</span>,
        name: "MYRNA A. ABAPO",
        image: "myrnaa.png"
    },
    {
        title: <span>Vice President for Marketing<br/>Metro Manila & South Luzon</span>,
        name: "EDUARDO V. SANTIAGO",
        image: "blank-photo.png"
    },
    {
        title: <span>Vice President for Marketing<br/>Research and Dev</span>,
        name: "DHIANNA MONICA B. MICALLER",
        image: "dhiannam.png"
    },
    {
        title:<span>Head<br/>Account Management</span>,
        name:"MARISOL N. ROASA",
        image: "marisolr.png"
    },
    {
        title:<span>Head<br/>Accounting Service</span>,
        name:"KATRINA B. CAPUSO",
        image: "katrinac.png"
    }
]

const MeetOurTeam = () => {
    let row = 0;
    return (
        <div>
            <h2>Meet our Team!</h2>
            <br />
            <Grid fluid>
                <Row>
                    {
                        data.map(_ => {
                            row++;
                            return <TeamMember 
                                key={row}
                                src={require("img/portfolio/teams/" + _.image)}
                                name={_.name}
                                title={_.title} />
                        })
                    }
                </Row>
            </Grid>
        </div>
    )
}

export default MeetOurTeam;