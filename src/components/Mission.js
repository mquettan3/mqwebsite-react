import React, { Component } from 'react';

export default class Mission extends Component {
  render() {
    return (
        <section id="mission" className="container">
            {/* <!-- Mission Heading --> */}
            <div  className="row">
            <div className="col-lg-12">
                <div className="gallery-header">
                    <div className="col-lg-12 text-center">
                        <div className="navy-line"></div>
                        <h1>My <span className="gallery-header-light">Mission</span></h1>
                    </div>
                </div>
            </div>
            </div>
        
            {/* <!-- Content Paragraph --> */}
            <div  className="content-wrapper row">
            <div className="col-lg-12 text-center">
                <p>
                Truthfuylly stated, I find a great deal of passion in enabling individuals to create their own, professional, small businesses.  My vow to each and every person I serve is to ensure that support for their creation is maintained to the best of my capability.  Modern solutions to modern problems.
                </p>
            </div>
            </div>
            {/* <!-- Mission Heading --> */}
        </section>
    );
  }
}
