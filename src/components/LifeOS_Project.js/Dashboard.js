import StatCard from "./StatCard";

function Dashboard() {
  return (
    <div>

      <header className="page-header">
        <h1>Good Morning 👋</h1>

        <p>
          Here's your productivity overview
        </p>
      </header>

      <section className="stats">

        <StatCard
          title="Tasks"
          value="5"
          description="Today's tasks"
        />

        <StatCard
          title="Habits"
          value="3/5"
          description="Today's habits"
        />

        <StatCard
          title="Goals"
          value="2"
          description="Active goals"
        />

      </section>

    </div>
  );
}

export default Dashboard;

