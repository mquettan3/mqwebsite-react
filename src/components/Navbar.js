import React, { Component } from 'react';
import { Link } from "react-router-dom";
import smoothscroll from 'smoothscroll-polyfill';

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.handleNavMenuIconClick = this.handleNavMenuIconClick.bind(this);
        this.handleNavMenuLinkClick = this.handleNavMenuLinkClick.bind(this);
        this.state = {
            isNavMenuActive: false
        }

        // kick off the polyfill!
        smoothscroll.polyfill();
    }

    handleNavMenuIconClick(e) {
        // Toggle the ability to scroll as well as toggle the nav_menu.
        // Note:  This is only availabl on mobile because the nav_menu_icon is only visible on mobile.
        // this.props.toggleStopScrolling();
        this.setState({isNavMenuActive: !this.state.isNavMenuActive});
    }

    handleNavMenuLinkClick(e) {
        // Toggle the ability to scroll as well as toggle the nav_menu.
        // Note:  This is only available on mobile because the nav_menu_icon is only visible on mobile.
        this.props.enableScrolling();
        this.setState({isNavMenuActive: false});

        if(e.currentTarget.hash){
            e.preventDefault();
            let hash = e.currentTarget.hash
            window.scroll({ top: document.querySelector(hash).offsetTop, left: 0, behavior: 'smooth' });
        }
    }

    render() {
        let showNavMenu = this.state.isNavMenuActive ? "active" : "";
        return (
            <section id="navbar">
                <div className="wrapper">
                    <div className="navbar">
                        {/* <!-- Logo --> */}
                        <div className="logo">
                            <Link className="page-scroll" to="/">QUETTAN</Link>
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
                            <li><Link className="nav-link" to="/" onClick={this.handleNavMenuLinkClick}>Home</Link></li>
                            <li><Link className="nav-link" to="/aboutme" onClick={this.handleNavMenuLinkClick}>About Me</Link></li>
                            <li><Link className="nav-link" to="/portfolio" onClick={this.handleNavMenuLinkClick}>Portfolio</Link></li>
                            <li><a className="page-scroll nav-link" href="#contact" onClick={this.handleNavMenuLinkClick}>Contact Me</a></li>
                        </ul>
                        {/* <!-- End Navigation Menu --> */}
                    </div>
                </div>
            </section>
        );
    }
}
