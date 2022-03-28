import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

//pages
import Register from './pages/Register.js';
// import Login from './pages/Login.js';
// import Logout from './pages/Logout.js';
// import Checklist from './pages/Checklist.js';
// import Config from './pages/Config.js';
// import Assigned from './pages/Assigned.js';
// import ViewChecklist from './pages/ViewChecklist.js';

//componenets
import Navbar from './components/Navbar.js';

function App() {
return (
  <>
  <main>
    <Navbar/>
    <Routes>
      <Route path = '/register' element = {<Register />} />
      {/* <Route path = '/login' element = {<Login />} />
      <Route path = '/logout' element = {<Logout/>} />
      <Route path = '/checklist' element = {<Checklist />} />
      <Route path = '/config' element = {<Config />} />
      <Route path = '/assigned' element = {<Assigned />} />
      <Route path = '/viewchecklist' element = {<ViewChecklist />} /> */}
    </Routes>
  </main>
  </>
);
}

export default App;
