import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

//pages
import Register from './pages/Register.js';
import Login from './pages/Login.js';
import BasicHome from './pages/BasicHome';
import Logout from './pages/Logout.js';
import Dashboard from './pages/Dashboard.js';
import Inbound from './pages/Inbound.js';
import Assigned from './pages/Assigned.js';
import ViewChecklist from './pages/ViewChecklist.js';
import InboundChecklist from './components/InboundChecklist.js';
import AdminClickUnassigned from './pages/AdminPages/AdminClickUnassigned.js';
import AdminClickSponsor from './pages/AdminPages/AdminClickSponsor.js';
// import Config from './pages/Config.js';
// import Assigned from './pages/Assigned.js';
// import ViewChecklist from './pages/ViewChecklist.js';

//componenets
import Navbar from './components/Navbar.js';

//Astro UI
import '@astrouxds/astro-web-components/dist/astro-web-components/astro-web-components.css'


function App() {
return (
  <>
  <main>
    <Navbar/>
    <Routes>
      <Route path = '/register' element = {<Register />} />
      <Route path = '/login' element = {<Login />} />
      <Route path = '/' element = {<BasicHome />} />
      <Route path = '/inbound' element = {<Inbound />} />
      <Route path = '/dashboard' element = {<Dashboard />} />
      <Route path = '/logout' element = {<Logout/>} />
      <Route path = '/assigned' element = {<Assigned/>} />
      <Route path = '/assigned/inbound/details' element = {<ViewChecklist/>} />
      <Route path = '/inboundchecklist' element = {<InboundChecklist />} />
      <Route path = '/admin/unassigned/details' element = {<AdminClickUnassigned/>} />
      <Route path = '/admin/sponsor/details' element = {<AdminClickSponsor/>} />
      {/* <Route path = '/config' element = {<Config />} />
      <Route path = '/assigned' element = {<Assigned />} />
       <Route path = '/viewchecklist' element = {<ViewChecklist />} /> */}
    </Routes>
  </main>
  </>
);
}

export default App;
