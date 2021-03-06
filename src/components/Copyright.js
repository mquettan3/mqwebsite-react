import React, { Component } from 'react';

export default class Copyright extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentYear: "2019"
        }
    }

    componentDidMount() {
        const date = new Date();
        this.setState({currentYear: date.getFullYear()});
    }

    render() {
        return (
            <section id="copyright" className="copyright_section">
                <div className="wrapper">
                    <p>Copyright <i className="far fa-copyright"></i> {this.state.currentYear} Marcus Quettan</p>
                </div>
            </section>
        );
    }
}
