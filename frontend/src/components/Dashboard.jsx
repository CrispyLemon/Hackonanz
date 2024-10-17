import React from 'react';
import Notes from './Notes';
import { useState } from 'react';

export default function Dashboard() {

  const [notes, setNotes] = useState([
    { id: 1, title: 'Note 1', content: 'Lorem ipsum dolor sit amet...', color: '#BBDEFB' },
    { id: 2, title: 'Note 2', content: 'Lorem ipsum dolor sit amet...', color: '#C8E6C9' },
    { id: 3, title: 'Note 3', content: 'Lorem ipsum dolor sit amet...', color: '#FFECB3' },
    { id: 4, title: 'Note 4', content: 'Lorem ipsum dolor sit amet...', color: '#FFE0B2' },
  ]);

  const [newNote, setNewNote] = useState({ title: '', content: '', color: '#BBDEFB' });

  const addNote = () => {
    const id = notes.length + 1; // Assign new id based on the length of notes array
    setNotes([...notes, { ...newNote, id }]);
    setNewNote({ title: '', content: '', color: '#BBDEFB' }); // Reset form after adding
  };

  return (
    <>
      <div style={{ backgroundColor: "#d9d9d9", borderRadius: "1rem", padding: "1.5rem", width: "90%", margin: 'auto' }}>

        {/* Top section: Upcoming Tasks and Calendar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px' }}>
          {/* Upcoming Tasks */}
          <div style={{ backgroundColor: "white", borderRadius: "1rem", padding: "20px", width: "45%" }}>
            <h3 style={{ textAlign: "center", marginBottom: '20px' }}>Upcoming Tasks</h3>
            <ul style={{ padding: 0, listStyle: 'none' }}>
              <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px', backgroundColor: '#F3E5F5', borderRadius: '10px', marginBottom: '10px' }}>
                <span>Assignment - deadline today! (16/10/2024)</span>
                <input type="checkbox" checked />
              </li>
              <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px', backgroundColor: '#F3E5F5', borderRadius: '10px', marginBottom: '10px' }}>
                <span>Ask sir about doubt (17/10/2024)</span>
                <input type="checkbox" />
              </li>
              <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px', backgroundColor: '#F3E5F5', borderRadius: '10px', marginBottom: '10px' }}>
                <span>CT - COCS301 (24/10/2024)</span>
                <input type="checkbox" />
              </li>
            </ul>
            <div style={{ textAlign: "right" }}>
              <button style={{
                backgroundColor: '#E0E0E0', padding: '10px', borderRadius: '50%', border: 'none', cursor: 'pointer'
              }}>✏️</button>
            </div>
          </div>

          {/* Calendar */}
          <div style={{ backgroundColor: "white", borderRadius: "1rem", padding: "20px", width: "45%", textAlign: "center" }}>
            <h3 style={{ marginBottom: '20px' }}>Calendar</h3>
            <div>
              <iframe src="https://calendar.google.com/calendar/embed?src=anubhav.singhal.ug23%40nsut.ac.in&ctz=Asia%2FKolkata"
                style={{ border: "0", borderRadius: "10px" }} width="500" height="500"></iframe>
            </div>
          </div>
        </div>

        {/* Notes Section */}
        <div style={{ backgroundColor: "white", borderRadius: "1rem", padding: "20px", marginTop: "20px", textAlign: "center" }}>
          <Notes notes={notes} />
          
          {/* Add new note form */}
          <div style={{ marginTop: '20px' }}>
            <input
              type="text"
              placeholder="Title"
              value={newNote.title}
              onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
              style={{ marginRight: '10px', padding: '10px' }}
            />
            <input
              type="text"
              placeholder="Content"
              value={newNote.content}
              onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
              style={{ marginRight: '10px', padding: '10px' }}
            />
            <select
              value={newNote.color}
              onChange={(e) => setNewNote({ ...newNote, color: e.target.value })}
              style={{ marginRight: '10px', padding: '10px' }}
            >
              <option value="#BBDEFB">Blue</option>
              <option value="#C8E6C9">Green</option>
              <option value="#FFECB3">Yellow</option>
              <option value="#FFE0B2">Orange</option>
            </select>
            <button onClick={addNote} style={{ padding: '10px 20px' }}>Add Note</button>
          </div>

          
        </div>
      </div>
    </>
  );
}
