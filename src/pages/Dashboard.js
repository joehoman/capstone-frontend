import React from 'react'
import Inbound from './Inbound.js'
import { useState } from 'react';
import Assigned from './Assigned.js';
import Admin from './Admin.js';

export default function Dashboard() {
  const [userInfo, setUserInfo] = useState(JSON.parse(localStorage.getItem("userInfo")))

  if (userInfo.role === "inbound") {
    return (
      <Inbound />
    )
  }

  if (userInfo.role === "sponsor") {
    return (
      <Assigned />
    )
  }

  if (userInfo.role === "admin") {
    return (
      <Admin />
    )
  }


  return (
    // {console.log(userInfo)}
    <div>Dashboard</div>
  )
}
