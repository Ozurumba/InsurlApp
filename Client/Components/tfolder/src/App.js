import React from "react";
import SignUp from './components/SignUpPage';
import Login from './components/LoginPage';
// import { Route } from 'react-router-dom';
import "./App.css";
import SidebarTemplate from './components/MySidebar';
// import SignUp from './components/SignUpPage';
import { Link } from 'react-router-dom';
import BeneficiaryDetails from "./components/EnterDetails";

function App() {
  
  // return  <SidebarTemplate/>
  // return <BeneficiaryDetails/> 
  return <SignUp/>
  // return <Login/>
  
}

export default App;
