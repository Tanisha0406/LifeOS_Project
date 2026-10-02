/*function App() {
  return (
    <div>
      <h1>Hello React </h1>
      <p>Mera pehla React project</p>
    </div>
  );
}

export default App;
import logo from './logo.svg';
import linkedin from './assets/images.jpg';
import greet from './components/greet';


function app(){
  return(
    <>
    <greet course="React" campus="Bhawarkua" photo={logo}/>
    <greet course="SQL" campus="vijaynagar" photo={linkedin}/>
    <greet course="python" campus="ujjain" />
    <greet course="React" campus="vadodara" />
    </>
  );
}
export default app;*/

/*import Card from "./components/Product.js";
function App(){
  return(
    <div
       style={{
        display: "flex",
        gap: "20px",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    > 
      <Card
      name="Tanisha"
      course="React Developer"
      image="https://picsum.photos/200"
      />
      <Card
      name="Preeti"
      course="Frontend Developer"
      image="https://picsum.photos/200"
      />
      <Card
      name="Granth"
      course="Full stack Developer"
      image="https://picsum.photos/200"
      />
    </div> 
  );
}*/

/*import React from "react";
import Product from "./Components/Products";

import Laptopimage from"./assets/Laptop.png";
import Mobileimage from"./assets/Mobile.png";
import Bluetoothimage from"./assets/Bluetooth.png";
function App(){
  return(
    <div>
      <h1>Product Details:</h1>
        <div className="product-container">
        <Product
        feature="Dell 5 laptop"
        Price={50000}
        brand="Dell"
        image={Laptopimage}        
        />
        <Product
        feature="Samsung"
        Price={60000}
        brand="samsung"
        image={Mobileimage}
        />

      <Product 
      feature="Bluetooth"
      Price={2500}
      brand="dupstep"
      image={Bluetoothimage}
      />
      </div>
      </div>
  );
}
export default App;*/
/*import SmartCounter from "./SmartCounter2";
import AgeCalculator from "./AgeCalculator1";

function App() {
  return (
    <div>
      <SmartCounter />

       <AgeCalculator />
    </div>
  );
}*/
/*function App(){
    const user = {
    name: "Rahul",
    age: 22,
    city: "Bhopal",
    isStudent: true
  };

  return (
    <div className="card">
      <h1>{user.name}</h1>

      <p>Age: {user.age}</p>

      <p>City: {user.city}</p>

      <p>
        Status:{" "}
        {user.isStudent ? "Student" : "Not a Student"}
      </p>

      {user.isStudent && (
        <button>View Courses</button>
      )}
    </div>
  );
}

export default App;*/

/*import SmartCounter from "./components/SmartCounter";
import AgeCalculator from "./components/AgeCalculator";
import LoginSimulation from "./components/Login";
import ProductQuantity from "./components/ProductQuantity";
import CharacterCounter from "./components/CharacterCounter";
import TemperatureConverter from "./components/TemperatureConverter";
import StudentResult from "./components/StudentResult";
import TrafficLight from "./components/TrafficLight";
import BankAccount from "./components/BankAccount";
import MiniShoppingCart from "./components/MiniShoppingCart";
import UseState from "./components/UseState";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>React State Practice</h1>
      
      <div className="card">
      <SmartCounter />
      <hr />

      <AgeCalculator />
      <hr />

      <LoginSimulation />
      <hr />

      <ProductQuantity />
      <hr />

      <CharacterCounter />
      <hr />

      <TemperatureConverter />
      <hr />

       <StudentResultSystem />
      <hr />

      <TrafficLight />
      <hr />

      <BankAccount />
      <hr />

      <UseState />
  </div>
  </div>
  );
}

export default App;*/

/*import React, { useState } from "react";
import "./App.css";

import ProfileForm from "./components/ProfileForm";
import SkillsForm from "./components/SkillsForm";
import { editableInputTypes } from "@testing-library/user-event/dist/utils";

function App() {
  const [portfolio, setPortfolio] = useState({
    name: "Your Name",
    title: "Frontend Developer",
    bio: "I create modern and beautiful websites.",
  });
  const updateProfile = (updatedProfile) => {

    setPortfolio(updatedProfile);
  };
  const updateSkills = (updatedSkills) => {

  setPortfolio((prev) => ({
    ...prev,
    skills: updatedSkills
  }));

};

  return (
    <div className="app">
      <h1>Creative Portfolio Builder</h1>

      <div className="builder">
        <div className="editor">
          <h2>Editor</h2>
          <ProfileForm
            profile={portfolio}
            updateProfile={updateProfile}
          />
          <SkillsForm
      skills={portfolio.skills}
      updateSkills={updateSkills}
      />
        </div>

        <div className="preview">
          <h2>Live Preview</h2>

          <h1>{portfolio.name}</h1>
          <h3>{portfolio.title}</h3>
          <p>{portfolio.bio}</p>
          <h2>Skills</h2>

  <div className="preview-skills">

    {portfolio.skills.map((skill, index) => (

      <span key={index}>
        {skill}
      </span>

    ))}

   </div>

   </div>
        </div>
      </div>
  );
}

export default App;*/




//import EmployeeDashBoard from "./components/EmployeeDashBoard";
/*import "./App.css";

function App() {
  return (
    <EmployeeDashBoard />
  );
}

export default App;*/

import { useState } from "react";
import "./components/LifeOS_Project.js/project.css";
import Dashboard from "./components/LifeOS_Project.js/Dashboard";
import Sidebar from "./components/LifeOS_Project.js/Sidebar";
import StatCard from "./components/LifeOS_Project.js/StatCard";
import TaskList from "./components/LifeOS_Project.js/TaskList";
import HabitList from "./components/LifeOS_Project.js/HabitList";
import GoalList from "./components/LifeOS_Project.js/GoalList";
import NotesList from "./components/LifeOS_Project.js/NotesList";

function App() {
  const [currentPage, setCurrentPage] = useState("dashboard");

  function renderPage() {
    switch (currentPage) {
      case "tasks":
        return <TaskList />;

      case "habits":
        return <HabitList />;

      case "goals":
        return <GoalList />;

      case "notes":
        return <NotesList />;

      case "calendar":
        return <div>Calendar</div>;

      default:
        return (
          <div>
            <h1>Dashboard</h1>
            <StatCard />
          </div>
        );
    }
  }

  return (
    <div className="app">
      <Sidebar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      <main className="main-content">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;