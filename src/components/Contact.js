import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    return (
        // <!-- Dark wrapper -->
        <section id="contact" className="dark">
            {/* <!-- .contact-footer start -->
            <!-- ================ --> */}
            <div className="contact-footer">
                <div className="container">
                    <div className="contact-footer-inner">
                        <div className="row">
                            <div className="col-md-6">
                  <div className="contact-footer-content">
                      <div className="container-fluid">
                          <div className="row">
                              <div className="logo">
                                  <a className="page-scroll" href="#home">QUETTAN</a>
                              </div>
                          </div>
                      </div>
                                    {/* <!-- <div className="mb-20"><img
                                        src="img/landing/logo-light.png" alt=""></div> --> */}
                                    <br/>
                                    {/* <!-- <p>It would be great to hear from you!  Please, contact me with a description of your project to further this conversation.  I will provide you
                                    with a quote and an estimated time to completion once we have completely established the scope and requirements for the project.
                                    I look forward to hearing from you.<br/> --> */}
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue dui vehicula, tincidunt diam ac, faucibus arcu. Etiam pellentesque imperdiet elit, id bibendum lorem auctor a. Donec rhoncus euismod pellentesque. Sed pretium semper nisi. Proin euismod euismod justo, quis mattis nulla iaculis nec. Integer at dolor ante. Donec efficitur suscipit nunc lobortis molestie.
                                    <br />
                                    <i> - Marcus Quettan</i>
                                    </p>
    
                                    <ul className="list-inline mb-20">
                                        <li><span><i className="text-default fa fa-map-marker"></i></span> Atlanta, GA</li>
                                        <li><span><i className="text-default fa fa-phone"></i></span> +1 (770) 765-5515</li>
                                        <li><a href="mailto:mquettan@gmail.com" className="link-dark"><span><i className="text-default fa fa-envelope"></i></span> mquettan@gmail.com</a></li>
                                    </ul>
                                    <div className="separator-2"></div>
                                    <ul className="social-links circle margin-clear animated-effect-1">
                                        <li className="facebook"><a target="_blank" href="http://www.facebook.com"><i className="fab fa-facebook-f fa-lg" data-fa-transform="down-4"></i></a></li>
                                        <li className="twitter"><a target="_blank" href="http://www.twitter.com"><i className="fab fa-twitter fa-lg" data-fa-transform="down-4"></i></a></li>
                                        <li className="googleplus"><a target="_blank" href="http://plus.google.com"><i className="fab fa-google-plus fa-lg" data-fa-transform="down-4"></i></a></li>
                                        <li className="linkedin"><a target="_blank" href="http://www.linkedin.com"><i className="fab fa-linkedin fa-lg" data-fa-transform="down-4"></i></a></li>
                                        <li className="xing"><a target="_blank" href="http://www.xing.com"><i className="fab fa-xing fa-lg" data-fa-transform="down-4"></i></a></li>
                                        <li className="skype"><a target="_blank" href="http://www.skype.com"><i className="fab fa-skype fa-lg" data-fa-transform="down-4"></i></a></li>
                                        <li className="youtube"><a target="_blank" href="https://www.youtube.com"><i className="fab fa-youtube fa-lg" data-fa-transform="down-4"></i></a></li>
                                        <li className="dribbble"><a target="_blank" href="https://dribbble.com/"><i className="fab fa-dribbble fa-lg" data-fa-transform="down-4"></i></a></li>
                                        <li className="pinterest"><a target="_blank" href="http://www.pinterest.com"><i className="fab fa-pinterest fa-lg" data-fa-transform="down-4"></i></a></li>
                                        <li className="flickr"><a target="_blank" href="http://www.flickr.com"><i className="fab fa-flickr fa-lg" data-fa-transform="down-4"></i></a></li>
                                        <li className="instagram"><a target="_blank" href="http://www.instagram.com"><i className="fab fa-instagram fa-lg" data-fa-transform="down-4"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="contact-footer-content">
                                    <h2 className="title">Contact Me</h2>
                                    <div className="alert alert-success hidden" id="MessageSent">
                                        Your message was successfully sent!
                                    </div>
                                    <div className="alert alert-danger hidden" id="MessageNotSent">
                                        Oops! Something went wrong please refresh the page and try again.
                                    </div>
                                    <div className="alert alert-danger hidden" id="MessageNotSent2">
                                        Yahoo E-Mail addresses do not cooperate with this form.  Please use a different E-Mail address.
                                    </div>
                                    <form role="form" id="contact-footer-form" className="margin-clear">
                                        <div className="form-group has-feedback mb-10">
                                            <label className="sr-only" htmlFor="name">Name</label>
                                            <input type="text" className="form-control" id="name" placeholder="Name" name="name" required />
                                            <span><i className="fa fa-user form-control-feedback"></i></span>
                                        </div>
                                        <div className="form-group has-feedback mb-10">
                                            <label className="sr-only" htmlFor="email">Email address</label>
                                            <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" required />
                                            <span><i className="fa fa-envelope form-control-feedback"></i></span>
                                        </div>
                                        <div className="form-group has-feedback mb-10">
                                            <label className="sr-only" htmlFor="message">Message</label>
                                            <textarea className="message_box form-control" rows="4" id="message" placeholder="Message" name="message" required></textarea>
                                            <span><i className="fa fa-pencil-alt form-control-feedback"></i></span>
                                        </div>
                                        <input type="submit" value="Send" className="margin-clear submit-button btn btn-default" onClick={this.handleSubmit}/>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          {/* <!-- .contact-footer end --> */}
        </section>
    );
  }
}
