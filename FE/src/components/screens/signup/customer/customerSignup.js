import React, { Component } from 'react';
import { withNamespaces } from 'react-i18next';
import { Row, Col, Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import ClientWrapper from '../../../layouts/main/client/clientWrapper';
import Banner from '../../../layouts/banner/banner';
import CustomerSignupForm from '../../../common/form/signupForm/customerSignupForm/customerSignupForm';
import './customerSignup.css';

class CustomerSignup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowToast: false,
            toastMessage: '',
            toastTitle: '',
            title: 'Customer Signup - VidOps'
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
                    <Banner fromScreen={'customer-signup'} />
                    <main role="main" className="page-content">
                        <section className="customer-signup-wrapper">
                            <Container>
                                <CustomerSignupForm />
                            </Container>
                        </section>
                    </main>
                </ClientWrapper>
            </React.Fragment>
        )
    }
}

export default withNamespaces('common')(CustomerSignup);