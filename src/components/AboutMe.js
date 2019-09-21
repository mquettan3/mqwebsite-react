import React, { Component } from 'react';
import BackgroundImage from '../assets/images/Atlanta_Cityscape.jpg';

export default class AboutMe extends Component {
  render() {
    const backgroundStyle = {
        backgroundImage: "url(" + BackgroundImage + ")"
    }
    
    return (
        <section id="aboutme" style={backgroundStyle} className="aboutme">
            <div className="wrapper">
                <div className="aboutme-caption">
                    <h1>About Me</h1>
                    <p>Simply put, I am interested in partnering with individuals and small businesses to enable them to take advantage of all that modern technology has to offer.  I can provide the custom software solutions you need!  But remember, this whole operation is just me.  If you're willing to be patient (This is a only side-gig for me right now), let's work together to bring your vision into reality!</p>
                </div>
            </div>
        </section>
    );
  }
}
