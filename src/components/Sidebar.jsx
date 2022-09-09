import React from "react";

function Sidebar({
  notes,
  onAddNote,
  onDeleteNote,
  activeNote,
  setActiveNote,
}) {
  const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);

  const displayNotes = sortedNotes.map((note) => (
    <div
      className={`app-sidebar-note ${note.id === activeNote && "active"}`}
      onClick={() => setActiveNote(note.id)}
    >
      <div className="sidebar-note-title">
        <strong>{note.title}</strong>
        <button onClick={() => onDeleteNote(note.id)}>delete</button>
      </div>
      <p>{note.body && note.body.substr(0, 100) + "..."}</p>
      <small className="note-meta">
        {new Date(note.lastModified).toLocaleDateString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </small>
    </div>
  ));

  return (
    <div className="app-sidebar">
      <h1>Notes</h1>
      <button onClick={onAddNote}>Add</button>

      <div className="app-sidebar-notes">{displayNotes}</div>
    </div>
  );
}

export default Sidebar;
