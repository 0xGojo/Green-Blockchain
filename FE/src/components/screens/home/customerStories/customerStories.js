import React, { PureComponent } from 'react';
import { withNamespaces } from 'react-i18next';
import { Row, Col, Container, Button } from 'react-bootstrap';
import './customerStories.css';

class CustomerStories extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <React.Fragment>
                <section className="stories-wrapper">
                    <Container>
                        <h1 className="text-center">Customer Stories</h1>
                        <div className="text-center stories-desc mgb-30">
                            At VidOps we can manage, execute and deliver your projects – making content creation faster, easier and fun
                        </div>
                        <Row className="stories-flex mgt-20">
                            <Col className="stories-flex-item text-left mgb-25" sm={6} md={3} xs={12} lg={3}>
                                <div className="stories-flex-item-background">
                                    <div className="layer-stories">
                                    </div>
                                    <div className="stories-text-fix-bottom">
                                        <h6>
                                            Story name
                                        </h6>
                                        <div className="stories-sub-title">
                                            Story short descriptions...
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col className="stories-flex-item text-left mgb-25" sm={6} md={3} xs={12} lg={3}>
                                <div className="stories-flex-item-background">
                                    <div className="layer-stories">
                                    </div>
                                    <div className="stories-text-fix-bottom">
                                        <h6>
                                            Story name
                                        </h6>
                                        <div className="stories-sub-title">
                                            Story short descriptions...
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col className="stories-flex-item text-left mgb-25" sm={6} md={3} xs={12} lg={3}>
                                <div className="stories-flex-item-background">
                                    <div className="layer-stories">
                                    </div>
                                    <div className="stories-text-fix-bottom">
                                        <h6>
                                            Story name
                                        </h6>
                                        <div className="stories-sub-title">
                                            Story short descriptions...
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col className="stories-flex-item text-left mgb-25" sm={6} md={3} xs={12} lg={3}>
                                <div className="stories-flex-item-background">
                                    <div className="layer-stories">
                                    </div>
                                    <div className="stories-text-fix-bottom">
                                        <h6>
                                            Story name
                                        </h6>
                                        <div className="stories-sub-title">
                                            Story short descriptions...
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col className="stories-flex-item text-left mgb-25" sm={6} md={3} xs={12} lg={3}>
                                <div className="stories-flex-item-background">
                                    <div className="layer-stories">
                                    </div>
                                    <div className="stories-text-fix-bottom">
                                        <h6>
                                            Story name
                                        </h6>
                                        <div className="stories-sub-title">
                                            Story short descriptions...
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col className="stories-flex-item text-left mgb-25" sm={6} md={3} xs={12} lg={3}>
                                <div className="stories-flex-item-background">
                                    <div className="layer-stories">
                                    </div>
                                    <div className="stories-text-fix-bottom">
                                        <h6>
                                            Story name
                                        </h6>
                                        <div className="stories-sub-title">
                                            Story short descriptions...
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col className="stories-flex-item text-left mgb-25" sm={6} md={3} xs={12} lg={3}>
                                <div className="stories-flex-item-background">
                                    <div className="layer-stories">
                                    </div>
                                    <div className="stories-text-fix-bottom">
                                        <h6>
                                            Story name
                                        </h6>
                                        <div className="stories-sub-title">
                                            Story short descriptions...
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col className="stories-flex-item text-left mgb-25" sm={6} md={3} xs={12} lg={3}>
                                <div className="stories-flex-item-background">
                                    <div className="layer-stories">
                                    </div>
                                    <div className="stories-text-fix-bottom">
                                        <h6>
                                            Story name
                                        </h6>
                                        <div className="stories-sub-title">
                                            Story short descriptions...
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <div className="text-center">
                            <Button size="large" type="primary" className="btn-primary-0">
                                View all stories
                            </Button>
                        </div>
                    </Container>
                </section>
            </React.Fragment>
        )
    }
}

export default withNamespaces('common')(CustomerStories);