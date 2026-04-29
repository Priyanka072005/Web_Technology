import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import StudentList from "./components/StudentList";
import AddStudent from "./components/AddStudent";

function App() {

  // State Management
  const [students, setStudents] = useState([]);

  return (
    <BrowserRouter>

      {/* Navbar visible on all pages */}
      <Navbar />

      <Routes>

        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Student List */}
        <Route 
          path="/students" 
          element={<StudentList students={students} />} 
        />

        {/* Add Student */}
        <Route 
          path="/add" 
          element={<AddStudent students={students} setStudents={setStudents} />} 
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;