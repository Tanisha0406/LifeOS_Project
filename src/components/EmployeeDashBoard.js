
import { useEffect, useMemo, useState } from "react";

const initialEmployees = [
  {
    id: 101,
    name: "Tanisha Paan",
    email: "tanu@technova.com",
    department: "Development",
    salary: 50000,
    status: "Active",
  },
  {
    id: 102,
    name: "Preeti Patidar",
    email: "preeti@gmail.com",
    department: "HR",
    salary: 38000,
    status: "Active",
  },
  {
    id: 103,
    name: "shreya Patidar",
    email: "shreya@technova.com",
    department: "Marketing",
    salary: 35000,
    status: "On Leave",
  },
];

const departments = [
  "Development",
  "HR",
  "Marketing",
  "Sales",
  "Finance",
];

function App() {
  const [employees, setEmployees] = useState(() => {
    const savedEmployees = localStorage.getItem("employees");

      if (!savedEmployees) {
    return initialEmployees;
  }

  return JSON.parse(savedEmployees);
  });

  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All Departments");

  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const emptyForm = {
    name: "",
    email: "",
    department: "",
    salary: "",
    status: "Active",
  };

  const [form, setForm] = useState(emptyForm);

  /* Save data */
  useEffect(() => {
    localStorage.setItem(
      "employees",
      JSON.stringify(employees)
    );
  }, [employees]);

  /* Statistics */
  const totalEmployees = employees.length;

  const activeEmployees = employees.filter(
    (employee) => employee.status === "Active"
  ).length;

  const leaveEmployees = employees.filter(
    (employee) => employee.status === "On Leave"
  ).length;

  /* Search + department filtering */
  const filteredEmployees = useMemo(() => {
    return employees.filter((employee) => {
      const searchText = search.toLowerCase();

      const matchesSearch =
        employee.name.toLowerCase().includes(searchText) ||
        employee.email.toLowerCase().includes(searchText) ||
        employee.department.toLowerCase().includes(searchText);

      const matchesDepartment =
        department === "All Departments" ||
        employee.department === department;

      return matchesSearch && matchesDepartment;
    });
  }, [employees, search, department]);

  /* Open add modal */
  const handleAddEmployee = () => {
    setEditingId(null);
    setForm(emptyForm);
    setShowModal(true);
  };

  /* Open edit modal */
  const handleEdit = (employee) => {
    setEditingId(employee.id);

    setForm({
      name: employee.name,
      email: employee.email,
      department: employee.department,
      salary: employee.salary,
      status: employee.status,
    });

    setShowModal(true);
  };

  /* Delete employee */
  const handleDelete = (id) => {
    const employee = employees.find(
      (item) => item.id === id
    );

    if (!employee) return;

    const confirmed = window.confirm(
      `Are you sure you want to delete ${employee.name}?`
    );

    if (!confirmed) return;

    setEmployees((current) =>
      current.filter((item) => item.id !== id)
    );
  };
  const handleResetData = () => {
  localStorage.removeItem("employees");
  setEmployees(initialEmployees);
};

  /* Form input */
  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  /* Submit */
  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.department ||
      !form.salary
    ) {
      return;
    }

    if (editingId) {
      setEmployees((current) =>
        current.map((employee) =>
          employee.id === editingId
            ? {
                ...employee,
                ...form,
                salary: Number(form.salary),
              }
            : employee
        )
      );
    } else {
      const newId =
        employees.length > 0
          ? Math.max(
              ...employees.map((employee) => employee.id)
            ) + 1
          : 101;

      setEmployees((current) => [
        ...current,
        {
          id: newId,
          ...form,
          salary: Number(form.salary),
        },
      ]);
    }

    setShowModal(false);
    setForm(emptyForm);
    setEditingId(null);
  };

  /* Close modal */
  const closeModal = () => {
    setShowModal(false);
    setForm(emptyForm);
    setEditingId(null);
  };

  /* Currency */
  const formatSalary = (salary) => {
    return `₹${Number(salary).toLocaleString("en-IN")}`;
  };

  /* Initials */
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .substring(0, 2)
      .toUpperCase();
  };

  return (
    <div className="app">

      {/* Header */}
      <header className="header">
        <div>
          <h1>Employee Management</h1>
          <p>
            Manage your organization's employee records
          </p>
        </div>

        <div className="header-buttons">
        <button
          className="add-btn"
          onClick={handleAddEmployee}
        >
          <span>+</span> Add Employee
        </button>
        <button
       className="reset-btn"
      onClick={handleResetData}
     >
       Reset Data
   </button>
   </div>
      </header>

      <main className="container">

        {/* Statistics */}
        <section className="stats">

          <div className="stat-card">
            <p className="stat-title">
              Total Employees
            </p>

            <h2>{totalEmployees}</h2>

            <p className="stat-subtitle">
              All employees
            </p>
          </div>

          <div className="stat-card">
            <p className="stat-title">
              Active Employees
            </p>

            <h2>{activeEmployees}</h2>

            <p className="stat-subtitle">
              Currently working
            </p>
          </div>

          <div className="stat-card">
            <p className="stat-title">
              On Leave
            </p>

            <h2>{leaveEmployees}</h2>

            <p className="stat-subtitle">
              Currently on leave
            </p>
          </div>

        </section>

        {/* Filters */}
        <section className="filters">

          <div className="search-wrapper">
            <span className="search-icon">⌕</span>

            <input
              type="text"
              placeholder="Search employees..."
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
            />
          </div>

          <select
            value={department}
            onChange={(event) =>
              setDepartment(event.target.value)
            }
          >
            <option>All Departments</option>

            {departments.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>

        </section>

        {/* Employee Table */}
        <section className="employee-card">

          <div className="employee-card-header">

            <div>
              <h3>Employees</h3>

              <p>Employee directory</p>
            </div>

            <span>
              {filteredEmployees.length} Employee
              {filteredEmployees.length !== 1
                ? "s"
                : ""}
            </span>

          </div>

          <div className="table-container">

            <table>

              <thead>
                <tr>
                  <th>ID</th>
                  <th>EMPLOYEE</th>
                  <th>DEPARTMENT</th>
                  <th>SALARY</th>
                  <th>STATUS</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>

              <tbody>

                {filteredEmployees.length === 0 ? (
                  <tr>
                    <td
                      colSpan="6"
                      className="no-results"
                    >
                      No employees found
                    </td>
                  </tr>
                ) : (
                  filteredEmployees.map((employee) => (
                    <tr key={employee.id}>

                      <td>
                        #{employee.id}
                      </td>

                      <td>
                        <div className="employee-info">

                          <div className="avatar">
                            {getInitials(employee.name)}
                          </div>

                          <div>
                            <strong>
                              {employee.name}
                            </strong>

                            <small>
                              {employee.email}
                            </small>
                          </div>

                        </div>
                      </td>

                      <td>
                        {employee.department}
                      </td>

                      <td>
                        {formatSalary(employee.salary)}
                      </td>

                      <td>

                        <span
                          className={`status ${
                            employee.status ===
                            "Active"
                              ? "status-active"
                              : "status-leave"
                          }`}
                        >
                          {employee.status}
                        </span>

                      </td>

                      <td>

                        <button
                          className="edit-btn"
                          onClick={() =>
                            handleEdit(employee)
                          }
                        >
                          Edit
                        </button>

                        <button
                          className="delete-btn"
                          onClick={() =>
                            handleDelete(employee.id)
                          }
                        >
                          Delete
                        </button>

                      </td>

                    </tr>
                  ))
                )}

              </tbody>

            </table>

          </div>

        </section>

      </main>

      {/* Modal */}
      {showModal && (
        <div
          className="modal-overlay"
          onMouseDown={(event) => {
            if (
              event.target === event.currentTarget
            ) {
              closeModal();
            }
          }}
        >

          <div className="modal">

            <div className="modal-header">

              <h2>
                {editingId
                  ? "Edit Employee"
                  : "Add Employee"}
              </h2>

              <button
                className="close-btn"
                onClick={closeModal}
              >
                ×
              </button>

            </div>

            <form
              onSubmit={handleSubmit}
              className="employee-form"
            >

              {/* Name */}
              <div className="form-group">

                <label>Full Name</label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter employee name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />

              </div>

              {/* Email */}
              <div className="form-group">

                <label>Email</label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />

              </div>

              {/* Department */}
              <div className="form-group">

                <label>Department</label>

                <select
                  name="department"
                  value={form.department}
                  onChange={handleChange}
                  required
                >
                  <option value="">
                    Select Department
                  </option>

                  {departments.map((item) => (
                    <option
                      key={item}
                      value={item}
                    >
                      {item}
                    </option>
                  ))}
                </select>

              </div>

              {/* Salary */}
              <div className="form-group">

                <label>Salary</label>

                <input
                  type="number"
                  name="salary"
                  placeholder="Enter salary"
                  value={form.salary}
                  onChange={handleChange}
                  min="0"
                  required
                />

              </div>

              {/* Status */}
              <div className="form-group">

                <label>Status</label>

                <select
                  name="status"
                  value={form.status}
                  onChange={handleChange}
                >
                  <option value="Active">
                    Active
                  </option>

                  <option value="On Leave">
                    On Leave
                  </option>
                </select>

              </div>

              {/* Buttons */}
              <div className="form-actions">

                <button
                  type="button"
                  className="cancel-btn"
                  onClick={closeModal}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="save-btn"
                >
                  {editingId
                    ? "Update Employee"
                    : "Save Employee"}
                </button>

              </div>

            </form>

          </div>

        </div>
      )}

    </div>
  );
}

export default App;