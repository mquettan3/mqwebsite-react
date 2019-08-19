import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    return (
        <section id="header" className="header navbar-fixed-top">
            <div className="container header-inner">
                <div className="row">
                    <div className="col-lg-12">
                        {/* <!-- Logo --> */}
                        <div className="logo">
                            <a className="page-scroll" href="#home">QUETTAN</a>
                        </div>
                        {/* <!-- End Logo --> */}

                        {/* <!--Navigation Icon--> */}
                        <div className="nav-menu-icon">
                            <a><i className="fa fa-bars"></i></a>
                        </div>
                        {/* <!--End Navigation Icon--> */}

                        {/* <!-- Navigation Menu --> */}
                        <div className="nav nav-menu">
                            <ul className="nav-menu-inner">
                                <li><a className="page-scroll" href="#home">Home</a></li>
                                <li><a className="page-scroll" href="#aboutme">About Me</a></li>
                                <li><a className="page-scroll" href="#features">My Services</a></li>
                                <li><a className="page-scroll" href="#mission">My Mission</a></li>
                                <li><a className="page-scroll" href="#contact">Contact Me</a></li>
                            </ul>
                        </div>
                        {/* <!-- End Navigation Menu --> */}
                    </div>
                </div>
            </div>
        </section>
    );
  }
}
