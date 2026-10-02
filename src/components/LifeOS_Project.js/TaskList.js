import { useEffect, useState } from "react";

function TaskList() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks =
      localStorage.getItem("lifeos-tasks");

    return savedTasks
      ? JSON.parse(savedTasks)
      : [
          {
            id: 1,
            title: "Complete LifeOS project",
            completed: false,
          },
          {
            id: 2,
            title: "Read for 30 minutes",
            completed: false,
          },
          {
            id: 3,
            title: "Workout",
            completed: true,
          },
        ];
  });

  const [newTask, setNewTask] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");

  useEffect(() => {
    localStorage.setItem(
      "lifeos-tasks",
      JSON.stringify(tasks)
    );
  }, [tasks]);

  // Add Task
  function addTask() {
    if (newTask.trim() === "") return;

    const task = {
      id: Date.now(),
      title: newTask.trim(),
      completed: false,
    };

    setTasks([...tasks, task]);
    setNewTask("");
  }

  // Complete / Uncomplete
  function toggleTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
            }
          : task
      )
    );
  }

  // Delete Task
  function deleteTask(id) {
    setTasks(
      tasks.filter((task) => task.id !== id)
    );
  }

  // Start Editing
  function startEditing(task) {
    setEditingId(task.id);
    setEditingText(task.title);
  }

  // Save Edit
  function saveEdit(id) {
    if (editingText.trim() === "") return;

    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              title: editingText.trim(),
            }
          : task
      )
    );

    setEditingId(null);
    setEditingText("");
  }

  return (
    <section className="tasks">

      <h2>Today's Tasks</h2>

      <div className="add-task">

        <input
          type="text"
          placeholder="Add a new task..."
          value={newTask}
          onChange={(e) =>
            setNewTask(e.target.value)
          }
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addTask();
            }
          }}
        />

        <button onClick={addTask}>
          Add Task
        </button>

      </div>

      <div className="task-list">

        {tasks.map((task) => (

          <div
            className="task"
            key={task.id}
          >

            <input
              type="checkbox"
              checked={task.completed}
              onChange={() =>
                toggleTask(task.id)
              }
            />

            {editingId === task.id ? (
              <>
                <input
                  className="edit-input"
                  value={editingText}
                  onChange={(e) =>
                    setEditingText(e.target.value)
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      saveEdit(task.id);
                    }
                  }}
                />

                <button
                  className="save-btn"
                  onClick={() =>
                    saveEdit(task.id)
                  }
                >
                  Save
                </button>
              </>
            ) : (
              <>
                <span
                  className={
                    task.completed
                      ? "completed"
                      : ""
                  }
                >
                  {task.title}
                </span>

                <div className="task-actions">

                  <button
                    className="edit-btn"
                    onClick={() =>
                      startEditing(task)
                    }
                  >
                    ✏️
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() =>
                      deleteTask(task.id)
                    }
                  >
                    🗑️
                  </button>

                </div>
              </>
            )}

          </div>

        ))}

      </div>

    </section>
  );
}

export default TaskList;