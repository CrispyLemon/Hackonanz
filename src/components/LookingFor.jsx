import React, { useState, useEffect } from 'react';
import './LookingFor.css'; 

const studentsData = [
  { id: 1, name: "Alice Johnson", img: "https://i.pravatar.cc/150?img=1" },
  { id: 2, name: "Bob Smith", img: "https://i.pravatar.cc/150?img=2" },
  { id: 3, name: "Charlie Brown", img: "https://i.pravatar.cc/150?img=3" },
  { id: 4, name: "David Wilson", img: "https://i.pravatar.cc/150?img=4" },
  { id: 5, name: "Eva Adams", img: "https://i.pravatar.cc/150?img=5" },
  
];

function StudentList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); 
    return () => clearTimeout(timer);
  }, []);

  const filteredStudents = studentsData.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="student-list">
      <h2>Student List</h2>
      <input
        type="text"
        placeholder="Search for students..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <ul className="student-items">
          {filteredStudents.length > 0 ? (
            filteredStudents.map(student => (
              <li key={student.id} className="student-item">
                <img src={student.img} alt={student.name} className="student-img" />
                <span className="student-name">{student.name}</span>
              </li>
            ))
          ) : (
            <li className="no-results">No students found</li>
          )}
        </ul>
      )}
    </div>
  );
}

export default StudentList;
