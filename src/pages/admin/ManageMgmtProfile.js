import {useState} from 'react';
import {connect} from 'react-redux';
import WithAdminAuth from '../../layouts/WithAdminAuth';
import AssetView from './../../components/AssetView';
import '../../styles/AdminManageProfile.css';
import Select from 'react-select';
import moment from 'moment';

const ManageMgmtProfile = (props) => {

    const [profileInputs,
        setProfileInputs] = useState({position: '', fullname: '', profileimg: ''})
    const [selectedProfile, setSelectedProfile] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    
    const handleInputChange = () => {
        console.log('change');
    }

    const handleProfileSelectInputChange = option => {
        setSelectedProfile(option
            ? option
            : null);
    }

    const handleProfileDelete = () => {

    }

    const handleProfileEdit = () => {
        
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
                            <input type="text" name="fullname" id="fullname" onChange={handleInputChange}/>
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
                        <div>
                            <button className="page-edit-btn page-btn">Create</button>
                        </div>
                    </div>

                </div>

                <div className="ap-box">
                    <h3>Edit or Delete Profile</h3>
                    <p>Select the profile who want to edit or delete.</p>
                    {props.isLoaded && <div className="edit-page-container">
                        <div className="page-select-wrapper">
                            <Select
                                className="asset-form-select"
                                defaultValue={selectedProfile}
                                value={selectedProfile}
                                options={props
                                .mgmtProfiles
                                .map(({_id, position, name, created_at}) => ({
                                    value: _id,
                                    label: `${position} [${name}] (${moment(created_at).format('MMM DD, YYYY')})`
                                }))}
                                onChange={handleProfileSelectInputChange}
                                isClearable={true}
                                isSearchable={true}
                                placeholder={`Select a profile...`}
                                styles={{
                                menu: (provided, state) => ({backgroundColor: "var(--primary-color-light)", border: "1px solid var(--primary-color"}),
                                option: (styles, {isSelected}) => {
                                    return {
                                        ...styles,
                                        backgroundColor: isSelected
                                            ? 'var(--secondary-color) !important'
                                            : null
                                    }
                                }
                            }}/>
                        </div>
                        <div className="edit-page-action-btns">
                            <button className="page-edit-btn page-btn" onClick={handleProfileEdit}>Edit</button>
                            <button
                                className="page-delete-btn page-btn"
                                disabled={isDeleting}
                                onClick={handleProfileDelete}>{isDeleting
                                    ? 'Deleting...'
                                    : 'Delete'}</button>
                        </div>
                        {/* <div className="edit-page-action-btns">
                            <button
                                className="page-delete-btn page-btn"
                                disabled={isDeleting}
                                onClick={handleProfileDelete}>{isDeleting
                                    ? 'Deleting...'
                                    : 'Delete'}</button>
                        </div> */}
                    </div>
}
                </div>

            </div>}
        </WithAdminAuth>
    )
}

const mapStateToProps = state => ({user: state.auth.user, isAuthenticated: state.auth.isAuthenticated, mgmtProfiles: state.mgmtProfile.mgmtProfiles, isLoaded: state.mgmtProfile.isLoaded});

export default connect(mapStateToProps, null)(ManageMgmtProfile);
