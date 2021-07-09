import {useState} from 'react';
import {connect} from 'react-redux';
import {logout} from './../../reduxstore/actions/authActions';
import WithAdminAuth from '../../layouts/WithAdminAuth';
import FullPageEditor from '../../components/FullPageEditor';
import Select from 'react-select';
import AssetView from '../../components/AssetView';
import moment from 'moment';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import '../../styles/AdminManagePage.css'

const ManagePage = (props) => {

    const [createPageType,
        setCreatePageType] = useState('');
    const [editPageType,
        setEditPageType] = useState('');

    const [selectedPage,
        setSelectedPage] = useState(null);

    const handleCreatePageTypeSelectChange = e => {
        setCreatePageType(e.target.value);
    }

    const handleEditPageTypeSelectChange = e => {
        setEditPageType(e.target.value);
    }

    const handlePageSelectInputChange = option => {
        console.log("page select change");
        setSelectedPage(option ? option : null);
    }

    console.log("selected Page: ", selectedPage);

    console.log("pages", props.pages);
    const requiredPages = props
        .pages
        .filter(page => page.category === editPageType);
    console.log("requiredPages: ", requiredPages);
    console.log(requiredPages
        ? true
        : false)

    return (
        <WithAdminAuth>
            {props.isAuthenticated && <div className="ap-main-section">
                <div className="ap-main-section-header ap-box">
                    <h2>Manage Page</h2>
                </div>

                <div className="ap-box">
                    <AssetView/>
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
                        <FullPageEditor
                            setSelectedType={setCreatePageType}
                            selectedType={createPageType}
                            purpose={"page-create"}/>
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
                        {/* <h4>Edit {editPageType
                                .replace('-', ' ')
                                .toUpperCase()}&nbsp;page</h4> */}

                        {props.isLoaded && <div className="edit-page-container">
                            <h4>Select the {editPageType.replace('-', ' ')}&nbsp;page.</h4>
                            <div className="page-select-wrapper">
                                <Select
                                    className="asset-form-select"
                                    defaultValue={selectedPage}
                                    value={selectedPage}
                                    options={requiredPages.map(({title, _id, created_at}) => ({
                                    value: _id,
                                    label: `${title} (${moment(created_at).format('MMM DD, YYYY')})`, title
                                }))}
                                    onChange={handlePageSelectInputChange}
                                    isClearable={true}
                                    isSearchable={true}
                                    placeholder={`Select a ${editPageType} page...`}
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
                                <button className="page-edit-btn page-btn">Edit</button>
                                <button className="page-delete-btn page-btn">Delete</button>
                                <button className="page-cancel-btn page-btn" onClick={() => setEditPageType('')}>Cancel</button>
                            </div>
                        </div>
}
                        {/* <FullPageEditor setSelectedType={setEditPageType} selectedType={editPageType} purpose={"page-edit"}  /> */}
                    </div>}

                </div>

            </div>}
        </WithAdminAuth>
    )
}

const mapStateToProps = state => ({user: state.auth.user, isAuthenticated: state.auth.isAuthenticated, pages: state.page.pages, isLoaded: state.page.isLoaded});

export default connect(mapStateToProps, {logout})(ManagePage);
