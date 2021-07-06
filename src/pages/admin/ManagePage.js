import {useState} from 'react';
import {connect} from 'react-redux';
import {logout} from './../../reduxstore/actions/authActions';
import WithAdminAuth from '../../layouts/WithAdminAuth';
import {Editor} from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import '../../styles/AdminManagePage.css'

const ManagePage = (props) => {

    const [createPageType,
        setCreatePageType] = useState('');
    const [editPageType,
        setEditPageType] = useState('');

    const handleCreatePageTypeSelectChange = e => {
        console.log('create select change');
        setCreatePageType(e.target.value);
    }

    const handleEditPageTypeSelectChange = e => {
        console.log('edit select change');
        setEditPageType(e.target.value);
    }

    console.log("create", createPageType
        ? true
        : false);
    console.log("edit", editPageType
        ? true
        : false);

    return (
        <WithAdminAuth>
            {props.isAuthenticated && <div className="ap-main-section">
                <div className="ap-main-section-header ap-box">
                    <h2>Manage Page</h2>
                </div>

                <div className="ap-box">
                    <h3>Create Page</h3>
                    <p>Select the type of page you what to create below.</p>
                    <div>
                        <select
                            name="create-page-type-select"
                            id="create-page-type-select"
                            onChange={handleCreatePageTypeSelectChange}
                            className="page-type-select">
                            <option value="">--select page type--</option>
                            <option value="news">News</option>
                            <option value="press-release">Press Release</option>
                        </select>
                    </div>

                    {createPageType && <div className="create-page-container">
                        <h4>Create New {createPageType
                                .replace('-', ' ')
                                .toUpperCase()}&nbsp;Page</h4>
                        <div>
                            <div className="create-title-wrapper">
                                <label htmlFor="create-title">Title</label>
                                <input type="text" name="create-title" id="create-title"/>
                            </div>
                            <div className="create-slug-wrapper">
                                <label htmlFor="create-slug">Slug</label>
                                <input type="text" name="create-slug" id="create-slug"/>
                            </div>
                        </div>
                        <div className="create-cover-img-wrapper">
                            <label htmlFor="create-cover-img">Cover Image</label>
                            <input type="text" name="create-cover-img" id="create-cover-img"/>
                        </div>
                        <div className="create-body">
                            <label htmlFor="">Body</label>
                            <Editor />
                        </div>
                    </div>}

                </div>

                <div className="ap-box">
                    <h3>Edit or Delete Page</h3>
                    <p>
                        <select
                            name="edit-page-type-select"
                            id="edit-page-type-select"
                            onChange={handleEditPageTypeSelectChange}
                            className="page-type-select">
                            <option value="">--select page type--</option>
                            <option value="news">News</option>
                            <option value="press-release">Press Release</option>
                        </select>

                    </p>

                    image of something
                    <img src={"https://firebasestorage.googleapis.com/v0/b/ascl-website-assets.appspot.com/o/Adeiza's_Mouse_ASCL_057b9c7a86.jpg?alt=media&token=e92e287d-9a14-4730-a298-8916eca08154"} alt="#" />
                </div>

            </div>}
        </WithAdminAuth>
    )
}

const mapStateToProps = state => ({user: state.auth.user, isAuthenticated: state.auth.isAuthenticated});

export default connect(mapStateToProps, {logout})(ManagePage);
