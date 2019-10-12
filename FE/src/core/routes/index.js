import React from 'react';
import { withRouter, Route, Switch, Redirect } from 'react-router';

/* Screens */
import Home from '../../containers/home/homeContainer';
import FreelancerSignup from '../../containers/signup/freelancerSignupContainer';
import CustomerSignup from '../../containers/signup/customerSignupContainer';
import Login from '../../containers/login/loginContainer';

// admin
import Dashboard from '../../containers/admin/dashboard/dashboard';

// routes
import PrivateRoute from './privateRoute';
import PublicRoute from './publicRoute';

// storage service
import { storageService } from '../services/storageService';

class AppRoute extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            role: 'admin',
        }
    }

    checkPermissionRoute() {
        if ( !storageService.getCurrentUser() ) {
            return {
                isAuthenticated: false,
                pathName: '/login'
            }
        } else {
            if ( storageService.getCurrentUser().role === this.state.role) {
                return {
                    isAuthenticated: true,
                    pathName: '/admin/dashboard'
                }
            } else {
                return {
                    isAuthenticated: true,
                    pathName: '/'
                }
            }
        }
    }

    render() {
        const checkPermission = this.checkPermissionRoute();
        return (
            <Switch>
                <Route exact path='/' component={ Home } />
                <Route exact path='/freelancer-signup' component={ FreelancerSignup } />
                <Route exact path='/customer-signup' component={ CustomerSignup } />
                <PrivateRoute exact path='/admin/dashboard' component={ Dashboard } 
                    auth={ checkPermission }
                />
                <PublicRoute exact path='/login' component={ Login }
                    auth={ checkPermission }
                />
                <Redirect to="/404" />
            </Switch>
        )
    }
}

export default withRouter(AppRoute);
