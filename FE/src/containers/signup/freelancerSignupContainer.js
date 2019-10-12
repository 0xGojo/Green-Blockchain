import { connect } from 'react-redux';
import FreelancerSignupScreen from '../../components/screens/signup/freelancer/freelancerSignup';


const mapStateToProps = (state) => {
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {};
}

const FreelancerSignupContainer = connect(mapStateToProps, mapDispatchToProps)(FreelancerSignupScreen);

export default FreelancerSignupContainer;
