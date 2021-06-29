import {connect} from 'react-redux';
import {logout} from './../../reduxstore/actions/authActions';
import WithAdminAuth from '../../layouts/WithAdminAuth';

const ManageFileUpload = (props) => {

    return (
        <WithAdminAuth>
            {props.isAuthenticated && <div>
                <h2>Manage File Upload</h2>
                
            </div>}
        </WithAdminAuth>
    )
}

const mapStateToProps = state => ({user: state.auth.user, isAuthenticated: state.auth.isAuthenticated});

export default connect(mapStateToProps, {logout})(ManageFileUpload);
