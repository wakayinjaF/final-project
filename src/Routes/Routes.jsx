import React from 'react';
import { Navigate,Routes,Route } from 'react-router-dom';
import App from '../App';
import Signup from '../components/Signup/Signup';
import Login from '../components/Login/Login';


const MyRoutes = () => {
  const user = localStorage.getItem("token")
  return (
    <Routes>
      {user &&<Route path='/' exact element={<App />} />}
        {/* <Route path="/" exact element={<App />} /> */}
        <Route path="/Signup" exact element={<Signup />} />
        <Route path="/Login" exact element={<Login />} />
        <Route path='/' exact element={<Navigate replace to="/Login" />} />
    </Routes>
  );
};

export default Routes;
  