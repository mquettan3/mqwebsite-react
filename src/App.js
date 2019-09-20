import React, { Component } from 'react';
import WOW from "wow.js";
import Navbar from "./components/Navbar.js";
import Banner from "./components/Banner.js";
import AboutMe from "./components/AboutMe.js";
import Features from "./components/Features.js";
import Mission from "./components/Mission.js";
import Contact from "./components/Contact.js";
import Copyright from "./components/Copyright.js";

class App extends Component {  
  componentDidMount() {
    // Initialize Animations
    const wow = new WOW();
    wow.init();

    // Couldn't figure out how to get this to trigger on load completion for each image (because css background images).  So, 1 second delay seems fine?
    setTimeout( () => {
      // Remove the pre-loader
      this.loader = document.querySelector('.loader-wrapper');
      this.loader.classList.add('animated', 'fadeOut');
  
      this.loader.addEventListener("animationend", () => {
        this.loader.remove();
      });
    }, 1000);
  }

  render() {
    return (
      <div className="landing-page">
    
        {/* <!-- Top Navigation Bar --> */}
        {/* <Navbar /> */}
    
        {/* <!-- Image Banner --> */}
        <Banner />
    
        {/* <!-- About Me Resume --> */}
        {/* <AboutMe /> */}

        {/* <!-- Features List --> */}
        {/* <Features /> */}
    
        {/* <!-- My Mission --> */}
        {/* <Mission /> */}
    
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
