import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import FacebookIcon from '../../../assets/images/icons/facebook.svg';
import YoutubeIcon from '../../../assets/images/icons/youtube.svg';
import TwitterIcon from '../../../assets/images/icons/twitter.svg';
import LinkedinIcon from '../../../assets/images/icons/linkedin.svg';
import InstagramIcon from '../../../assets/images/icons/instagram.svg';
import './footer.css';

export default class Footer extends Component {

    handleSubmit = e => {
        
    };

    render() {
        return (
            <footer id="sticky-footer" className="py-4 bg-dark text-white-50">
                <div className="container text-center footer-contact-part">
                    <h1 className="h1-custom-w">Let's stay in touch</h1>
                    <p className="p-custom-1">Join our mailing list</p>
                    <Form layout="inline" onSubmit={this.handleSubmit}>
                        <Form.Item className="mgr-unset">
                            <Input
                                type="text"
                                placeholder="Your email address"
                                size="large"
                            />
                        </Form.Item>
                        <Form.Item className="mgr-unset">
                            <Button size="large" type="primary" className="btn-primary-0">
                                Subscribe
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
                <div className="container">
                    <hr className="border-hr-custom"></hr>
                </div>
                <div className="container footer-service-part">
                    <div className="how-it-works flex-item-footer mgb-20">
                        <h4>How it works</h4>
                        <p>Our Team</p>
                        <p>For Customers</p>
                        <p>For Creatives</p>
                    </div>
                    <div className="customer-stories flex-item-footer mgb-20">
                        <h4>Customer Stories</h4>
                        <p>Customer Stories</p>
                        <p>Case Studies</p>
                    </div>
                    <div className="services flex-item-footer mgb-20">
                        <h4>Services</h4>
                        <p>Promos</p>
                        <p>Events</p>
                        <p>Tutorials</p>
                    </div>
                    <div className="pricing flex-item-footer mgb-20">
                        <h4>Pricing</h4>
                        <p>Video</p>
                        <p>Photo</p>
                        <p>360</p>
                        <p>Aerial</p>
                        <p>Animation</p>
                        <p>VR</p>
                    </div>
                    <div className="careers flex-item-footer mgb-20">
                        <h4>Careers</h4>
                        <p>Become a Creator</p>
                        <p>Join the team</p>
                    </div>
                    <div className="support flex-item-footer mgb-20">
                        <h4>Support</h4>
                        <p>FAQ</p>
                        <p>Contact us</p>
                    </div>
                    <div className="social flex-item-footer mgb-20">
                        <h4>Social</h4>
                        <p>
                            <img src={InstagramIcon} alt="" /> Instagram
                        </p>
                        <p>
                            <img src={FacebookIcon} alt="" /> Facebook
                        </p>
                        <p>
                            <img src={LinkedinIcon} alt="" /> Linkedin
                        </p>
                        <p>
                            <img src={TwitterIcon} alt="" /> Twitter
                        </p>
                        <p>
                            <img src={YoutubeIcon} alt="" /> Youtube
                        </p>
                    </div>
                </div>
                <div className="wrapper-copy-right-part">
                    <div className="container footer-copy-right-part">
                        <div className="copy-right-flex-item-1">
                            Copyright © 2019 VidOps
                        </div>
                        <div className="copy-right-flex-item-3">
                            Privacy Policy
                        </div>
                        <div className="copy-right-flex-item-2">
                            Term & Conditions
                        </div>
                    </div>
                </div>
                
            </footer>
        );
    }
}
