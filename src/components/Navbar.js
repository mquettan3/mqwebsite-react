import React, { Component } from 'react';
import $ from 'jquery';
require('jquery.scrollto');

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.handleNavMenuIconClick = this.handleNavMenuIconClick.bind(this)
        
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
        this.navMenuIcon.removeEventListener('click', this.handleNavMenuIconClick);
    }

    handleNavMenuIconClick(e) {
        document.querySelector(".nav-menu-icon").classList.toggle('active');
        document.querySelector(".nav-menu").classList.toggle('active');
    }

    render() {
        return (
            <section id="navbar">
                <div className="wrapper">
                    <div className="navbar">
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
                        <ul className="nav-menu">
                            <li><a className="page-scroll nav-link" href="#home">Home</a></li>
                            <li><a className="nav-link" href="#aboutme">About Me</a></li>
                            <li><a className="nav-link" href="#features">Portfolio</a></li>
                            <li><a className="page-scroll nav-link" href="#contact">Contact Me</a></li>
                        </ul>
                        {/* <!-- End Navigation Menu --> */}
                    </div>
                </div>
            </section>
        );
    }
}
