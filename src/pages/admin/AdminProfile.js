import {connect} from 'react-redux';
import {logout} from './../../reduxstore/actions/authActions';
import {Fragment} from 'react';

const AdminProfile = (props) => {

    return (
        <Fragment>
            {!props.isUserLoaded
                ? <div>Loading...</div>
                : !props.isAuthenticated
                    ? <div>You are not logged in</div>
                    : <div>
                        <h1>This is the admin profile.</h1>
                        <button
                            style={{
                            borderRadius: "0.4rem",
                            background: "green",
                            color: 'white',
                            padding: "1rem"
                        }}
                            onClick={() => props.logout()}>Logout</button>
                    </div>}
        </Fragment>
    )
}

const mapStateToProps = state => ({isAuthenticated: state.auth.isAuthenticated, isUserLoaded: state.auth.isUserLoaded});

export default connect(mapStateToProps, {logout})(AdminProfile);
