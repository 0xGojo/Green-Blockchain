import React from 'react';

import { withNamespaces } from 'react-i18next';

/* Components */
import AppRoute from './routes';
// import Footer from '../components/layouts/footer/footer';
// import Header from '../components/layouts/header/main/headerMain';
// import Banner from '../components/layouts/banner/banner';

// import { Container } from 'react-bootstrap';

/* Styles */
import '../assets/stylesheets/app.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Welcome"
        }
    }
    render() {
        return (
            <div className="main-wrapper">
                <AppRoute />
            </div>
        );
    }
}

export default withNamespaces('common')(App); 