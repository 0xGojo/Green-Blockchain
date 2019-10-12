import { connect } from 'react-redux';
import LoginScreen from '../../components/screens/login/loginScreen';
import { login } from '../../redux/actions/auth/loginAction';


const mapStateToProps = (state) => {
    return {
        isLoading: state.login.loading,
        error: state.login.error,
        user_info: state.login.user_info,
        success: state.login.success
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAuth: (username, password) => {
            dispatch(login(username, password))
        }
    };
}

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

export default LoginContainer;
