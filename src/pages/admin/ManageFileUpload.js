import {connect} from 'react-redux';
import {logout} from './../../reduxstore/actions/authActions';
import WithAdminAuth from '../../layouts/WithAdminAuth';
import '../../styles/AdminPortalGlobal.css';

const ManageFileUpload = (props) => {
    console.log("From manage file upload");
    /* console.log("Firebase core", window.firebase);
    console.log("Firebase storage", window.firebase.storage()); */

    return (
        <WithAdminAuth>
            {props.isAuthenticated && <div className="ap-main-section">
                <div className="ap-main-section-header ap-box">
                    <h2>Manage File Upload</h2>
                </div>

                <div className="ap-box">
                    <h3>Upload Photos</h3>
                    <p>Click on the upload button below to upload a new photo.</p>
                    <div className="file-input-container">
                        <label htmlFor="photo-upload-input" className="photo-upload-select"><i className="neu-attachment"></i> Select Photo</label>
                        <input type="file" name="photo-upload-input" id="photo-upload-input" />
                        <button className="document-upload-btn"><i className="neu-upload"></i> Upload Photo</button>
                    </div>

                </div>

                <div className="ap-box">
                    <h3>Upload Documents</h3>
                    <p>Click the upload button below to upload a new document.</p>
                    <div className="file-input-container">
                        <label htmlFor="document-upload-input" className="document-upload-select"><span><i className="neu-attachment"></i> Select Document</span></label>
                        <input type="file" name="document-upload-input" id="document-upload-input" />
                        <button className="document-upload-btn"><i className="neu-upload"></i> Upload Document</button>
                    </div>
                </div>

                <div className="ap-box">
                    <h3>View Photos</h3>
                </div>

                <div className="ap-box">
                    <h3>Delete Photos</h3>
                </div>
                <div className="ap-box">
                    <h3>Delete Documents</h3>
                </div>
                
            </div>}
        </WithAdminAuth>
    )
}

const mapStateToProps = state => ({user: state.auth.user, isAuthenticated: state.auth.isAuthenticated});

export default connect(mapStateToProps, {logout})(ManageFileUpload);
