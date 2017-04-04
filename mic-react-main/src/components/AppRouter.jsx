import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import App from './App'
import HomeView from './views/home/HomeView'
import AboutView from './views/about/AboutView'
import ServicesView from './views/services/ServicesView'

export default class AppRouter extends React.Component {
    render() {
        return (
            <Router>
                <App>
                    <Route exact path="/" component={HomeView} />
                    <Route exact path="/about" component={AboutView} />
                    <Route exact path="/services" component={ServicesView} />
                </App>
            </Router>
        );
    }
}