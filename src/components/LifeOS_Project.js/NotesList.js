import { useEffect, useState } from "react";

function NotesList() {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("lifeos-notes");

    return savedNotes
      ? JSON.parse(savedNotes)
      : [];
  });

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [search, setSearch] = useState("");
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    localStorage.setItem(
      "lifeos-notes",
      JSON.stringify(notes)
    );
  }, [notes]);

  function saveNote() {
    if (
      title.trim() === "" ||
      content.trim() === ""
    ) {
      return;
    }

    if (editingId !==null) {
      setNotes(
        notes.map((note) =>
          note.id === editingId
            ? {
                ...note,
                title: title.trim(),
                content: content.trim(),
              }
            : note
        )
      );

      setEditingId(null);
    } else {
      const newNote = {
        id: Date.now(),
        title: title.trim(),
        content: content.trim(),
      };

      setNotes([...notes, newNote]);
    }

    setTitle("");
    setContent("");
  }

  function editNote(note) {
    setEditingId(note.id);
    setTitle(note.title);
    setContent(note.content);
  }

  function deleteNote(id) {
    setNotes(
      notes.filter((note) => note.id !== id)
    );
  }

  function cancelEdit() {
    setEditingId(null);
    setTitle("");
    setContent("");
  }

  const filteredNotes = notes.filter((note) =>
    `${note.title} ${note.content}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <section className="notes">

      <div className="section-header">
        <div>
          <h2>My Notes</h2>
          <p>Capture your thoughts and ideas</p>
        </div>
      </div>

      {/* Search */}

      <div className="search-box">

        <input
          type="text"
          placeholder="Search notes..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

      </div>

      {/* Note Editor */}

      <div className="note-editor">

        <input
          type="text"
          placeholder="Note title..."
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
        />

        <textarea
          placeholder="Write your note..."
          value={content}
          onChange={(e) =>
            setContent(e.target.value)
          }
        />

        <div className="editor-actions">

          <button onClick={saveNote}>
            {editingId !== null
          ? "Update Note"
           : "Add Note"}
          </button>

          {editingId !== null && (
            <button
              className="cancel-btn"
              onClick={cancelEdit}
            >
              Cancel
            </button>
          )}

        </div>

      </div>

      {/* Notes */}

      <div className="notes-grid">

        {filteredNotes.length === 0 ? (
          <p className="empty-notes">
            No notes found.
          </p>
        ) : (
          filteredNotes.map((note) => (

            <div
              className="note-card"
              key={note.id}
            >

              <div className="note-header">

                <h3>{note.title}</h3>

                <div className="note-actions">

                  <button
                    onClick={() =>
                      editNote(note)
                    }
                  >
                    ✏️
                  </button>

                  <button
                    onClick={() =>
                      deleteNote(note.id)
                    }
                  >
                    🗑️
                  </button>

                </div>

              </div>

              <p>{note.content}</p>

            </div>

          ))
        )}

      </div>

    </section>
  );
}

export default NotesList;