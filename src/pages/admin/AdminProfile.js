import {connect} from 'react-redux';
import {logout} from './../../reduxstore/actions/authActions';
import WithAdminAuth from '../../layouts/WithAdminAuth';

const AdminProfile = (props) => {
    return (
        <WithAdminAuth>
            {props.isAuthenticated && <div>
                <h2>Welcome @{props.user.username && props.user.username}!</h2>
                <p>Welcome to the administrative portal.</p>
                <p>You are an admin of Ajaokuta Steel Company Ltd Website. You have access to manage its contents. Use the links provided in the sidebar to administer your account and this portal</p>
                <button
                    style={{
                    borderRadius: "0.4rem",
                    background: "var(--primary-color)",
                    color: 'white',
                    padding: "1rem"
                }}
                    onClick={() => props.logout()}>Logout</button>
            </div>}
        </WithAdminAuth>
    )
}

const mapStateToProps = state => ({user: state.auth.user, isAuthenticated: state.auth.isAuthenticated});

export default connect(mapStateToProps, {logout})(AdminProfile);
