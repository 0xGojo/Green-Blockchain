import React, { PureComponent } from 'react';
import { withNamespaces } from 'react-i18next';
import { Row, Col, Container } from 'react-bootstrap';
import StarsIcon from '../../../../assets/images/icons/Stars.svg';
import 'antd/dist/antd.css';
import './customerReviews.css';
import { Carousel } from 'antd';

class CustomerReviews extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <React.Fragment>
                <section className="customer-reviews-wrapper">
                    <Container>
                        <h1 className="text-center">Customer Reviews</h1>
                        <div className="text-center customer-reviews-desc mgb-30">
                            Discover latest reviews from our customers
                        </div>
                        <div className="text-center customer-reviews-stars mgb-10">
                            <img src={StarsIcon} alt="" />
                        </div>
                        <Carousel autoplay className="section-show-on-mobile mgt-20">
                            <div className="slide-item">
                                <div className="mg-5 customer-name-rounded mgb-5">
                                    GS
                                </div>
                                <div className="customer-reviews-name mgb-10">
                                    Gary Santio
                                </div>
                                <div className="customer-reviews-comment">
                                    I have been working with Vidops for over three years and the quality of their work speaks for itself. They have created over half a dozen spectacular videos for us that can be viewed via our youtube channel. I highly recommend getting in contact with their team to see what you can do.
                                </div>
                            </div>
                            <div className="slide-item">
                                <div className="mg-5 customer-name-rounded mgb-5">
                                    PBC
                                </div>
                                <div className="customer-reviews-name mgb-10">
                                    Portobello Business Center 
                                </div>
                                <div className="customer-reviews-comment">
                                    Vidops has an amazing team that is full of energy and new ideas that can really help your business become more visible to potential clients. They are fast and easy to work with and we would be happy to collaborate with them again.
                                </div>
                            </div>
                            <div className="slide-item">
                                <div className="mg-5 customer-name-rounded mgb-5">
                                    AM
                                </div>
                                <div className="customer-reviews-name mgb-10">
                                    Ashleigh Muir
                                </div>
                                <div className="customer-reviews-comment">
                                    Vidops was very professional but laid back. They were happy to listen to what we wanted, and we got some fantastic shots. Would definitely recommend to anyone.
                                </div>
                            </div>
                        </Carousel>
                        <Row className="customer-reviews-flex mgt-20 btn-show-on-desktop">
                            <Col className="customer-reviews-flex-item text-center mgb-20" sm={4} md={4} xs={12} lg={4}>
                                <div className="mg-5 customer-name-rounded mgb-5">
                                    GS
                                </div>
                                <div className="customer-reviews-name mgb-10">
                                    Gary Santio
                                </div>
                                <div className="customer-reviews-comment">
                                    I have been working with Vidops for over three years and the quality of their work speaks for itself. They have created over half a dozen spectacular videos for us that can be viewed via our youtube channel. I highly recommend getting in contact with their team to see what you can do.
                                </div>
                            </Col>
                            <Col className="customer-reviews-flex-item text-center mgb-20" sm={4} md={4} xs={12} lg={4}>
                                <div className="mg-5 customer-name-rounded mgb-5">
                                    PBC
                                </div>
                                <div className="customer-reviews-name mgb-10">
                                    Portobello Business Center 
                                </div>
                                <div className="customer-reviews-comment">
                                    Vidops has an amazing team that is full of energy and new ideas that can really help your business become more visible to potential clients. They are fast and easy to work with and we would be happy to collaborate with them again.
                                </div>
                            </Col>
                            <Col className="customer-reviews-flex-item text-center mgb-20" sm={4} md={4} xs={12} lg={4}>
                                <div className="mg-5 customer-name-rounded mgb-5">
                                    AM
                                </div>
                                <div className="customer-reviews-name mgb-10">
                                    Ashleigh Muir
                                </div>
                                <div className="customer-reviews-comment">
                                    Vidops was very professional but laid back. They were happy to listen to what we wanted, and we got some fantastic shots. Would definitely recommend to anyone.
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        )
    }
}

export default withNamespaces('common')(CustomerReviews);