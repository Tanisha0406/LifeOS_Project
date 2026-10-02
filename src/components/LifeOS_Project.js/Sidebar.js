function Sidebar({
  currentPage,
  setCurrentPage,
}) {
  return (
    <aside className="sidebar">

      <h2>LifeOS</h2>

      <nav>

        <button
          className={
            currentPage === "dashboard"
              ? "active"
              : ""
          }
          onClick={() =>
            setCurrentPage("dashboard")
          }
        >
          Dashboard
        </button>

        <button
          className={
            currentPage === "tasks"
              ? "active"
              : ""
          }
          onClick={() =>
            setCurrentPage("tasks")
          }
        >
          Tasks
        </button>

        <button
          className={
            currentPage === "habits"
              ? "active"
              : ""
          }
          onClick={() =>
            setCurrentPage("habits")
          }
        >
          Habits
        </button>

        <button
          className={
            currentPage === "goals"
              ? "active"
              : ""
          }
          onClick={() =>
            setCurrentPage("goals")
          }
        >
          Goals
        </button>

        <button
          className={
            currentPage === "notes"
              ? "active"
              : ""
          }
          onClick={() =>
            setCurrentPage("notes")
          }
        >
          Notes
        </button>

        <button
          className={
            currentPage === "calendar"
              ? "active"
              : ""
          }
          onClick={() =>
            setCurrentPage("calendar")
          }
        >
          Calendar
        </button>

      </nav>

    </aside>
  );
}

export default Sidebar;