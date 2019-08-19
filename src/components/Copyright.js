import React, { Component } from 'react';

export default class Copyright extends Component {
    constructor(props) {
        super(props);

        const date = new Date();
        const currentYear = date.getFullYear();
    }
  render() {
    return (
        <section id="copyright" className="copyright_section">
            <div className="container-fluid">
                <div className="row">
                <div className="col-lg-12">
                    <p>
                    Copyright <i className="fa fa-copyright"></i> {this.currentYear} Marcus Quettan
                    </p>
                </div>
                </div>
            </div>
        </section>
    );
  }
}
