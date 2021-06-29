import {connect} from 'react-redux';
import {logout} from './../../reduxstore/actions/authActions';
import WithAdminAuth from '../../layouts/WithAdminAuth';

const ManageGallery = (props) => {

    return (
        <WithAdminAuth>
            {props.isAuthenticated && <div>
                <h2>Manage Gallery</h2>
                
            </div>}
        </WithAdminAuth>
    )
}

const mapStateToProps = state => ({user: state.auth.user, isAuthenticated: state.auth.isAuthenticated});

export default connect(mapStateToProps, {logout})(ManageGallery);
