import "../style/LeftMenu.css"

import { Link } from "react-router-dom";
import logo from "../img/Logo.png"
import { MdDashboard } from "react-icons/md";
import { IoMdPersonAdd } from "react-icons/io";
import { FaPen } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { GrUserAdmin } from "react-icons/gr";
function Box() {
  return (
    <>
    <div className='leftbox'>
        <div className='logo'>
            <img src={logo} />
        </div>
          <div className='menuBox'>
           <div > 
            <ul className='menuList' >
           <Link to ='/' className='Link'>
                <li>
                   <i >
                    <MdDashboard />
                   </i>
                   <a >Dashboard</a>
                </li>
            </Link>
            <Link to ='/updatemark' className='Link'>
                <li>
                   <i>
                    <FaPen />
                   </i>
                    <a href='#' >Update Mark</a>
                </li>
            </Link>
            <Link to ='/addStudent' className='Link'>
                <li>
                   <i>
                    <IoMdPersonAdd />
                   </i>
                   <a href='#' >Add Student</a>
                </li>
                </Link>
                <Link to ='/' className='Link'> 
                <li>
                   <i>
                    <RiAdminFill />
                   </i>
                   <a href='#' >All Admin</a>
                </li>
                </Link>
                <Link to ='/' className='Link'>
                <li>
                   <i>
                    <GrUserAdmin />
                   </i>
                   <a href='#'>Add Admin</a>
                </li>
                </Link>
            </ul>
           </div>
        </div>
    </div>

    <div className='leftbox1'>
        <div className='logo'>
            <img src={logo} />
        </div>
          <div className='menuBox'>
           <div > 
            <ul className='menuList' >
           <Link to ='/' className='Link'>
                <li>
                   <i >
                    <MdDashboard />
                   </i>
                   <a >Dashboard</a>
                </li>
            </Link>
            <Link to ='/updatemark' className='Link'>
                <li>
                   <i>
                    <FaPen />
                   </i>
                    <a href='#' >Update Mark</a>
                </li>
            </Link>
            <Link to ='/addStudent' className='Link'>
                <li>
                   <i>
                    <IoMdPersonAdd />
                   </i>
                   <a href='#' >Add Student</a>
                </li>
                </Link>
                <Link to ='/' className='Link'> 
                <li>
                   <i>
                    <RiAdminFill />
                   </i>
                   <a href='#' >All Admin</a>
                </li>
                </Link>
                <Link to ='/' className='Link'>
                <li>
                   <i>
                    <GrUserAdmin />
                   </i>
                   <a href='#'>Add Admin</a>
                </li>
                </Link>
            </ul>
           </div>
        </div>
    </div>
    </>
  )
}

export default Box