import React, { Component } from 'react';
import Navbar from "./components/Navbar.js";
import Banner from "./components/Banner.js";
import AboutMe from "./components/AboutMe.js";
import Portfolio from "./components/Portfolio.js";
import Contact from "./components/Contact.js";
import Copyright from "./components/Copyright.js";
import ErrorPage from './components/ErrorPage.js';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);

    this.toggleStopScrolling = this.toggleStopScrolling.bind(this);
    this.enableScrolling = this.enableScrolling.bind(this);

    this.state = {
      isScrollingStopped: false
    }
  }

  toggleStopScrolling() {
    this.setState({isScrollingStopped: !this.state.isScrollingStopped});
  }

  enableScrolling() {
    this.setState({isScrollingStopped: false});
  }

  componentDidMount() {
    // Couldn't figure out how to get this to trigger on load completion for each image (because css background images).  So, 1 second delay seems fine?
    setTimeout( () => {
      // Remove the pre-loader
      this.loader = document.querySelector('.loader-wrapper');
      this.loader.classList.add('hide-loader');

      this.loader.addEventListener("transitionend", () => {
        this.loader.remove();
      });
    }, 1000);
  }

  render() {
    let stopScrolling = this.state.isScrollingStopped ? {height: "100vh", overflow: "hidden"} : {}
    return (
      <div className="landing-page" style={stopScrolling}>
    
        <BrowserRouter>
            {/* <!-- Top Navigation Bar --> */}
            <Navbar
              toggleStopScrolling={this.toggleStopScrolling}
              enableScrolling={this.enableScrolling}
            />
            <Switch>
              {/* <!-- Image Banner --> */}
              <Route exact path="/" component={Banner}/>
              <Route path="/aboutme" component={AboutMe}/>
              <Route path="/portfolio" component={Portfolio}/>
              <Route path="/errorpage" component={ErrorPage}/>
              <Redirect to={{pathname: "/errorpage"}} />
            </Switch>
    
          {/* <!-- My Contact Information --> */}
          <Contact />
          
        </BrowserRouter>
    
        {/* <!-- Copyright Information --> */}
        <Copyright />

      </div>
    );
  }
}

export default App;
