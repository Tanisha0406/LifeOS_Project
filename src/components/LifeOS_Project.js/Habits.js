import HabitList from "../components/HabitList";

function Habits() {
  return (
    <div>
      <header className="page-header">
        <h1>Habits</h1>
        <p>Build consistency every day</p>
      </header>

      <HabitList />
    </div>
  );
}

export default Habits;