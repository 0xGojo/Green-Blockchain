import React, { PureComponent } from 'react';
import { withNamespaces } from 'react-i18next';
import { Row, Col, Container, Button } from 'react-bootstrap';
import BookingIcon from '../../../../assets/images/icons/howitwork/Booking.svg';
import DeliveryIcon from '../../../../assets/images/icons/howitwork/Delivery.svg';
import ProductionIcon from '../../../../assets/images/icons/howitwork/Production.svg';
import './howItWork.css';

class HowItWork extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <React.Fragment>
                <section className="how-it-work-wrapper">
                    <Container>
                        <h1 className="text-center mgb-30">How It Works</h1>
                        <Row className="how-it-work-flex">
                            <Col className="how-it-work-flex-item text-center mgb-20" sm={4} md={4} xs={12} lg={4}>
                                <img alt="" src={BookingIcon} className="mgb-5" />
                                <h3>
                                    Booking
                                </h3>
                                <div className="how-it-work-sub-title mgb-5">
                                    VidOps is here to help you book creatives
                                </div>
                                <div>
                                    Follow our curated booking process and let us know about the service your require –  we’ll take care of the rest!
                                </div>
                            </Col>
                            <Col className="how-it-work-flex-item text-center mgb-20" sm={4} md={4} xs={12} lg={4}>
                                <img alt="" src={ProductionIcon} className="mgb-5" />
                                <h3>
                                    Production
                                </h3>
                                <div className="how-it-work-sub-title mgb-5">
                                    Your Creative talent will meet you onsite
                                </div>
                                <div>
                                    Your creative talent will know exactly what to bring and where to be.
                                </div>
                            </Col>
                            <Col className="how-it-work-flex-item text-center mgb-20" sm={4} md={4} xs={12} lg={4}>
                                <img alt="" src={DeliveryIcon} className="mgb-5" />
                                <h3>
                                    Delivery
                                </h3>
                                <div className="how-it-work-sub-title mgb-5">
                                    Receive your completed project in 24 hrs
                                </div>
                                <div>
                                    With our team of international editors, your project will be executed and delivered promptly.
                                </div>
                            </Col>
                        </Row>
                        <div className="text-center">
                            <Button size="large" type="primary" className="btn-primary-0">
                                Learn more
                            </Button>
                        </div>
                    </Container>
                </section>
            </React.Fragment>
        )
    }
}

export default withNamespaces('common')(HowItWork);