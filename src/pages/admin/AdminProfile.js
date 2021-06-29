import {connect} from 'react-redux';
import {logout} from './../../reduxstore/actions/authActions';
import {Fragment} from 'react';
import { useHistory } from 'react-router-dom';

const AdminProfile = (props) => {

    let history = useHistory();

    return (
        <Fragment>
            {!props.isUserLoaded
                ? <div>Loading...</div>
                : !props.isAuthenticated
                    ? <div>
                            <h3>You are NOT logged in.</h3>
                            <br/>
                            <small>
                                <i>Redirecting to login page...</i>
                            </small>
                            <div>{history.push("/login-adm")}</div>

                        </div>
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
