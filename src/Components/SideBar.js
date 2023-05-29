import React from 'react'
import {
    FaCommentAlt,
    FaThList,
   FaBars,
} from 'react-icons/fa'

import { RxDashboard } from "react-icons/rx";
import { GoGraph } from "react-icons/go";
import { BsTextIndentRight } from "react-icons/bs";

import { NavLink } from 'react-router-dom'

const SideBar = ({ children }) => {
    const menuItem=[
        {
            path:"/",
            name:"Home",
            icon:<RxDashboard/>
        },
        {
            path:"/section1",
            name:"Section 1",
            icon:<GoGraph/>
        },
        {
            path:"/section2",
            name:"Section2",
            icon:<FaCommentAlt/>
        },
        {
            path:"/section8",
            name:"Section8",
            icon:<BsTextIndentRight/>
        },
   ]
   return (
      <div className='container'>
         <div   className='sidebar'>
            <div className="top_section">
               <h1 className="logo">Name</h1>
               <div className="bars">
                   <FaBars     />
               </div>
            </div>
            {
               menuItem.map((item, index) => ( 
                  <NavLink to={item.path} key={index} className='link' activeclassName="active">
                     <div className="icon">{item.icon}</div>
                     <div className="link_text">{ item.name}</div>
                  </NavLink>
               ))
            }
         </div>
         <main>{children}</main>
     
      </div>
   )
}
export default SideBar