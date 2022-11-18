import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter,BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Login from "./login/Login/Login.js";
import Register from "./register/Register.js";
import Nav from "./nav.js";
import Home from "./home/home";

import Main from "./mainpage/main.js";
export const AuthContext=React.createContext();

export default function App() {
 
  return (
    <>
     
    <Nav/>
    

     <HashRouter> 
      
        <Routes>
          <Route exact path="/register" element={<Register/>}></Route>
          <Route exact path="/login" element={<Login/>}></Route>
          <Route exact path="/main" element={<Main/>}></Route>   
          <Route exact path="/" element={<Home/>}></Route>   
     </Routes>
     
     </HashRouter>
     {/* <div style={style}>
      
     </div> */}
     
    </>
  )
  }