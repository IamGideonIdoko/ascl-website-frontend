import {connect} from 'react-redux';
import {logout} from './../../reduxstore/actions/authActions';
import WithAdminAuth from '../../layouts/WithAdminAuth';

const ManageAccess = (props) => {

    return (
        <WithAdminAuth>
            {props.isAuthenticated && <div>
                <h2>Manage Access</h2>

            </div>}
        </WithAdminAuth>
    )
}

const mapStateToProps = state => ({user: state.auth.user, isAuthenticated: state.auth.isAuthenticated});

export default connect(mapStateToProps, {logout})(ManageAccess);
