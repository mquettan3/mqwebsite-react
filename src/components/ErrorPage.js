import React, { Component } from 'react';
import BackgroundImage from '../assets/images/Atlanta_Cityscape.jpg';

export default class ErrorPage extends Component {
  render() {
    const backgroundStyle = {
        backgroundImage: "url(" + BackgroundImage + ")"
    }
    
    return (
        <section style={backgroundStyle} className="errorpage">
            <div className="wrapper">
                <div className="errorpage-caption">
                    <h1>404 - Error</h1>
                    <p>Page not found.</p>
                </div>
            </div>
        </section>
    );
  }
}
