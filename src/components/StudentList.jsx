import { useState } from "react";
import StudentCard from "./StudentCard";

function StudentList({ students }) {
  const [sortedStudents, setSortedStudents] = useState(students);

  const sortByCGPA = () => {
    const sorted = [...sortedStudents].sort((a, b) => b.cgpa - a.cgpa);
    setSortedStudents(sorted);
  };

  return (
    <main>
      <h2>Student List</h2>

      <button onClick={sortByCGPA}>
        Sort by CGPA
      </button>

      <div className="student-list">
        {sortedStudents.map((student) => (
          <StudentCard
            key={student.rollNumber}
            name={student.name}
            rollNumber={student.rollNumber}
            department={student.department}
            semester={student.semester}
            cgpa={student.cgpa}
            photo={student.photo}
          />
        ))}
      </div>
    </main>
  );
}

export default StudentList;