import {useState} from 'react';
import {connect} from 'react-redux';
import {logout} from './../../reduxstore/actions/authActions';
import WithAdminAuth from '../../layouts/WithAdminAuth';
import AssetView from './../../components/AssetView';
import '../../styles/AdminManageGallery.css';

const ManageGallery = (props) => {
    const [galleryCaption,
        setGalleryCaption] = useState('');
    const [galleryImage,
        setGalleryImage] = useState('');

    const handleAddGalleryInput = () => {}

    return (
        <WithAdminAuth>
            {props.isAuthenticated && <div className="ap-main-section">
                <div className="ap-box">
                    <h2>Manage Gallery</h2>
                </div>
                <div className="ap-box">
                    <AssetView/>
                </div>
                <div className="ap-box">
                    <h3>Add to Gallery</h3>

                    <div className="add-to-gallery-form">
                        <div>
                            <label htmlFor="gallery-caption">Caption</label>
                            <input
                                type="text"
                                name="gallery-caption"
                                id="gallery-caption"
                                value={galleryCaption}
                                onChange={handleAddGalleryInput}/>
                        </div>

                        <div>
                            <label htmlFor="gallery-image">Image&nbsp;<small>(Link)</small></label>
                            <input
                                type="text"
                                name="gallery-image"
                                id="gallery-image"
                                value={galleryImage}
                                onChange={handleAddGalleryInput}/>
                        </div>
                        <div style={{ marginTop: "1.5rem" }}>
                            <button className="primary-btn">Add to Gallery</button>
                        </div>
                    </div>

                </div>

                <div className="ap-box">
                    <h3>Update or Remove from Gallery</h3>
                    <p>Select the gallery who want to update or remove.</p>
                </div>

            </div>}
        </WithAdminAuth>
    )
}

const mapStateToProps = state => ({user: state.auth.user, isAuthenticated: state.auth.isAuthenticated});

export default connect(mapStateToProps, {logout})(ManageGallery);
