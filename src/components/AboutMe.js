import React, { Component } from 'react';

export default class AboutMe extends Component {
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
                    <div className="panel-group collapse-style-1" id="accordion">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                        <h4 className="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                            <i className="fa fa-university pr-10"></i>Education
                            </a>
                        </h4>
                        </div>
                        <div id="collapseOne" className="panel-collapse collapse in">
                        <div className="panel-body">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue dui vehicula, tincidunt diam ac, faucibus arcu. Etiam pellentesque imperdiet elit, id bibendum lorem auctor a. Donec rhoncus euismod pellentesque. Sed pretium semper nisi. Proin euismod euismod justo, quis mattis nulla iaculis nec. Integer at dolor ante. Donec efficitur suscipit nunc lobortis molestie.
                        </div>
                        </div>
                    </div>
                    <div className="panel panel-default">
                        <div className="panel-heading">
                        <h4 className="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" className="collapsed">
                            <i className="fa fa-desktop pr-10"></i>Professional Experience
                            </a>
                        </h4>
                        </div>
                        <div id="collapseTwo" className="panel-collapse collapse">
                        <div className="panel-body">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue dui vehicula, tincidunt diam ac, faucibus arcu. Etiam pellentesque imperdiet elit, id bibendum lorem auctor a. Donec rhoncus euismod pellentesque. Sed pretium semper nisi. Proin euismod euismod justo, quis mattis nulla iaculis nec. Integer at dolor ante. Donec efficitur suscipit nunc lobortis molestie.
                        </div>
                        </div>
                    </div>
                    <div className="panel panel-default">
                        <div className="panel-heading">
                        <h4 className="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseThree" className="collapsed">
                            <i className="fa fa-code pr-10"></i>Web Development Experience
                            </a>
                        </h4>
                        </div>
                        <div id="collapseThree" className="panel-collapse collapse">
                        <div className="panel-body">
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