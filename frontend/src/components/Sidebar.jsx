import { React } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { TbHomeStats } from "react-icons/tb";
import { SiBookstack } from "react-icons/si";
import { PiBuildingsFill } from "react-icons/pi";
import { GrTasks } from "react-icons/gr";
import logo from '../../public/images/logo.svg';
import pulse_connect from '../../public/images/logo_invert.svg';
import './Sidebar.css';

export default function Sidebar() {
  const location = useLocation();

  return (
    <div className='sidebar'>
      <div className='d-flex'>
        <div>
          <img src={logo} style={{ height: "5rem" }} alt="logo" />
        </div>
        <div>
          <h1 style={{}} className='pulse'> PULSE</h1>
          <p style={{}} className='pulse'> Learn. Connect. Live </p>
        </div>
      </div>

      <ul>
        <Link to='/' style={{ color: "white", textDecoration: "none" }}>
          <li className={`${location.pathname === '/' ? 'active-tab' : ''}`}>
            <TbHomeStats /> DASHBOARD
          </li>
        </Link>
        <Link to='/students' style={{ color: "white", textDecoration: "none" }}>
          <li style={{ padding: "4px" }} className={`${location.pathname === '/students' ? 'active-tab' : ''}`}>
            <img src={pulse_connect} style={{ height: "40px", marginRight: "0.5rem" }} alt="pulse connect" />
            PULSE_CONNECT
          </li>
        </Link>
        <Link to='/courses' style={{ color: "white", textDecoration: "none" }}>
          <li className={`${location.pathname === '/courses' ? 'active-tab' : ''}`}>
            <GrTasks /> COURSES
          </li>
        </Link>
        <Link to='/assignments' style={{ color: "white", textDecoration: "none" }}>
          <li className={`${location.pathname === '/assignments' ? 'active-tab' : ''}`}>
            <SiBookstack /> ASSIGNMENTS
          </li>
        </Link>
      </ul>

      <ul style={{ marginTop: "16rem" }}>
        <Link to="http://nsut.ac.in/en/home" target="_blank" style={{ textDecoration: "none", color: "white" }}>
          <li>
            <PiBuildingsFill /> NSUT
          </li>
        </Link>
      </ul>
    </div>
  );
}
