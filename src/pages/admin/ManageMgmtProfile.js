import {useState} from 'react';
import {connect} from 'react-redux';
import WithAdminAuth from '../../layouts/WithAdminAuth';
import AssetView from './../../components/AssetView';
import '../../styles/AdminManageProfile.css';

const ManageMgmtProfile = (props) => {

    const [profileInputs,
        setProfileInputs] = useState({position: '', fullname: '', profileimg: ''})

    const handleInputChange = () => {
        console.log('change');
    }

    return (
        <WithAdminAuth>
            {props.isAuthenticated && <div className="ap-main-section">
                <div className="ap-box">
                    <h2>Manage Management Profile</h2>
                </div>
                <div className="ap-box">
                    <AssetView/>
                </div>
                <div className="ap-box createprofile-box">
                    <h3>Create New Profile</h3>
                    <div>
                        <div className="">
                            <label htmlFor="position">Position</label>
                            <input type="text" name="position" id="position" onChange={handleInputChange}/>
                        </div>
                        <div className="">
                            <label htmlFor="fullname">Full Name</label>
                            <input
                                type="text"
                                name="fullname"
                                id="fullname"
                                onChange={handleInputChange}/>
                        </div>
                    </div>
                    <div>
                        <div className="">
                            <label htmlFor="profileimg">Profile Image&nbsp;<small>(Link)</small>
                            </label>
                            <input
                                type="text"
                                name="profileimg"
                                id="profileimg"
                                onChange={handleInputChange}/>
                        </div>

                        <div className="">
                            <label htmlFor="profileabout">About</label>
                            <textarea name="profileabout"></textarea>
                        </div>
                    </div>

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
