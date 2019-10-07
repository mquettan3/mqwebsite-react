import React, { Component } from 'react';
import BackgroundImage from '../assets/images/Atlanta_Cityscape.jpg';
import { Link } from "react-router-dom";

export default class Banner extends Component {
  componentDidMount() {
    window.scrollTo(0,0);
  }

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
                    <Link to="/portfolio">Check What I've Built!<i className="fas fa-arrow-right"></i></Link>
                </div>
            </div>
        </section>
    );
  }
}
