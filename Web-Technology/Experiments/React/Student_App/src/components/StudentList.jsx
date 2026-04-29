function StudentList({ students }) {
  return (
    <div>
      <h2>Student List</h2>

      {students.length === 0 ? (
        <p>No students added yet</p>
      ) : (
        <ul>
          {students.map((s, index) => (
            <li key={index}>
              {s.name} - {s.age} - {s.course}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default StudentList;