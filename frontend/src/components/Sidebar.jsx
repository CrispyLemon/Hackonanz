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
        <li className={`${location.pathname === '/' ? 'active-tab' : ''}`}>
          <Link to='/' style={{ color: "white", textDecoration: "none" }}>
            <TbHomeStats /> DASHBOARD
          </Link>
        </li>
        <li style={{ padding: "4px" }} className={`${location.pathname === '/students' ? 'active-tab' : ''}`}>
          <Link to='/students' style={{ color: "white", textDecoration: "none" }}>
            <img src={pulse_connect} style={{ height: "40px", marginRight: "0.5rem" }} alt="pulse connect" />
            PULSE_CONNECT
          </Link>
        </li>
        <li className={`${location.pathname === '/courses' ? 'active-tab' : ''}`}>
          <Link to='/courses' style={{ color: "white", textDecoration: "none" }}>
            <GrTasks /> COURSES
          </Link>
        </li>
        <li className={`${location.pathname === '/assignments' ? 'active-tab' : ''}`}>
          <Link to='/assignments' style={{ color: "white", textDecoration: "none" }}>
            <SiBookstack /> ASSIGNMENTS
          </Link>
        </li>
      </ul>

      <ul style={{ marginTop: "16rem" }}>
        <li>
          <Link to="http://nsut.ac.in/en/home" target="_blank" style={{ textDecoration: "none", color: "white" }}>
            <PiBuildingsFill /> NSUT
          </Link>
        </li>
      </ul>
    </div>
  );
}
