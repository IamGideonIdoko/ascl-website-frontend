import {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import WithAdminAuth from '../../layouts/WithAdminAuth';
import AssetView from './../../components/AssetView';
import '../../styles/AdminManageProfile.css';
import Select from 'react-select';
import moment from 'moment';
import Swal from 'sweetalert2';
import {strToSlug} from '../../helper';
import {addMgmtProfile, resetMgmtProfileCreated} from '../../reduxstore/actions/mgmtProfileActions';

const ManageMgmtProfile = (props) => {

    const [profileInputs,
        setProfileInputs] = useState({position: '', fullname: '', profileimg: '', about: '', level: 0})
    const [selectedProfile, setSelectedProfile] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const [shouldEditProfile, setShouldEditProfile] = useState(false);
    const [isCreating, setIsCreating] = useState(false);
    
    const handleInputChange = e => {
        const {name, value} = e.target;

        setProfileInputs(prev => ({
            ...prev,
            [name]: value
        }));
    }

    const handleProfileSelectInputChange = option => {
        setSelectedProfile(option
            ? option
            : null);
    }

    const handleProfileEdit = e => {
        if (!selectedProfile) {
            // no gallery is selected
            Swal.fire({title: "No profile selected.", text: `Please select a profile.`, icon: "error"});
        } else {
            // gallery is selected
            const fullSelectedProfile = props
                .mgmtProfiles
                .filter(x => x._id === selectedProfile.value)[0];
            console.log(fullSelectedProfile);
        }
    }

    const handleProfileDelete = () => {
        // setIsDeleting(true);
        if (!selectedProfile) {
            // no page is selected
            setIsDeleting(false);
            Swal.fire({title: "No profile selected.", text: `Please select a profile.`, icon: "error"});
        } else {
            // page is selected
            Swal
                .fire({title: 'Do you want to delete?', showDenyButton: true, showCancelButton: true, confirmButtonText: `Delete`, denyButtonText: `Don't delete`})
                .then((result) => {
                    if (result.isConfirmed) {
                        // props.deleteProfile(selectedProfile.value);
                    } else if (result.isDenied) {
                        setIsDeleting(false);
                        setSelectedProfile(null);
                        Swal.fire('Profile Not Deleted', '', 'info')
                    }
                })
        }
    }

    useEffect(() => {
        if (props.isProfileCreated) {
            Swal
            .fire({title: "", text: `Profile successfully created.`, icon: "success"})
            .then(res => {
                setProfileInputs({
                    position: '',
                    fullname: '',
                    profileimg: '',
                    about: '',
                    level: 0
                })
                setIsCreating(false);
            });
        props.resetMgmtProfileCreated();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.isProfileCreated])


    const handleCreateProfileBtn = () => {
        setIsCreating(true);
        const {position, fullname, profileimg, about, level} = profileInputs;
        if (!position || !fullname || !profileimg || !about || !level) {
            setIsCreating(false);
            Swal.fire({title: "", text: `All fields are required.`, icon: "error"});
        } else {
            Swal
                .fire({title: 'Do you want to create?', showDenyButton: true, showCancelButton: true, confirmButtonText: `Create`, denyButtonText: `Don't Create`})
                .then((result) => {
                    if (result.isConfirmed) {
                        const newProfile = {
                            position,
                            name: fullname,
                            slug: strToSlug(position),
                            photo: profileimg,
                            about,
                            position_level: level
                        };
                        props.addMgmtProfile(newProfile);
                    } else if (result.isDenied) {
                        setIsCreating(false);
                        setProfileInputs(prev => ({
                            ...prev,
                            position: '',
                            fullname: '',
                            profileimg: '',
                            about: ''
                        }))
                        Swal.fire('Profile not created', '', 'info')
                    } else {
                        setIsCreating(false);
                    }
                })
        }
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
                            <input type="text" name="position" id="position" value={profileInputs.position} onChange={handleInputChange}/>
                        </div>
                        <div className="">
                            <label htmlFor="fullname">Full Name</label>
                            <input type="text" name="fullname" id="fullname" value={profileInputs.fullname} onChange={handleInputChange}/>
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
                                value={profileInputs.profileimg}
                                onChange={handleInputChange}/>
                        </div>

                        <div>
                            <label>Profile Level</label>
                            <input type="number" name="level" id="level" onChange={handleInputChange} value={profileInputs.level} />
                        </div>

                        <div className="">
                            <label htmlFor="profileabout">About</label>
                            <textarea name="about" id="about" value={profileInputs.about} onChange={handleInputChange}></textarea>
                        </div>
                        <div>
                            <button className="page-edit-btn page-btn" disabled={isCreating}  onClick={handleCreateProfileBtn}>{isCreating ? 'Creating...' : 'Create'}</button>
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

const mapStateToProps = state => ({user: state.auth.user, isAuthenticated: state.auth.isAuthenticated, mgmtProfiles: state.mgmtProfile.mgmtProfiles, isLoaded: state.mgmtProfile.isLoaded, isProfileCreated: state.mgmtProfile. isMgmtProfileCreated, isProfileUpdated: state.mgmtProfile.isMgmtProfileCreated, isProfileDeleted: state.mgmtProfile.isMgmtProfileDeleted});

export default connect(mapStateToProps, {addMgmtProfile, resetMgmtProfileCreated})(ManageMgmtProfile);
