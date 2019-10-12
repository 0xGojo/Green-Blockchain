import React, { Component } from 'react';
import { withNamespaces } from 'react-i18next';
// import { Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import ClientWrapper from '../../layouts/main/client/clientWrapper';
import TrustedComponent from './trusted/trusted';
import HowItWorkComponent from './howItWork/howItWork';
import CustomerStoriesComponent from './customerStories/customerStories';
import CustomerReviewsComponent from './customerReviews/customerReviews';
import Banner from '../../layouts/banner/banner';
import './homeScreen.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowToast: false,
            toastMessage: '',
            toastTitle: '',
            title: 'Welcome to VidOps'
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
                    <Banner fromScreen={'home'} />
                    <main role="main" className="page-content">
                        <TrustedComponent />
                        <HowItWorkComponent />
                        <CustomerStoriesComponent />
                        <CustomerReviewsComponent />
                    </main>
                </ClientWrapper>
            </React.Fragment>
        )
    }
}

export default withNamespaces('common')(Home);