import { convertToRaw, EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import { Col } from "react-bootstrap";
import { useState } from "react";
import style from "./styles.module.css";

export default function TextEditor({ limit, value = "", setValue = () => {} }) {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
  const onEditorStateChange = (editorState) => {
    setValue(draftToHtml(convertToRaw(editorState.getCurrentContent())));
    setEditorState(editorState);
  };

  return (
    <>
      <Editor
        wrapperClassName={style.wrapper}
        toolbarClassName={style.toolbar}
        editorClassName={style.editor}
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
        toolbar={{
          options: ["inline", "list"],
          inline: {
            options: ["bold", "italic", "underline", "strikethrough"],
            className: style.toolbar_inline,
            bold: { icon: null, className: style.bold_icon },
            italic: { icon: null, className: style.italic_icon },
            underline: { icon: null, className: style.underline_icon },
            strikethrough: { icon: null, className: style.strikethrough_icon },
          },
          list: {
            options: ["ordered", "unordered"],
            className: style.toolbar_list,
            ordered: { icon: null, className: style.ordered_icon },
            unordered: { icon: null, className: style.unordered_icon },
          },
        }}
      />
      <Col className={style.limit}>
        {editorState.getCurrentContent().getPlainText().length}/{limit}
      </Col>
    </>
  );
}
