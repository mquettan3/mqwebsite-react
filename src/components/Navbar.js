import React, { Component } from 'react';
import $ from 'jquery';
require('jquery.scrollto');

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.handleNavMenuIconClick = this.handleNavMenuIconClick.bind(this)
        this.state = {
            isNavMenuActive: false
        }
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
    }

    handleNavMenuIconClick(e) {
        // Toggle the ability to scroll as well as toggle the nav_menu.
        // Note:  This is only availabl on mobile because the nav_menu_icon is only visible on mobile.
        this.props.toggleStopScrolling();
        this.setState({isNavMenuActive: !this.state.isNavMenuActive});
    }

    render() {
        let showNavMenu = this.state.isNavMenuActive ? "active" : "";
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
                        <div className="nav-menu-icon" onClick={this.handleNavMenuIconClick}>
                            <a><i className="fa fa-bars"></i></a>
                        </div>
                        {/* <!--End Navigation Icon--> */}

                        {/* <!-- Navigation Menu --> */}
                        <ul className={"nav-menu " + showNavMenu}>
                            <div className="nav-menu-icon" onClick={this.handleNavMenuIconClick}>
                                <a><i className="fa fa-times"></i></a>
                            </div>
                            <li><a className="page-scroll nav-link" href="#home" onClick={this.handleNavMenuIconClick}>Home</a></li>
                            <li><a className="nav-link" href="#aboutme" onClick={this.handleNavMenuIconClick}>About Me</a></li>
                            <li><a className="nav-link" href="#features" onClick={this.handleNavMenuIconClick}>Portfolio</a></li>
                            <li><a className="page-scroll nav-link" href="#contact" onClick={this.handleNavMenuIconClick}>Contact Me</a></li>
                        </ul>
                        {/* <!-- End Navigation Menu --> */}
                    </div>
                </div>
            </section>
        );
    }
}
