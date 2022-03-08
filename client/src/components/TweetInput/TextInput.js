import React, { useEffect, useState } from "react";
import { Editor, EditorState, CompositeDecorator, ContentState } from "draft-js";
import { useDispatch, useSelector } from "react-redux";
import { updateMessage } from "../../actions/tweetInput.action";

const Decorated = ({ children }) => {
  return <span style={{ background: "#fb9fa8" }}>{children}</span>;
};

function findTextToLong(contentBlock, callback) {
  const text = contentBlock.getText();
  if (text.length > 280) callback(280, text.length);
}

function handleStrategy(contentBlock, callback) {
  findTextToLong(contentBlock, callback);
}

const createDecorator = () =>
  new CompositeDecorator([
    {
      strategy: handleStrategy,
      component: Decorated,
    },
  ]);

export default function TextInput() {
  const dispatch = useDispatch();
  const text = useSelector((state) => state.tweetInputReducer.message);

  const [editorState, setEditorState] = useState(
    EditorState.createEmpty(createDecorator())
  );

  const editor = React.useRef(null);

  function focusEditor() {
    editor.current.focus();
  }

  useEffect(() => {
    if (text !== "%toErase%") {
      focusEditor();
      dispatch(
        updateMessage(editorState.getCurrentContent().getPlainText("\u0001"))
      );
    }else{
      setEditorState(EditorState.push(editorState, ContentState.createFromText('')))
      dispatch(
        updateMessage(editorState.getCurrentContent().getPlainText("\u0001"))
      );
    }
  }, [editorState, text]);

  return (
    <Editor
      ref={editor}
      placeholder="Quoi de neuf ?"
      editorState={editorState}
      onChange={(editorState) => setEditorState(editorState)}
    />
  );
}
