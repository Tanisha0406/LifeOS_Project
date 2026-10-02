import { useEffect, useState } from "react";

function HabitList() {
    const [habits, setHabits] = useState(() => {
  const savedHabits =
    localStorage.getItem("lifeos-habits");

  return savedHabits
    ? JSON.parse(savedHabits)
    : [
        {
          id: 1,
          name: "Exercise",
          completed: false,
        },
        {
          id: 2,
          name: "Read 30 minutes",
          completed: true,
        },
        {
          id: 3,
          name: "Meditation",
          completed: false,
        },
      ];
});
  
  const [newHabit, setNewHabit] = useState("");
  useEffect(() => {
  localStorage.setItem(
    "lifeos-habits",
    JSON.stringify(habits)
  );
}, [habits]);

  function addHabit() {
    if (newHabit.trim() === "") return;

    const habit = {
      id: Date.now(),
      name: newHabit.trim(),
      completed: false,
    };

    setHabits([...habits, habit]);
    setNewHabit("");
  }

  function toggleHabit(id) {
    setHabits(
      habits.map((habit) =>
        habit.id === id
          ? {
              ...habit,
              completed: !habit.completed,
            }
          : habit
      )
    );
  }

  function deleteHabit(id) {
    setHabits(
      habits.filter((habit) => habit.id !== id)
    );
  }

  return (
    <section className="habits">

      <div className="section-header">
        <div>
          <h2>Today's Habits</h2>
          <p>Build consistency every day</p>
        </div>
      </div>

      <div className="add-habit">
        <input
          type="text"
          placeholder="Add a new habit..."
          value={newHabit}
          onChange={(e) => setNewHabit(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addHabit();
            }
          }}
        />

        <button onClick={addHabit}>
          Add Habit
        </button>
      </div>

      <div className="habit-list">

        {habits.map((habit) => (
          <div
            className="habit-item"
            key={habit.id}
          >

            <div className="habit-left">

              <input
                type="checkbox"
                checked={habit.completed}
                onChange={() =>
                  toggleHabit(habit.id)
                }
              />

              <span
                className={
                  habit.completed
                    ? "habit-completed"
                    : ""
                }
              >
                {habit.name}
              </span>

            </div>

            <div className="habit-actions">

              <span className="streak">
                🔥 0 days
              </span>

              <button
                onClick={() =>
                  deleteHabit(habit.id)
                }
              >
                🗑️
              </button>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default HabitList;