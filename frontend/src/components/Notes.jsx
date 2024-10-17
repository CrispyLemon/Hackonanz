import React from 'react';

const Notes = ({ notes }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px', gap: '20px' }}>
      {notes.map(note => (
        <div key={note.id} style={{ backgroundColor: note.color, borderRadius: '10px', padding: '15px', width: '23%' }}>
          <h4>{note.title}</h4>
          <p>{note.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Notes;
