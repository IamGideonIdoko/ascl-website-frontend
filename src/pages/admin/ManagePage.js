import {useState} from 'react';
import {connect} from 'react-redux';
import {logout} from './../../reduxstore/actions/authActions';
import WithAdminAuth from '../../layouts/WithAdminAuth';
import FullPageEditor from '../../components/FullPageEditor';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import '../../styles/AdminManagePage.css'
import AssetView from '../../components/AssetView';

const ManagePage = (props) => {

    const [createPageType,
        setCreatePageType] = useState('');
    const [editPageType,
        setEditPageType] = useState('');

    console.log(editPageType);
    

    const handleCreatePageTypeSelectChange = e => {
        setCreatePageType(e.target.value);
    }

    const handleEditPageTypeSelectChange = e => {
        setEditPageType(e.target.value);
    }

    return (
        <WithAdminAuth>
            {props.isAuthenticated && <div className="ap-main-section">
                <div className="ap-main-section-header ap-box">
                    <h2>Manage Page</h2>
                </div>

                <div className="ap-box">
                    <AssetView />
                </div>

                <div className="ap-box">
                    <h3>Create Page</h3>
                    <p>Select the type of page you what to create below.</p>
                    <div>
                        <select
                            name="create-page-type-select"
                            id="create-page-type-select"
                            onChange={handleCreatePageTypeSelectChange}
                            className="page-type-select"
                            value={createPageType}
                            disabled={createPageType
                            ? true
                            : false}>
                            <option value="">--select page type--</option>
                            <option value="news">News</option>
                            <option value="press-release">Press Release</option>
                        </select>
                    </div>

                    {createPageType && <div className="create-page-container">
                        <h4>Create a new {createPageType
                                .replace('-', ' ')
                                .toUpperCase()}&nbsp;page</h4>
                        <FullPageEditor setSelectedType={setCreatePageType} selectedType={createPageType} purpose={"page-create"}  />
                    </div>}

                </div>

                <div className="ap-box">
                    <h3>Edit or Delete Page</h3>
                    <div>
                        <select
                            name="edit-page-type-select"
                            id="edit-page-type-select"
                            onChange={handleEditPageTypeSelectChange}
                            className="page-type-select"
                            value={editPageType}
                            disabled={editPageType
                            ? true
                            : false}>
                            <option value="">--select page type--</option>
                            <option value="news">News</option>
                            <option value="press-release">Press Release</option>
                        </select>

                    </div>

                    {editPageType && <div className="edit-page-container">
                        <h4>Edit {editPageType
                                .replace('-', ' ')
                                .toUpperCase()}&nbsp;page</h4>
                        <FullPageEditor setSelectedType={setEditPageType} selectedType={editPageType} purpose={"page-edit"}  />
                    </div>}

                </div>

            </div>}
        </WithAdminAuth>
    )
}

const mapStateToProps = state => ({user: state.auth.user, isAuthenticated: state.auth.isAuthenticated});

export default connect(mapStateToProps, {logout})(ManagePage);
