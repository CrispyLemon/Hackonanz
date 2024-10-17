import React from 'react'
import Course from '../../public/images/Course.jpg'

export default function Courses() {
  return (
    <>
      <div style={{ backgroundColor: "#d9d9d9", borderRadius: "1rem", padding: "1.5rem", width: "90%", margin: 'auto' }}>
        <img src={Course} style={{ height: '580px' }} alt="" />
      </div>
    </>
  )
}
