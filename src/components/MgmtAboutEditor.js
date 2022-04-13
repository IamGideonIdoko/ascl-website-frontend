import React, { useState } from 'react'
import { CustomOption } from './FullPageEditor';
import {Editor} from 'react-draft-wysiwyg';
import { EditorState, ContentState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

const MgmtAboutEditor = ({ onChange, value }) => {
    const [editorState,
        setEditorState] = useState(value
        ? EditorState.createWithContent(ContentState.createFromBlockArray(htmlToDraft(value).contentBlocks))
        : EditorState.createEmpty());

    const handleBodyEditorChange = (editorState) => {
        onChange(draftToHtml(convertToRaw(editorState.getCurrentContent())));
        setEditorState(editorState);
    }
    return (
    <div className="mgmt-about-editor-wrapper">
        <Editor
            editorState={editorState}
            wrapperClassName="body-editor-wrapper"
            editorClassName="body-editor-input"
            onEditorStateChange={handleBodyEditorChange}
            placeholder={"Start typing..."}
            toolbarCustomButtons={[< CustomOption />]}/>
    </div>
    )
}

export default MgmtAboutEditor