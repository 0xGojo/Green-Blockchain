import React, { Component } from 'react';
import { withNamespaces } from 'react-i18next';
import { Helmet } from 'react-helmet';
import LoginForm from '../../common/form/loginForm/loginForm';
import { Container } from 'react-bootstrap';
import Header from '../../layouts/header/main/headerMain';
import Footer from '../../layouts/footer/footer';
import './loginScreen.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Login - VidOps"
        }
    }

    onAuthHandler = (username, password) => {
        this.props.onAuth(username, password);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.user_info.token) {
            this.props.history.push('/admin/dashboard');
        }
    }

    render() {
        const { t } = this.props;
        return (
            <div className="login-page">
                <Helmet>
                    <title>{this.state.title}</title>
                    <meta name="description" content={this.state.title} />
                </Helmet>
                <Header isTransparent={true} />
                <main role="main" className="page-content">
                    <Container>
                        <LoginForm onAuthHandler={this.onAuthHandler}/>
                    </Container>
                </main>
                <Footer />
            </div>

            
        )
    }
}

export default withNamespaces('common')(Login);