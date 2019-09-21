import React, { Component } from 'react';
import BackgroundImage from '../assets/images/Atlanta_Cityscape.jpg';

export default class Portfolio extends Component {
  render() {
    const backgroundStyle = {
        backgroundImage: "url(" + BackgroundImage + ")"
    }
    
    return (
        <section id="portfolio" style={backgroundStyle} className="portfolio">
            <div className="item-list">
                <div className="item">
                    <div className="item-image">

                    </div>
                    <div className="item-description">
                        <p>
                            
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}
