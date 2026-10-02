import React, { useState } from "react";

function Arr(){
    const [name, setName] =  useState("");
    const [age, setAge] =  useState("");
     const [students, setstudents] =  useState([]);


    const addStudent = () => {
        const newStudent = {
            id: students.length + 1,
            name: name,
            age: age,
        };
        setStudents([...students, newStudent]);

        setName("");
        setAge("");
    };
    return(
        <div> 
            <h2>Student Form:-</h2>
         <input
         type="text"
         placeholder="Enter Name"
         value={age}
         onChange={(e) => setAge(e.target.value)}
         />
          <input
         type="text"
         placeholder="Enter Age"
         value={name}
         onChange={(e) => setAge(e.target.value)}
         />
         <br/> <br/> 
         <button onclick ={addStudent}>Add Student</button>
         <h2> Student Table:</h2>

         <table border="1" cellSpacing="10">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {students.map((student) =>(
                    <tr key={student.id}>
                        <td>{student.name}</td>
                        <td>{student.age}</td>
                    </tr>
                ))}
            </tbody>
         </table>
        </div>
    );
}

export default Arr;