import React, { Component } from 'react';
import { withNamespaces } from 'react-i18next';
import { Row, Col, Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import ClientWrapper from '../../../layouts/main/client/clientWrapper';
import Banner from '../../../layouts/banner/banner';
import FreelancerSignupForm from '../../../common/form/signupForm/freelancerSignupForm/freelancerSignupForm';
import './freelancerSignup.css';

class FreelancerSignup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowToast: false,
            toastMessage: '',
            toastTitle: '',
            title: 'Freelancer Signup - VidOps'
        }
    }

    render() {
        return (
            <React.Fragment>
                <ClientWrapper>
                    <Helmet>
                        <title>{this.state.title}</title>
                        <meta name="description" content={this.state.title} />
                    </Helmet>
                    <Banner fromScreen={'freelancer-signup'} />
                    <main role="main" className="page-content">
                        <section className="freelancer-signup-wrapper">
                            <Container>
                                <FreelancerSignupForm />
                            </Container>
                        </section>
                    </main>
                </ClientWrapper>
            </React.Fragment>
        )
    }
}

export default withNamespaces('common')(FreelancerSignup);