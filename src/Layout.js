import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from "./comps/NavBar";
import Comp1 from "./comps/Comp1";

function Layout(){
    return(
       <Router>

        <Routes>
            <Route path="/" exact element={<NavBar></NavBar>}></Route>
            <Route path="/scndPage" exact element={<Comp1></Comp1>}></Route>
        </Routes>

       </Router>
    )
}

export default Layout;

