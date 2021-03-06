import React from 'react'
import NavigationBar from './layout/NavigationBar'
import Footer from './layout/Footer'
import Header from './layout/Header'

export default class App extends React.Component {
    render() {
        return (
            <div>
                <NavigationBar />
                <br/>
                <div id="content" className="container no-padding">
                    <div className="container-content">
                        <div className="push-down header-content padded">
                            <Header />
                            <div className="content" id="app-content">
                                {this.props.children}
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        );
    }
}