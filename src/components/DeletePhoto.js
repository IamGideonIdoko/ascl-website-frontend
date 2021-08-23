import {Fragment, useState} from 'react';
import Select from 'react-select';
import moment from 'moment';
import {connect} from 'react-redux';
import {convertByteInString} from '../helper';
import Swal from 'sweetalert2';

const DeletePhoto = (props) => {
    const [selectedPhoto,
        setSelectedPhoto] = useState(null);
    const [isDeleting,
        setIsDeleting] = useState(false);

        const handlePhotoSelectInputChange = option => {
            setSelectedPhoto(option
                ? option
                : null);
        }

    const handlePhotoDelete = () => {
        // setIsDeleting(true);
        if (!selectedPhoto) {
            // no page is selected
            setIsDeleting(false);
            Swal.fire({title: "No photo selected.", text: `Please select a photo.`, icon: "error"});
        } else {
            // page is selected
            Swal
                .fire({title: 'Do you want to delete?', showDenyButton: true, showCancelButton: true, confirmButtonText: `Delete`, denyButtonText: `Don't delete`})
                .then((result) => {
                    if (result.isConfirmed) {
                        // props.deleteFaq(selectedFaq.value);
                    } else if (result.isDenied) {
                        setIsDeleting(false);
                        setSelectedPhoto(null);
                        Swal.fire('Photo Not Deleted', '', 'info')
                    }
                })
        }
    }

    return (
        <Fragment>
            <div className="edit-page-container">
                <div className="page-select-wrapper">
                    <Select
                        className="asset-form-select"
                        defaultValue={selectedPhoto}
                        value={selectedPhoto}
                        options={props
                        .assets
                        .filter(x => x.category === 'photo')
                        .map(({_id, name, url, file_type, size, category, created_at}) => ({
                            value: _id,
                            label: `${name} ${convertByteInString(size)} [${category}] (${moment(created_at).format('MMM DD, YYYY')})`
                        }))}
                        onChange={handlePhotoSelectInputChange}
                        isClearable={true}
                        isSearchable={true}
                        placeholder={`Select a Photo...`}
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
                    <button
                        className="page-delete-btn page-btn"
                        disabled={isDeleting}
                        onClick={handlePhotoDelete}>{isDeleting
                            ? 'Deleting...'
                            : 'Delete'}</button>
                </div>
            </div>

        </Fragment>
    )
}

const mapStateToProps = (state, ownProps) => ({assets: state.asset.assets, isLoaded: state.asset.isLoaded});

export default connect(mapStateToProps, null)(DeletePhoto);
