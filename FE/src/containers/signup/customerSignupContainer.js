import { connect } from 'react-redux';
import CustomerSignupScreen from '../../components/screens/signup/customer/customerSignup';


const mapStateToProps = (state) => {
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {};
}

const CustomerSignupContainer = connect(mapStateToProps, mapDispatchToProps)(CustomerSignupScreen);

export default CustomerSignupContainer;
