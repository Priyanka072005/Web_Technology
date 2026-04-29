import { useState } from "react";

function AddStudent({ students, setStudents }) {

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!name || !age || !course) {
      alert("Please fill all fields");
      return;
    }

    const newStudent = { name, age, course };

    setStudents([...students, newStudent]);

    alert("Student Added Successfully!");

    // Clear inputs
    setName("");
    setAge("");
    setCourse("");
  };

  return (
    <div>
      <h2>Add Student</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /><br /><br />

        <input
          type="number"
          placeholder="Enter Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        /><br /><br />

        <input
          type="text"
          placeholder="Enter Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        /><br /><br />

        <button type="submit">Add Student</button>
      </form>
    </div>
  );
}

export default AddStudent;