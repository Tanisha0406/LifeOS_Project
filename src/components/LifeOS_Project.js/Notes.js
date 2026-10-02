import NotesList from "../components/NotesList";

function Notes() {
  return (
    <div>
      <header className="page-header">
        <h1>Notes</h1>
        <p>Capture and organize your thoughts</p>
      </header>

      <NotesList />
    </div>
  );
}

export default Notes;