import React from 'react'
import NavigationBar from './layout/NavigationBar'
import Header from './layout/Header'
import AboutInfo from './about/AboutInfo'
import HomeInfo from './home/HomeInfo'

export default class App extends React.Component {
    render() {
        return (
            <div>
                <NavigationBar />
                <br />
                <div className="container container-content">
                    <div className="push-down header-content padded">
                        <Header />
                        <div className="content">
                            <HomeInfo />
                            {
                            //<AboutInfo />
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}