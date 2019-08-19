import React, { Component } from 'react';
import WOW from "wow.js";
import Navbar from "./components/Navbar.js";
import Banner from "./components/Banner.js";
import AboutMe from "./components/AboutMe.js";
import Features from "./components/Features.js";
import Mission from "./components/Mission.js";
import Contact from "./components/Contact.js";
import Copyright from "./components/Copyright.js";

import './assets/css/main.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false
    }

  }
  
  componentDidMount() {
    // Initialize Animations
    const wow = new WOW();
    wow.init();

    // Remove the pre-loader
    const loader = document.querySelector('.loader-wrapper');
    loader.classList.add('animated', 'fadeOut');

    // loader.addEventListener("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
    //   loader.remove();
    // });
    // loader.remove();
  }

  render() {
    return (
      <div className="mq-website">
    
        {/* <!-- Top Navigation Bar --> */}
        <Navbar />
    
        {/* <!-- Image Banner --> */}
        <Banner />
    
        {/* <!-- About Me Resume --> */}
        <AboutMe />

        {/* <!-- Features List --> */}
        <Features />
    
        {/* <!-- My Mission --> */}
        <Mission />
    
        {/* <!-- Image Gallery --> */}
        {/* <Image_Gallery /> */}
    
        {/* <!-- Audio Gallery --> */}
        {/* <Audio_Gallery /> */}
    
        {/* <!-- My Contact Information --> */}
        <Contact />
    
        {/* <!-- Copyright Information --> */}
        <Copyright />

      </div>
    );
  }
}

export default App;
