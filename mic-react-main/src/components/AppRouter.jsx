import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import App from './App'
import HomeView from './views/home/HomeView'
import AboutView from './views/about/AboutView'
import ServicesView from './views/services/ServicesView'
import PartnersView from './views/partners/PartnersView'
import ContactView from './views/contactus/ContactView'
import PlansView from './views/plans/PlansView'
import TeamView from './views/team/TeamView'

export default class AppRouter extends React.Component {
    render() {
        return (
            <Router>
                <App>
                    <Route exact path="/" component={HomeView} />
                    <Route exact path="/about" component={AboutView} />
                    <Route exact path="/services" component={ServicesView} />
                    <Route path="/plans" component={PlansView} />
                    <Route exact path="/partners" component={PartnersView} />
                    <Route exact path="/contactus" component={ContactView} />
                    <Route exact path="/team" component={TeamView} />
                </App>
            </Router>
        );
    }
}