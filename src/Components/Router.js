import React from 'react'
import '../App.css';
import  'bootstrap/dist/css/bootstrap.min.css'
 import SideBar from './SideBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Section1 from '../Pages/Section1';
import Section2 from '../Pages/Section2';
import Section8 from '../Pages/Section8';


const Router = () => {
   return (
    
      <BrowserRouter>
         <SideBar >
         <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/home" element={<Home />} /> 
            <Route path="/section1" element={<Section1 />} /> 
            <Route path="/section2" element={<Section2 />} /> 
            
               <Route path="/section8" element={<Section8 />} /> 
               
               </Routes>
     </SideBar >
      
      </BrowserRouter>
   )
}
export default Router