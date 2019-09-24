import React, { Component } from 'react';
import BackgroundImage from '../assets/images/Atlanta_Cityscape.jpg';
import OffKiWebsiteImage from '../assets/images/OffKiMultipleDevices.png';
import QM3SolutionsWebsiteImage from '../assets/images/QM3SolutionsMultipleDevices.png';

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
                        <img src={QM3SolutionsWebsiteImage} alt="Multiple Device Display of the QM3 Solutions Website."></img>
                    </div>
                    <div className="item-description">
                        <div className="description-wrapper">
                            <h1>QM3 Solutions</h1>
                            <p>QM3 Solutions is a staffing company with integrity.  We'd love to help you find a job or fill one of your open positions!  QM3 Solutions stands on a foundation of integrity as we aim to make a difference and directly impact the lives of the individuals which we serve. We strive to give individuals a new view and a new way to see life through with every placement we facilitate.</p>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="item-image">
                        <img src={OffKiWebsiteImage} alt="Multiple Device Display of the QM3 Solutions Website."></img>
                    </div>
                    <div className="item-description">
                        <div className="description-wrapper">
                            <h1>Off Ki Productions</h1>
                            <p>Off Ki Productions is an Atlanta based audio production team dedicated to enhancing YOUR craft.  Whether you're looking to buy music or a beat for your song, podcast, movie, elevator, photo slideshow...  Whatever!  Off Ki Productions brings positive and professional energy to every project to fit our client's vision.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}
