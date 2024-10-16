import React from 'react';

export default function Dashboard() {
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
                style={{ border: "0", borderRadius: "10px" }} width="400" height="400"></iframe>
            </div>
            {/* <div style={{ textAlign: "right", marginTop: "10px" }}>
              <button style={{
                backgroundColor: '#E0E0E0', padding: '10px', borderRadius: '50%', border: 'none', cursor: 'pointer'
              }}>✏️</button>
            </div> */}
          </div>
        </div>

        {/* Notes Section */}
        <div style={{ backgroundColor: "white", borderRadius: "1rem", padding: "20px", marginTop: "20px", textAlign: "center" }}>
          <h3>Notes</h3>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px', gap: '20px' }}>
            <div style={{ backgroundColor: '#BBDEFB', borderRadius: '10px', padding: '15px', width: '23%' }}>
              <h4>Note 1</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            </div>
            <div style={{ backgroundColor: '#C8E6C9', borderRadius: '10px', padding: '15px', width: '23%' }}>
              <h4>Note 2</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            </div>
            <div style={{ backgroundColor: '#FFECB3', borderRadius: '10px', padding: '15px', width: '23%' }}>
              <h4>Note 3</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            </div>
            <div style={{ backgroundColor: '#FFE0B2', borderRadius: '10px', padding: '15px', width: '23%' }}>
              <h4>Note 4</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            </div>
          </div>
          <div style={{ textAlign: "right", marginTop: '10px' }}>
            <button style={{
              backgroundColor: '#E0E0E0', padding: '10px', borderRadius: '50%', border: 'none', cursor: 'pointer'
            }}>➕ Create</button>
          </div>
        </div>
      </div>
    </>
  )
}
