import React, { Component } from 'react';
// import { Navbar, Nav, Button, Container } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import videoBanner from '../../../assets/videos/banner-croped.mp4';
import freelancerBanner from '../../../assets/images/banner/signup/freelancer-banner.png';
import customerBanner from '../../../assets/images/banner/signup/customer-banner.png';
import './banner.css';

class Banner extends Component {

    switchBannerImage = (screen) => {
        switch(screen) {
            case 'freelancer-signup':
                return freelancerBanner;
            case 'customer-signup':
                return customerBanner;
            default:
                return customerBanner;
        }
    }

    render() {
        const { fromScreen } = this.props;
        return (
            <section className="wrapper-banner">
                
                { 
                    fromScreen === 'home' 
                    ?
                        <React.Fragment>
                            <div className="layer"></div>
                            <video className="background-video" loop autoPlay muted>
                                <source src={videoBanner} type="video/mp4" />
                            </video>
                        </React.Fragment>
                    :
                    <div className="background-picture" style={{backgroundImage: `url(${this.switchBannerImage(fromScreen)})`}}></div>
                }
                
                <div className="text-wrapper">
                    <span className="main-text-video">Streamlined Media Creation</span>
                    <br/>
                    <span className="sub-text-video">
                        From production to delivery, we’ve got you covered
                    </span>
                </div>
            </section>
        )
    }
}

export default Banner;