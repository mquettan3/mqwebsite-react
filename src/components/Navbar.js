import React, { Component } from 'react';
import $ from 'jquery';
require('jquery.scrollto');

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
        this.scrollY = this.scrollY.bind(this);
        this.handleNavMenuIconClick = this.handleNavMenuIconClick.bind(this)
        

        this.state = {
            handledScroll: false,
            addFixedHeaderOn: 1
        }

        window.addEventListener('scroll', this.handleScroll);
    }

    componentDidMount() {
        $('body').scrollspy({
            target: '#header',
            offset: 80
        })

        // Page scrolling feature
        $('a.page-scroll').bind('click', function (event) {
            var link = $(this);
            $('html, body').stop().animate({
                scrollTop: $(link.attr('href')).offset().top - 65
            }, 500);
            event.preventDefault();
        });

        this.navMenuIcon = document.querySelector('.nav-menu-icon');
        this.navMenuIcon.addEventListener('click', this.handleNavMenuIconClick);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
        this.navMenuIcon.removeEventListener('click', this.handleNavMenuIconClick);
    }

    scrollY() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }

    handleScroll(e) {
        // const sy = this.scrollY();
        // const header = document.querySelector('.header');
        
        // if ( sy > this.state.addFixedHeaderOn ) {
        //     header.classList.add('header-fixed');
        // }
        // else {
        //     header.classList.remove('header-fixed');
        // }
    
        // if ( sy > this.state.addFixedHeaderOn ) {
        //     header.classList.add('header-prepare');
        // }
        // else {
        //     header.classList.remove('header-prepare');
        // }
    }

    handleNavMenuIconClick(e) {
        document.querySelector(".nav-menu-icon").classList.toggle('active');
        document.querySelector(".nav-menu").classList.toggle('active');
    }

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
                                    <li><a className="page-scroll nav-link" href="#home">Home</a></li>
                                    <li><a className="page-scroll nav-link" href="#aboutme">About Me</a></li>
                                    <li><a className="page-scroll nav-link" href="#features">My Services</a></li>
                                    <li><a className="page-scroll nav-link" href="#mission">My Mission</a></li>
                                    <li><a className="page-scroll nav-link" href="#contact">Contact Me</a></li>
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
