import React, { Component } from 'react';
import BackgroundImage from '../assets/images/Semiconductor.jpg';

export default class Features extends Component {
  render() {
    const backgroundStyle = {
        backgroundImage: "url(" + BackgroundImage + ")"
    }

    return (
        <section id="features" className="section-padding text-center gray-bg" style={backgroundStyle}>
            <div className="image_overlay">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center gallery-header">
                            <div className="navy-line"></div>
                            <h1>My <span className="gallery-header-light">Services</span></h1>
                        </div>
                    </div>
                    <div className="row content-wrapper features-wrapper">
                        <div className="col-md-4 col-sm-6 col-xs-12 content-box mb-sm-30 wow fadeIn" data-wow-delay="0.2s" data-wow-duration="2s">
                            <div className="icon-top icon-black"><i className="icon icon-basic-webpage-multiple"></i></div>
                            <h5 className="features-title">Web Development</h5>
                            {/* <!-- <p>In the eyes of the consumer, a professional online presence is becoming an expected barrier to entry in an increasingly large amount of industries.  I can help you to create or improve your online precense.</p> --> */}
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue dui vehicula, tincidunt diam ac, faucibus arcu. Etiam pellentesque imperdiet elit, id bibendum lorem auctor a. Donec rhoncus euismod pellentesque. Sed pretium semper nisi. Proin euismod euismod justo, quis mattis nulla iaculis nec. Integer at dolor ante. Donec efficitur suscipit nunc lobortis molestie.
                            </p>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12 content-box mb-sm-30 wow fadeIn" data-wow-delay="0.4s" data-wow-duration="2s">
                            <div className="icon-top icon-black"><i className="icon icon-basic-settings"></i></div>
                            <h5 className="features-title">Embedded Development</h5>
                            {/* <!-- <p>The images on your website are the core to creating a powerful foundation.  These are the elements which adhere to your visitor's mind and are paramount to communicating your unique experiences.</p> --> */}
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue dui vehicula, tincidunt diam ac, faucibus arcu. Etiam pellentesque imperdiet elit, id bibendum lorem auctor a. Donec rhoncus euismod pellentesque. Sed pretium semper nisi. Proin euismod euismod justo, quis mattis nulla iaculis nec. Integer at dolor ante. Donec efficitur suscipit nunc lobortis molestie.
                            </p>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12 content-box mb-sm-30 wow fadeIn" data-wow-delay="0.6s" data-wow-duration="2s">
                            <div className="icon-top icon-black"><i className="icon icon-basic-display"></i></div>
                            <h5 className="features-title">Consulting</h5>
                            {/* <!-- <p>Have a technical problem within your business processes which needs addressing?  Contact me.  I will provide a comprehensive plan to address the issue so that your business runs smoothly.</p> --> */}
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue dui vehicula, tincidunt diam ac, faucibus arcu. Etiam pellentesque imperdiet elit, id bibendum lorem auctor a. Donec rhoncus euismod pellentesque. Sed pretium semper nisi. Proin euismod euismod justo, quis mattis nulla iaculis nec. Integer at dolor ante. Donec efficitur suscipit nunc lobortis molestie.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}
