/*function StudentResult({ studentName, marks }) {
  return (
    <div>
      <h3>Student Result</h3>

      <p>Student: {studentName}</p>

      <p>Marks: {marks}</p>

      <p>
        Result: {marks >= 40 ? "Pass" : "Fail"}
      </p>
    </div>
  );
}

export default StudentResult;*/
import React, { useState } from "react";

function StudentResult() {
  const [studentName, setStudentName] = useState("Rahul");
  const [marks, setMarks] = useState(78);

  return (
    <div>
      <h2>Student Result System</h2>

      <input
        type="text"
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
      />

      <input
        type="number"
        value={marks}
        onChange={(e) => setMarks(Number(e.target.value))}
      />

      <StudentResult
        studentName={studentName}
        marks={marks}
      />
    </div>
  );
}

export default StudentResult;