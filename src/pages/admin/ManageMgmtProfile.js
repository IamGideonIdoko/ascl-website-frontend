import {useState} from 'react';
import {connect} from 'react-redux';
import WithAdminAuth from '../../layouts/WithAdminAuth';
import AssetView from './../../components/AssetView';

const ManageMgmtProfile = (props) => {

    return (
        <WithAdminAuth>
            {props.isAuthenticated && <div className="ap-main-section">
                <div className="ap-box">
                    <h2>Manage Management Profile</h2>
                </div>
                <div className="ap-box">
                    <AssetView/>
                </div>
                <div className="ap-box">
                    <h3>Create New Profile</h3>
                </div>

                <div className="ap-box">
                    <h3>Update or Delete Profile</h3>
                    <p>Select the profile who want to update or delete.</p>
                </div>

            </div>}
        </WithAdminAuth>
    )
}

const mapStateToProps = state => ({user: state.auth.user, isAuthenticated: state.auth.isAuthenticated});

export default connect(mapStateToProps, null)(ManageMgmtProfile);
