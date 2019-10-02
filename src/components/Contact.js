import React, { Component } from 'react';

// Require Axios for HTTP requests
const axios = require('axios');

var serverLocation = process.env.REACT_APP_SERVER_LOCATION;

export default class Contact extends Component {
    constructor(props) {
        super(props);
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onErrorMessageClick = this.onErrorMessageClick.bind(this);

        this.state = {
            isSubmitButtonClicked: false,
            isServerThinking: false,
            name: {value: "", isValid: false},
            email: {value: "", isValid: false},
            message:{value: "", isValid: false},
            showSuccess: false,
            showFail: false,
            showInvalid: false
        }

    }

    onErrorMessageClick(e) {
        this.setState({showSuccess: false, showFail: false, showInvalid: false});
    }

    handleSubmit(e) {
        // Server begins thinking
        this.setState({showSuccess: false, showFail: false, showInvalid: false, isServerThinking: true});

        // Make sure everything is valid.
        if (
            this.state.name.isValid &&
            this.state.email.isValid &&
            this.state.message.isValid 
        ){
            // Only prevent default if the in puts are valid.
            e.preventDefault();

            axios.post(serverLocation + '/email', {
                name: this.state.name.value,
                email: this.state.email.value,
                message: this.state.message.value
            }).then(function (response) {
                // handle success   
                console.log(response);
    
                // Pop up a success alert
                this.setState({showSuccess: true, isServerThinking: false, name: {value: ""}, email: {value: ""}, message: {value: ""}});
            }.bind(this))
            .catch(function (error) {
                // handle error
                console.log(error);
        
                // Pop up an error alert
                this.setState({showFail: true, isServerThinking: false});
            }.bind(this));
        } else {
            console.log("Invalid Submit!");
            this.setState({showInvalid: true, isServerThinking: false});
        }
    }

    onChange(e) {
        let validity = false;
        switch(e.target.id) {
            case "name":
                if(e.target.value) {
                    validity = true;
                }
                this.setState({name: {value: e.target.value, isValid: validity}});
                break;
            case "email":
                if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)) {
                    validity = true;
                }
                this.setState({email: {value: e.target.value, isValid: validity}});
                break;
            case "message":
                if(e.target.value) {
                    validity = true;
                }
                this.setState({message: {value: e.target.value, isValid: validity}});
                break;
            default:
                break;
        }
    }

    render() {
        let submitButton = <input type="submit" value="Send" className="margin-clear submit-button btn btn-default" onClick={this.handleSubmit}/>
        if(this.state.isServerThinking) {
          submitButton = <button disabled type="submit" className="margin-clear submit-button btn btn-default" onClick={this.handleSubmit}> 
            Send
            <div className="loading">
              <div className="loading-bar"></div>
              <div className="loading-bar"></div>
              <div className="loading-bar"></div>
              <div className="loading-bar"></div>
            </div>
          </button>
        }
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
                                            It would be great to hear from you!  Please, contact me with a description of your project to further this conversation.  I will in turn provide you
                                            with a quote and an estimated time to completion once we have completely established the scope and requirements for the project.
                                            I look forward to hearing from you!  Let's build something great together!
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
                                            <li className="twitter"><a target="_blank" href="https://twitter.com/mqdarkblue"><i className="fab fa-twitter fa-lg" data-fa-transform="down-4"></i></a></li>
                                            <li className="linkedin"><a target="_blank" href="https://www.linkedin.com/in/marcus-quettan-b2b71550"><i className="fab fa-linkedin fa-lg" data-fa-transform="down-4"></i></a></li>
                                            <li className="instagram"><a target="_blank" href="https://www.instagram.com/mqdarkblue/"><i className="fab fa-instagram fa-lg" data-fa-transform="down-4"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="contact-footer-content">
                                        <h2 className="title">Contact Me</h2>
                                        {this.state.showSuccess && 
                                            <div className="alert alert-success" id="MessageSent" onClick={this.onErrorMessageClick}>
                                                Your message was successfully sent!  I'll get back to you at the email address you provided soon.
                                            </div>
                                        }
                                        {this.state.showInvalid && 
                                            <div className="alert alert-danger" id="MessageNotSent" onClick={this.onErrorMessageClick}>
                                                Unfortunately, one of the inputs you provided is invalid.  Please resolve the errors and then submit again!
                                            </div>
                                        }
                                        {this.state.showFail && 
                                            <div className="alert alert-danger" id="MessageNotSent" onClick={this.onErrorMessageClick}>
                                                Oops! Something went wrong on our server, please refresh the page and try again.  If the issue persists, please send me an email directly to mquettan@gmail.com!
                                            </div>
                                        }
                                        <form role="form" id="contact-footer-form" className="margin-clear">
                                            <div className="form-group has-feedback mb-10">
                                                <label className="sr-only" htmlFor="name">Name</label>
                                                <input type="text" className="form-control" id="name" placeholder="Name" name="name" value={this.state.name.value} onChange={this.onChange} required/>
                                                <span><i className="fa fa-user form-control-feedback"></i></span>
                                            </div>
                                            <div className="form-group has-feedback mb-10">
                                                <label className="sr-only" htmlFor="email">Email address</label>
                                                <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" value={this.state.email.value} onChange={this.onChange} required/>
                                                <span><i className="fa fa-envelope form-control-feedback"></i></span>
                                            </div>
                                            <div className="form-group has-feedback mb-10">
                                                <label className="sr-only" htmlFor="message">Message</label>
                                                <textarea className="message_box form-control" rows="4" id="message" placeholder="Message" name="message" value={this.state.message.value} onChange={this.onChange} required></textarea>
                                                <span><i className="fa fa-pencil-alt form-control-feedback"></i></span>
                                            </div>
                                            {submitButton}
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
