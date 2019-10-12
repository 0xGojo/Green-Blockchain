import React, { PureComponent } from 'react';
import { withNamespaces } from 'react-i18next';
import { Row, Col, Container } from 'react-bootstrap';
import afmLogo from '../../../../assets/images/logo/trusted/png/afm.png';
import dataspaceLogo from '../../../../assets/images/logo/trusted/png/dataspace.png';
import findExchangeLogo from '../../../../assets/images/logo/trusted/png/find-exchange.png';
import harriLogo from '../../../../assets/images/logo/trusted/png/harri.png';
import hibobLogo from '../../../../assets/images/logo/trusted/png/hi-bob.png';
import holidayInnLogo from '../../../../assets/images/logo/trusted/png/holiday-inn.png';
import hsbcLogo from '../../../../assets/images/logo/trusted/png/hsbc.png';
import hsbAsiaLogo from '../../../../assets/images/logo/trusted/png/hsp-asia.png';
import mitchellsLogo from '../../../../assets/images/logo/trusted/png/mitchells-and-butlers.png';
import rotaLogo from '../../../../assets/images/logo/trusted/png/rota.png';
import steelcaseLogo from '../../../../assets/images/logo/trusted/png/steelcase.png';
import techdayLogo from '../../../../assets/images/logo/trusted/png/techday-icon.png';
import './trusted.css';

class Trusted extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <React.Fragment>
                <section className="trusted-by-wrapper">
                    <Container>
                        <h1 className="text-center mgb-30">Trusted by</h1>
                        <Row className="trusted-by-flex">
                            <Col className="trusted-by-flex-item text-center mgb-10" sm={2} md={2} xs={3} lg={1}>
                                <img alt="" src={afmLogo} />
                            </Col>
                            <Col className="trusted-by-flex-item text-center mgb-10" sm={2} md={2} xs={3} lg={1}>
                                <img alt="" src={dataspaceLogo} />
                            </Col>
                            <Col className="trusted-by-flex-item text-center mgb-10" sm={2} md={2} xs={3} lg={1}>
                                <img alt="" src={findExchangeLogo} />
                            </Col>
                            <Col className="trusted-by-flex-item text-center mgb-10" sm={2} md={2} xs={3} lg={1}>
                                <img alt="" src={harriLogo} />
                            </Col>
                            <Col className="trusted-by-flex-item text-center mgb-10" sm={2} md={2} xs={3} lg={1}>
                                <img alt="" src={hibobLogo} />
                            </Col>
                            <Col className="trusted-by-flex-item text-center mgb-10" sm={2} md={2} xs={3} lg={1}>
                                <img alt="" src={holidayInnLogo} />
                            </Col>
                            <Col className="trusted-by-flex-item text-center mgb-10" sm={2} md={2} xs={3} lg={1}>
                                <img alt="" src={hsbcLogo} />
                            </Col>
                            <Col className="trusted-by-flex-item text-center mgb-10" sm={2} md={2} xs={3} lg={1}>
                                <img alt="" src={hsbAsiaLogo} />
                            </Col>
                            <Col className="trusted-by-flex-item text-center mgb-10" sm={2} md={2} xs={3} lg={1}>
                                <img alt="" src={mitchellsLogo} />
                            </Col>
                            <Col className="trusted-by-flex-item text-center mgb-10" sm={2} md={2} xs={3} lg={1}>
                                <img alt="" src={rotaLogo} />
                            </Col>
                            <Col className="trusted-by-flex-item text-center mgb-10" sm={2} md={2} xs={3} lg={1}>
                                <img alt="" src={steelcaseLogo} />
                            </Col>
                            <Col className="trusted-by-flex-item text-center mgb-10" sm={2} md={2} xs={3} lg={1}>
                                <img alt="" src={techdayLogo} />
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        )
    }
}

export default withNamespaces('common')(Trusted);