import { useEffect, useState } from "react";

function GoalList() {
  const [goals, setGoals] = useState(() => {
    const savedGoals = localStorage.getItem("lifeos-goals");

    return savedGoals
      ? JSON.parse(savedGoals)
      : [
          {
            id: 1,
            title: "Learn React",
            progress: 70,
          },
          {
            id: 2,
            title: "Build LifeOS",
            progress: 40,
          },
        ];
  });

  const [newGoal, setNewGoal] = useState("");

  useEffect(() => {
    localStorage.setItem(
      "lifeos-goals",
      JSON.stringify(goals)
    );
  }, [goals]);

  function addGoal() {
    if (newGoal.trim() === "") return;

    const goal = {
      id: Date.now(),
      title: newGoal.trim(),
      progress: 0,
    };

    setGoals([...goals, goal]);
    setNewGoal("");
  }

  function updateProgress(id, amount) {
    setGoals(
      goals.map((goal) => {
        if (goal.id !== id) {
          return goal;
        }

        const newProgress = Math.min(
          100,
          Math.max(0, goal.progress + amount)
        );

        return {
          ...goal,
          progress: newProgress,
        };
      })
    );
  }

  function deleteGoal(id) {
    setGoals(
      goals.filter((goal) => goal.id !== id)
    );
  }

  return (
    <section className="goals">

      <div className="section-header">
        <div>
          <h2>My Goals</h2>
          <p>Track your long-term progress</p>
        </div>
      </div>

      <div className="add-goal">

        <input
          type="text"
          placeholder="Add a new goal..."
          value={newGoal}
          onChange={(e) =>
            setNewGoal(e.target.value)
          }
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addGoal();
            }
          }}
        />

        <button onClick={addGoal}>
          Add Goal
        </button>

      </div>

      <div className="goal-list">

        {goals.map((goal) => (

          <div className="goal-card" key={goal.id}>

            <div className="goal-top">

              <h3>{goal.title}</h3>

              <button
                className="delete-goal"
                onClick={() =>
                  deleteGoal(goal.id)
                }
              >
                🗑️
              </button>

            </div>

            <div className="progress-info">

              <span>Progress</span>

              <strong>
                {goal.progress}%
              </strong>

            </div>

            <div className="progress-bar">

              <div
                className="progress-fill"
                style={{
                  width: `${goal.progress}%`,
                }}
              />

            </div>

            <div className="goal-actions">

              <button
                onClick={() =>
                  updateProgress(goal.id, -10)
                }
              >
                −10
              </button>

              <button
                onClick={() =>
                  updateProgress(goal.id, 10)
                }
              >
                +10
              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default GoalList;