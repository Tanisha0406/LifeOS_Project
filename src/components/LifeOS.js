import {useState} from "react";

function DashBoardPage(){
    const [userName, setUserName] = useState("Tanisha");
    const [tasksCompleted, setTasksCompleted] = useState(3);
    {
        id: 1,
        tittle: "Learn React",
        Completed: true,
    },

    
    const completeTask = () => {
        setTasksCompleted(tasksCompleted + 1);
    };

    return(
        <main className="DashBoard">
            <h1> Good Evening, {userName} </h1>
            <p>
                Welcome Back to your LifeOS Dashboard.
            </p>
            <button onClick={() => setUserName("Life Explorer")}> Change Name

            </button>
        <section className="goal-card">

        <h2>Today's Progress</h2>

        <p>
          Completed: {tasksCompleted} tasks
        </p>

        {tasksCompleted >= 5 ? (
          <p className="success">
            🎉 Amazing! You completed your daily target.
          </p>
        ) : (
          <p className="warning">
            💪 Keep going! Complete {5 - tasksCompleted} more tasks.
          </p>
        )}
        <button onClick={completeTask}>
            Complete Task
        </button>

      </section>

    </main>
  );
}

export default DashBoardPage;

