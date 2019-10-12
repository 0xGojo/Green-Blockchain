import { connect } from 'react-redux';
import DashboardScreen from '../../../components/screens/admin/dashboard/dashboardScreen';
import { updateBanner, getBanner } from '../../../redux/actions/admin/bannerAction';

const mapStateToProps = (state) => {
    return {
        success : state.banner.success,
        error : state.banner.error,
        isLoading : state.banner.isLoading,
        data: state.banner.data
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onUpdateBanner: (updateData) => {
            dispatch(updateBanner(updateData))
        },
        onGetBanner: () => {
            dispatch(getBanner())
        },
    };
}

const DashboardContainer = connect(mapStateToProps, mapDispatchToProps)(DashboardScreen);

export default DashboardContainer;
