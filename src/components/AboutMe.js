import React, { Component } from 'react';

export default class AboutMe extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        
    }

  render() {
    return (
        <section id="aboutme" className="container">
            <div className="row">
                {/* <!-- Heading Name --> */}
                <div className="col-lg-12 text-center gallery-header">
                    <div className="navy-line"></div>
                    <h1>About <span className="gallery-header-light">Me</span></h1>
                </div>
            </div>

            {/* <!-- Complete About Me --> */}
            <div className="row content-wrapper">
                {/* <!-- accordion start -->
                <!-- ================ --> */}
                <div className="col-md-6">
                    <div id="accordion" className="collapse-style-2" role="tablist" aria-multiselectable="true">
                        <div id="cardOne" className="card">
                            <div className="card-header" role="tab" id="headingOne">
                                <h4 className="mb-0">
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne" className="" onClick={this.handleClick}>
                                    <i className="title-icon fa fa-university"></i>Education<i className="collapse-icon fas fa-angle-up"></i>
                                </a>
                                </h4>
                            </div>
                            <div id="collapseOne" className="collapse accordianLinkHook show" role="tabpanel" aria-labelledby="headingOne">
                                <div className="card-block light-gray-bg">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue dui vehicula, tincidunt diam ac, faucibus arcu. Etiam pellentesque imperdiet elit, id bibendum lorem auctor a. Donec rhoncus euismod pellentesque. Sed pretium semper nisi. Proin euismod euismod justo, quis mattis nulla iaculis nec. Integer at dolor ante. Donec efficitur suscipit nunc lobortis molestie.
                                </div>
                            </div>
                        </div>
                        <div id="cardTwo" className="card">
                            <div className="card-header" role="tab" id="headingTwo">
                                <h4 className="mb-0">
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo" className="collapsed" onClick={this.handleClick}>
                                    <i className="title-icon fa fa-desktop"></i>Professional Experience<i className="collapse-icon fas fa-angle-up"></i>
                                </a>
                                </h4>
                            </div>
                            <div id="collapseTwo" className="collapse accordianLinkHook" role="tabpanel" aria-labelledby="headingTwo">
                                <div className="card-block light-gray-bg">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue dui vehicula, tincidunt diam ac, faucibus arcu. Etiam pellentesque imperdiet elit, id bibendum lorem auctor a. Donec rhoncus euismod pellentesque. Sed pretium semper nisi. Proin euismod euismod justo, quis mattis nulla iaculis nec. Integer at dolor ante. Donec efficitur suscipit nunc lobortis molestie.
                                </div>
                            </div>
                        </div>
                        <div id="cardThree" className="card">
                            <div className="card-header" role="tab" id="headingThree">
                                <h4 className="mb-0">
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="true" aria-controls="collapseThree" className="collapsed" onClick={this.handleClick}>
                                    <i className="title-icon fa fa-code"></i>Web Development Experience<i className="collapse-icon fas fa-angle-up"></i>
                                </a>
                                </h4>
                            </div>
                            <div id="collapseThree" className="collapse accordianLinkHook" role="tabpanel" aria-labelledby="headingThree">
                                <div className="card-block light-gray-bg">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue dui vehicula, tincidunt diam ac, faucibus arcu. Etiam pellentesque imperdiet elit, id bibendum lorem auctor a. Donec rhoncus euismod pellentesque. Sed pretium semper nisi. Proin euismod euismod justo, quis mattis nulla iaculis nec. Integer at dolor ante. Donec efficitur suscipit nunc lobortis molestie.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- accordion end -->
                <!-- progress bars start -->
                <!-- ================ --> */}
                <div id="progress_bars" className="col-md-6">
                    <div className="progress mt-20 style-1">
                        <span className="text"></span>
                        <div className="progress-bar progress-bar-default" data-animate-width="95%">
                            <span className="label object-non-visible" data-animation-effect="fadeInLeftSmall" data-effect-delay="1000">C++</span>
                        </div>
                    </div>
                    <div className="progress style-1">
                        <span className="text"></span>
                        <div className="progress-bar progress-bar-default" data-animate-width="90%">
                            <span className="label object-non-visible" data-animation-effect="fadeInLeftSmall" data-effect-delay="1000">Meteor.js</span>
                        </div>
                    </div>
                    <div className="progress style-1">
                        <span className="text"></span>
                        <div className="progress-bar progress-bar-default" data-animate-width="85%">
                            <span className="label object-non-visible" data-animation-effect="fadeInLeftSmall" data-effect-delay="1000">Javascript</span>
                        </div>
                    </div>
                    <div className="progress style-1">
                        <span className="text"></span>
                        <div className="progress-bar progress-bar-default" data-animate-width="90%">
                            <span className="label object-non-visible" data-animation-effect="fadeInLeftSmall" data-effect-delay="1000">HTML5</span>
                        </div>
                    </div>
                    <div className="progress style-1">
                        <span className="text"></span>
                        <div className="progress-bar progress-bar-default" data-animate-width="75%">
                            <span className="label object-non-visible" data-animation-effect="fadeInLeftSmall" data-effect-delay="1000">CSS</span>
                        </div>
                    </div>
                    <div className="progress style-1">
                        <span className="text"></span>
                        <div className="progress-bar progress-bar-default" data-animate-width="100%">
                            <span className="label object-non-visible" data-animation-effect="fadeInLeftSmall" data-effect-delay="1000">Unix</span>
                        </div>
                    </div>
                    <div className="progress style-1">
                        <span className="text"></span>
                        <div className="progress-bar progress-bar-default" data-animate-width="90%">
                            <span className="label object-non-visible" data-animation-effect="fadeInLeftSmall" data-effect-delay="1000">Amazon Web Services</span>
                        </div>
                    </div>
                </div>
            {/* <!-- progress bars end --> */}
            </div>
        </section>
    );
  }
}