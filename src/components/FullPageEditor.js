import {useState} from 'react';
import {Editor} from 'react-draft-wysiwyg';
import {EditorState, convertToRaw, Modifier} from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import {strToSlug} from './../helper';
import '../styles/FullPageEditor.css';

const CustomOption = props => {

    const addASCL = () => {
        const { editorState, onChange } = props;
        const contentState = Modifier.replaceText(
            editorState.getCurrentContent(),
            editorState.getSelection(),
            'ASCL',
            editorState.getCurrentInlineStyle()
        );
        onChange(EditorState.push(editorState, contentState, 'insert-characters'));

    }


    return (<div onClick={addASCL}>ASCL</div>)
}

const FullPageEditor = (props) => {
    const {selectedType, setSelectedType} = props;

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
                    toolbarCustomButtons={[<CustomOption />]}
                    />
            </div>

            <div className="full-page-editor-buttons">
                <button className="full-page-editor-btn-1">Create {selectedType
                        .replace('-', ' ')
                        .toUpperCase()}</button>
                <button className="full-page-editor-btn-2" onClick={() => setSelectedType('')}>Cancel</button>
            </div>

        </div>
    );
}

export default FullPageEditor;