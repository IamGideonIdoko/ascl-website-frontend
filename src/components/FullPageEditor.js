import {useState} from 'react';
import {Editor} from 'react-draft-wysiwyg';
import {EditorState, convertToRaw, Modifier} from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import {strToSlug} from './../helper';
import {addPage, resetPageCreated} from './../reduxstore/actions/pageActions';
import {clearErrors} from '../reduxstore/actions/errorActions';
import {connect} from 'react-redux';
import Swal from 'sweetalert2';
import '../styles/FullPageEditor.css';

const CustomOption = props => {

    const addASCL = () => {
        const {editorState, onChange} = props;
        const contentState = Modifier.replaceText(editorState.getCurrentContent(), editorState.getSelection(), 'ASCL', editorState.getCurrentInlineStyle());
        onChange(EditorState.push(editorState, contentState, 'insert-characters'));

    }

    return (
        <div onClick={addASCL}>ASCL</div>
    )
}

const FullPageEditor = (props) => {
    const {
        selectedType,
        setSelectedType,
        purpose,
        currentUsername,
        addPage,
        isPageCreated,
        resetPageCreated,
        clearErrors,
        errorMsg
    } = props;

    const [editorTitle,
        setEditorTitle] = useState('');
    const [editorSlug,
        setEditorSlug] = useState('');
    const [editorCoverImg,
        setEditorCoverImg] = useState('');
    const [editorBody,
        setEditorBody] = useState('');

    const [editorState,
        setEditorState] = useState(EditorState.createEmpty());

    if (purpose === "page-create") {
        if (isPageCreated) {
            Swal
                .fire({title: "", text: `Post successfully created.`, icon: "success"})
                .then(res => {
                    setSelectedType('');
                });
            resetPageCreated();
        }

        if (errorMsg.errorType && errorMsg.errorType === "TITLE_ALREADY_EXISTS") {
            Swal.fire({title: "Page already exists.", text: `A page with the same title "${editorTitle}" already exists."`, icon: "error"});
            clearErrors();
        }

    }

    const handleInputChange = e => {
        const {name, value} = e.target;

        switch (name) {
            case 'editor-title':
                setEditorTitle(value);
                setEditorSlug(strToSlug(value));
                break;
            case 'editor-slug':
                setEditorSlug(strToSlug(value));
                break;
            case 'editor-cover-img':
                setEditorCoverImg(value);
                break;
            default:
        }
    }

    const handleBodyEditorChange = editorState => {
        setEditorState(editorState);
        setEditorBody(draftToHtml(convertToRaw(editorState.getCurrentContent())));
    }

    const handleEditorBtnClick = e => {
        if (purpose === 'page-create') {
            console.log('handle page creation');
            if (!editorTitle || !editorSlug || !editorCoverImg || !editorBody) {
                Swal.fire({title: "", text: `The "Title", "Slug", "Cover Image", and "Body" fields must be provided.`, icon: "error"});
            } else {
                Swal
                    .fire({title: 'Do you want to create?', showDenyButton: true, showCancelButton: true, confirmButtonText: `Create`, denyButtonText: `Don't create`})
                    .then((result) => {
                        /* Read more about isConfirmed, isDenied below */
                        if (result.isConfirmed) {
                            // Swal.fire('Created!', '', 'success')
                            const newPage = {
                                title: editorTitle,
                                slug: editorSlug,
                                cover_img: editorCoverImg,
                                body: editorBody,
                                author_username: currentUsername,
                                category: selectedType
                            };
                            console.log(newPage);
                            addPage(newPage);
                        } else if (result.isDenied) {
                            // Swal.fire('Page Not Created', '', 'info')
                        }
                    })
            }

        } else if (purpose === 'page-edit') {
            console.log('handle page edit');
        }
    }

    return (
        <div className="full-page-editor">
            <div>
                <div className="editor-title-wrapper">
                    <label htmlFor="editor-title">Title</label>
                    <input
                        type="text"
                        name="editor-title"
                        id="editor-title"
                        value={editorTitle}
                        onChange={handleInputChange}/>
                </div>
                <div className="editor-slug-wrapper">
                    <label htmlFor="editor-slug">Slug
                        <small>(Auto-generated)</small>
                    </label>
                    <input
                        type="text"
                        name="editor-slug"
                        id="editor-slug"
                        value={editorSlug}
                        disabled={true}
                        onChange={handleInputChange}/>
                </div>
            </div>
            <div className="editor-cover-img-wrapper">
                <label htmlFor="editor-cover-img">Cover Image
                    <small>(Link)</small>
                </label>
                <input
                    type="text"
                    name="editor-cover-img"
                    id="editor-cover-img"
                    value={editorCoverImg}
                    onChange={handleInputChange}/>
            </div>
            <div className="editor-body">
                <label>Body</label>
                <Editor
                    editorState={editorState}
                    wrapperClassName="body-editor-wrapper"
                    editorClassName="body-editor-input"
                    onEditorStateChange={handleBodyEditorChange}
                    toolbarCustomButtons={[< CustomOption />]}/>
            </div>

            <div className="full-page-editor-buttons">
                <button className="full-page-editor-btn-1" onClick={handleEditorBtnClick}>{purpose === 'page-create'
                        ? 'Create'
                        : purpose === 'page-edit'
                            ? 'Edit'
                            : ''} {selectedType
                        .replace('-', ' ')
                        .toUpperCase()}</button>
                <button className="full-page-editor-btn-2" onClick={() => setSelectedType('')}>Cancel</button>
            </div>

        </div>
    );
}

const mapStateToProps = (state, ownProps) => ({currentUsername: state.auth.user.username, isPageCreated: state.page.isPageCreated, errorMsg: state.error.message});

export default connect(mapStateToProps, {addPage, resetPageCreated, clearErrors})(FullPageEditor);