import React from 'react';

import { withNamespaces } from 'react-i18next';

/* Components */
import Header from '../../../../components/layouts/header/admin/headerAdmin';
import Sidebar from '../../../../components/layouts/sidebar/sidebar';


// import { Container } from 'react-bootstrap';

/* Styles */
import './adminWrapper.css';

class AdminWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className="d-flex" id="admin-wrapper">
                <Sidebar />
                <div id="page-content-wrapper">
                    <Header />
                    <div className="container-fluid">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default withNamespaces('common')(AdminWrapper);