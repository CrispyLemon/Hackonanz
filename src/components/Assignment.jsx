import { React, useState } from 'react';

export default function Assignment() {
  const [selectedAssignment, setSelectedAssignment] = useState(null);

  const assignments = [
    { id: 1, title: 'Data Structures', assignment: 'Assignment 3', dueDate: '20/12/1990', code: 'COCS301', status: 'Not Submitted', statusColor: 'red' },
    { id: 2, title: 'Algorithms', assignment: 'Assignment 2', dueDate: '20/12/1990', code: 'COCS302', status: 'Submitted', statusColor: 'green' },
    { id: 3, title: 'C++', assignment: 'Assignment 1', dueDate: '20/12/1990', code: 'COCS303', status: 'Submitted', statusColor: 'green' }
  ];

  const assignmentDetails = selectedAssignment ? (
    <div style={{ border: '1px solid #ddd', padding: '20px', marginTop: '20px', borderRadius: '10px', backgroundColor: '#f9f9f9' }}>
      <h3>{selectedAssignment.title} {selectedAssignment.assignment}</h3>
      <p>Last Date: {selectedAssignment.dueDate}</p>
      <p>Course Code: {selectedAssignment.code}</p>
      <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a metus ornare, ultricies massa non, convallis orci.</p>
      <div style={{ marginTop: '10px' }}>
        <button style={{ padding: '10px 20px', marginRight: '10px', backgroundColor: '#87CEEB', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Upload Work</button>
        <button style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Submit</button>
      </div>
    </div>
  ) : <p>Select an assignment to view details.</p>;

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>Assignments</h1>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        {assignments.map((assignment) => (
          <div
            key={assignment.id}
            style={{
              width: '30%',
              padding: '20px',
              margin: '10px',
              border: '1px solid #ddd',
              borderRadius: '10px',
              backgroundColor: assignment.statusColor === 'red' ? '#ffdddd' : '#ddffdd',
              cursor: 'pointer',
            }}
            onClick={() => setSelectedAssignment(assignment)}
          >
            <h2>{assignment.title}</h2>
            <p>{assignment.assignment}</p>
            <p>Last Date of Submission: {assignment.dueDate}</p>
            <p>{assignment.code}</p>
            <p>Status: <span style={{ color: assignment.statusColor }}>{assignment.status}</span></p>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '30px' }}>
        {assignmentDetails}
      </div>
    </div>
  );
}
