import React from "react";
import { Editor, EditorState, CompositeDecorator } from "draft-js";

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

export default function TextInput({setText}) {
  const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty(createDecorator())
  );

  const editor = React.useRef(null);

  function focusEditor() {
    editor.current.focus();
  }

  React.useEffect(() => {
    focusEditor();
    setText(editorState.getCurrentContent().getPlainText('\u0001'));
  }, [editorState]);

  return (
    <Editor
      ref={editor}
      placeholder="Quoi de neuf ?"
      editorState={editorState}
      onChange={(editorState) => setEditorState(editorState)}
    />
  );
}
