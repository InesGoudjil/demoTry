import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from "./comps/NavBar";
import Comp1 from "./comps/Comp1";
import Home from "./comps/Home";
import About from "./comps/About";
import ContactUs from "./comps/ContactUs";
import More from "./comps/More";

function Layout(){
    return(
       <Router>

        <Routes>
            <Route path="/" exact element={<NavBar></NavBar>}></Route>
            <Route path="/home" exact element={<Home></Home>}></Route>
            <Route path="/about" exact element={<About></About>}></Route>
            <Route path="/contactUs" exact element={<ContactUs></ContactUs>}></Route>
            <Route path="/contactUs" exact element={<More></More>}></Route>

        </Routes>

       </Router>
    )
}

export default Layout;

