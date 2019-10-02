import React, { Component } from 'react';
import BackgroundImage from '../assets/images/Atlanta_Cityscape.jpg';
import OffKiWebsiteImage from '../assets/images/OffKiMultipleDevices.png';
import QM3SolutionsWebsiteImage from '../assets/images/QM3SolutionsMultipleDevices.png';

export default class Portfolio extends Component {
    constructor(props) {
        super(props);

        this.onLeftArrowClick = this.onLeftArrowClick.bind(this);
        this.onRightArrowClick = this.onRightArrowClick.bind(this);
        this.onItemListScroll = this.onItemListScroll.bind(this);

        this.itemListRef = React.createRef();

        this.state = {
            list_position: 0,
            item_list_scroll_value: 0
        }
    }

    onItemListScroll(e) {
        this.setState({item_list_scroll_value: e.currentTarget.scrollLeft});
    }

    onLeftArrowClick(e) {
        if(this.itemListRef) {
            this.itemListRef.current.scrollLeft -= this.itemListRef.current.clientWidth;
        }
    }

    onRightArrowClick(e) {
        if(this.itemListRef) {
            // If we're already at the last element, don't continue to scroll.
            if(!((this.itemListRef.current.scrollLeft + this.itemListRef.current.clientWidth) >= this.itemListRef.current.scrollWidth)) {
                this.itemListRef.current.scrollLeft += this.itemListRef.current.clientWidth;
            }
        }
    }

    render() {
        const backgroundStyle = {
            backgroundImage: "url(" + BackgroundImage + ")"
        }

        let dotColors = ["#3263f9", "#bbb"];
        let newItemBuffer = 50;  // This is the amount of pixels BEFROE a full item has left the screen before the dots will update that we're on a new item.

        if(this.itemListRef.current) {
            if((0 <= this.itemListRef.current.scrollLeft) && (this.itemListRef.current.scrollLeft < this.itemListRef.current.clientWidth - newItemBuffer)) {
                dotColors[0] = "#3263f9";
            } else {
                dotColors[0] = "#bbb";
            }
    
            if((this.itemListRef.current.clientWidth - newItemBuffer <= this.itemListRef.current.scrollLeft) && (this.itemListRef.current.scrollLeft < (this.itemListRef.current.clientWidth * 2))) {
                dotColors[1] = "#3263f9";
            } else {
                dotColors[1] = "#bbb";
            }
        }
        
        return (
            <section id="portfolio" style={backgroundStyle} className="portfolio">
                <div className="wrapper button-anchor">
                    <div ref={this.itemListRef} className="item-list" onScroll={this.onItemListScroll}>
                        <div className="item">
                            <div className="item-image">
                                <img src={QM3SolutionsWebsiteImage} alt="Multiple Device Display of the QM3 Solutions Website."></img>
                            </div>
                            <div className="item-description">
                                <div className="description-wrapper">
                                    <a href="https://www.qm3solutions.com"><h1>QM3 Solutions</h1></a>
                                    <p><a href="https://www.qm3solutions.com">QM3 Solutions</a> is a staffing company with integrity.  We'd love to help you find a job or fill one of your open positions!  QM3 Solutions stands on a foundation of integrity as we aim to make a difference and directly impact the lives of the individuals which we serve. We strive to give individuals a new view and a new way to see life through with every placement we facilitate.</p>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="item-image">
                                <img src={OffKiWebsiteImage} alt="Multiple Device Display of the QM3 Solutions Website."></img>
                            </div>
                            <div className="item-description">
                                <div className="description-wrapper">
                                <a href="https://www.offkiproductions.com"><h1>Off Ki Productions</h1></a>
                                    <p><a href="https://www.offkiproductions.com">Off Ki Productions</a> is an Atlanta based audio production team dedicated to enhancing YOUR craft.  Whether you're looking to buy music or a beat for your song, podcast, movie, elevator, photo slideshow...  Whatever!  Off Ki Productions brings positive and professional energy to every project to fit our client's vision.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="dot-wrapper">
                        <span className="dot" style={{backgroundColor: dotColors[0]}}></span>
                        <span className="dot" style={{backgroundColor: dotColors[1]}}></span>
                    </div>

                    <div className="arrow left-arrow" onClick={this.onLeftArrowClick}></div>
                    <div className="arrow right-arrow" onClick={this.onRightArrowClick}></div>
                </div>
            </section>
        );
    }
}
