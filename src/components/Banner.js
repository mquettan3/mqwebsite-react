import React, { Component } from 'react';
import BackgroundImage from '../assets/images/Atlanta_Cityscape.jpg';

export default class Banner extends Component {
  render() {
    const backgroundStyle = {
        backgroundImage: "url(" + BackgroundImage + ")"
    }
    
    return (
        <section id="home" style={backgroundStyle} className="banner">
            <div className="wrapper">
                <div className="banner-caption">
                    <h1>Marcus Quettan</h1>
                    <p>Developing. Creating. Solving.</p>
                </div>
            </div>
        </section>
    );
  }
}
