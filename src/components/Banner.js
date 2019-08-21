import React, { Component } from 'react';
import BackgroundImage from '../assets/images/Atlanta_Cityscape.jpg';

export default class Banner extends Component {
  render() {
    const backgroundStyle = {
        backgroundImage: "url(" + BackgroundImage + ")"
    }
    
    return (
        <section id="home" className="banner">
            <div style={backgroundStyle} className="banner-image" >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-1 banner-caption">
                            <h1>Marcus Quettan</h1>
                            <p>
                                Developing. Creating. Solving.<br/>
                                <a href="#aboutme" className="page-scroll btn btn-dark btn-lg btn-gray-transparent btn-animated">
                                    Learn More <span className="pl-20"><i className="fa fa-arrow-down"></i></span>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}
