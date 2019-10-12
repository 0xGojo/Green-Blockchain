import React, { Component } from 'react';
import { withNamespaces } from 'react-i18next';
import { Helmet } from 'react-helmet';
import AdminWrapper from '../../../layouts/main/admin/adminWrapper';
import './dashboardScreen.css';
import UploadForm from '../../../common/form/uploadForm/uploadForm';

class AdminDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Admin Dashboard - VidOps'
        }
    }

    updateBannerHandler = (updateData) => {
        this.props.onUpdateBanner(updateData);
    }

    componentDidMount() {
        this.props.onGetBanner();
    }

    render() {
        const { error, isLoading, data, success } = this.props;
        return (
            <React.Fragment>
                <AdminWrapper>
                    <Helmet>
                        <title>{this.state.title}</title>
                        <meta name="description" content={this.state.title} />
                    </Helmet>
                    <main role="main" className="page-content">
                        <UploadForm 
                            onUpdateBanner={this.updateBannerHandler}
                            data={data}
                            error={error}
                            isLoading={isLoading}
                            success={success}
                        />
                    </main>
                </AdminWrapper>
            </React.Fragment>
        )
    }
}

export default withNamespaces('common')(AdminDashboard);