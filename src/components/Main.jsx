import React from "react";
import ReactMarkdown from "react-markdown";

function Main({ activeNote, onUpdateNote }) {
  const onEditField = (key, value) => {
    onUpdateNote({
      ...activeNote,
      [key]: value,
      lastModified: Date.now(),
    });
  };

  if (!activeNote) {
    return <div className="no-active-note">no note selected</div>;
  }
  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <input
          type="text"
          id="title"
          autoFocus
          value={activeNote.title}
          onChange={(e) => onEditField("title", e.target.value)}
        />

        <textarea
          name=""
          id="body"
          placeholder="write your note here.."
          cols="30"
          rows="10"
          value={activeNote.body}
          onChange={(e) => onEditField("body", e.target.value)}
        ></textarea>
      </div>
      <div className="app-main-note-preview">
        <h1 className="preview-title">{activeNote.title}</h1>
        <ReactMarkdown className="markdown-preview">
          {activeNote.body}
        </ReactMarkdown>
      </div>
    </div>
  );
}

export default Main;
